"use server";

import { BrevoClient } from "@getbrevo/brevo";
import { parsePhoneNumber } from "libphonenumber-js";

import { RegistrationSchema } from "@/lib/schemas/contact-schema";

export async function submitContact(formData: FormData) {
     const apiKey = process.env.BREVO_API_KEY;
     const listId = parseInt(process.env.LIST_ID || "42", 10);

     if (!apiKey) {
          console.error("CRITICAL: BREVO_API_KEY is not defined in environment variables.");
          return { success: false, error: "Configuration du serveur incomplète (Missing API Key)." };
     }

     if (Number.isNaN(listId) || listId <= 0) {
          console.error("CRITICAL: LIST_ID is invalid:", process.env.LIST_ID);
          return { success: false, error: "Configuration du serveur incomplète (Invalid LIST_ID)." };
     }

     // Configure API instance
     const apiInstance = new BrevoClient({ apiKey });
     // Extract data for validation
     const rawData = {
          date_formation: formData.get("date_formation"),
          firstname: formData.get("firstname"),
          lastname: formData.get("lastname"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          tva: formData.get("tva") || undefined,
          function: formData.get("function") || undefined,
          consent: formData.get("consent") === "on",
     };

     // Server-side validation
     const result = RegistrationSchema.safeParse(rawData);
     if (!result.success) {
          return { success: false, error: "Données invalides : " + result.error.issues[0].message };
     }

     const { date_formation, email, firstname, lastname, phone, company, tva, function: function_role } = result.data;

     // Determine target Brevo List ID based on the selected training date
     let targetListId = listId; // Fallback to default if somehow needed, though validation prevents this
     if (date_formation === "2026-04-23") {
          targetListId = 47;
     } else if (date_formation === "2026-05-21") {
          targetListId = 48;
     } else if (date_formation === "2026-06-23") {
          targetListId = parseInt(process.env.LIST_ID_JUNE || "49", 10);
     }

     // Format phone for Brevo SMS using libphonenumber-js
     let formattedSMS = phone;
     try {
          const phoneNumber = parsePhoneNumber(phone, "FR");
          if (phoneNumber && phoneNumber.isValid()) {
               formattedSMS = phoneNumber.format("E.164");
          } else {
               // Fallback manual formatting if parsing fails (though validation should catch this)
               formattedSMS = phone.replace(/[\s.-]/g, "");
               if (formattedSMS.startsWith("0")) {
                    formattedSMS = "+33" + formattedSMS.substring(1);
               } else if (!formattedSMS.startsWith("+")) {
                    formattedSMS = "+" + formattedSMS;
               }
          }
     } catch (e) {
          console.error("Phone parsing error:", e);
          // Fallback manual formatting
          formattedSMS = phone.replace(/[\s.-]/g, "");
          if (formattedSMS.startsWith("0")) {
               formattedSMS = "+33" + formattedSMS.substring(1);
          } else if (!formattedSMS.startsWith("+")) {
               formattedSMS = "+" + formattedSMS;
          }
     }

     try {
          const attributes: Record<string, any> = {
               NOM: lastname,
               PRENOM: firstname,
               SMS: formattedSMS,
               NOM_DE_SOCIETE: company,
          };

          if (tva) attributes.TVA = tva;
          if (function_role) attributes.FONCTION = function_role;

          await apiInstance.contacts.createContact({
               email: email,
               attributes: attributes,
               listIds: [targetListId],
               updateEnabled: true
          });
          return { success: true };
     } catch (error: any) {
          console.error("Error submitting to Brevo", error);
          const apiErrorMessage =
               error.body?.message ||
               error.body?.error ||
               error.message ||
               "Erreur Brevo inconnue.";
          return {
               success: false,
               error: `Erreur Brevo: ${apiErrorMessage}`,
          };
     }
}
