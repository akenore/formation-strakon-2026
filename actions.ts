"use server";

import * as Brevo from "@getbrevo/brevo";
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
     const apiInstance = new Brevo.ContactsApi();
     apiInstance.setApiKey(Brevo.ContactsApiApiKeys.apiKey, apiKey);

     // Extract data for validation
     const rawData = {
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

     const { email, firstname, lastname, phone, company, tva, function: function_role } = result.data;

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
          const contact = new Brevo.CreateContact();
          contact.email = email;

          const attributes: Record<string, any> = {
               NOM: lastname,
               PRENOM: firstname,
               SMS: formattedSMS,
               NOM_DE_SOCIETE: company,
          };

          if (tva) attributes.TVA = tva;
          if (function_role) attributes.FONCTION = function_role;

          contact.attributes = attributes;

          contact.listIds = [listId];
          contact.updateEnabled = true;

          await apiInstance.createContact(contact);
          return { success: true };
     } catch (error: any) {
          console.error("Error submitting to Brevo");
          if (error.response) {
               const apiErrorMessage =
                    error.response.body?.message ||
                    error.response.body?.error ||
                    "Erreur Brevo inconnue.";
               return {
                    success: false,
                    error: `Erreur Brevo: ${apiErrorMessage}`,
               };
          } else {
               return { success: false, error: "Erreur serveur lors de l'inscription." };
          }
     }
}
