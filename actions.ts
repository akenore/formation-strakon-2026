"use server";

import * as Brevo from "@getbrevo/brevo";

import { RegistrationSchema } from "@/lib/schemas/contact-schema";

export async function submitContact(formData: FormData) {
     const apiKey = process.env.BREVO_API_KEY;
     const listId = parseInt(process.env.LIST_ID || "42", 10);

     if (!apiKey) {
          console.error("CRITICAL: BREVO_API_KEY is not defined in environment variables.");
          return {
               success: false,
               error: "Configuration du serveur incomplète (Missing API Key).",
               debug: { brevoApiKeyLength: 0 },
          };
     }

     const brevoApiKeyLength = apiKey.length;
     console.log("BREVO_API_KEY loaded (length):", brevoApiKeyLength);

     if (Number.isNaN(listId) || listId <= 0) {
          console.error("CRITICAL: LIST_ID is invalid:", process.env.LIST_ID);
          return {
               success: false,
               error: "Configuration du serveur incomplète (Invalid LIST_ID).",
               debug: { brevoApiKeyLength, listIdRaw: process.env.LIST_ID ?? null },
          };
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
          message: formData.get("message") || undefined,
          consent: formData.get("consent") === "on",
     };

     // Server-side validation
     const result = RegistrationSchema.safeParse(rawData);
     if (!result.success) {
          return { success: false, error: "Données invalides : " + result.error.issues[0].message };
     }

     const { email, firstname, lastname, phone, company, tva, function: function_role, message } = result.data;

     // Format phone for Brevo SMS (needs international format, e.g. +33...)
     // If it doesn't start with +, we assume it's a local number and might need a prefix, 
     // but for now we'll just ensure it has a + if it looks like one or at least keep it as string.
     let formattedSMS = phone.replace(/[\s.-]/g, "");
     if (!formattedSMS.startsWith("+")) {
          // If no prefix, we add +33 by default as a fallback if it looks like a French number
          // or just add + if the user provided 33...
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
          if (message) attributes.MESSAGE = message;

          contact.attributes = attributes;

          contact.listIds = [listId];
          contact.updateEnabled = true;

          console.log("Submitting to Brevo with listId:", listId);
          console.log("Contact Data:", { email, attributes: contact.attributes });

          await apiInstance.createContact(contact);
          console.log("Brevo submission successful");
           return { success: true };
     } catch (error: any) {
          console.error("Error submitting to Brevo:");
          if (error.response) {
               console.error("Response Status:", error.response.status);
               console.error("Response Body:", JSON.stringify(error.response.body, null, 2));
               const apiErrorMessage =
                    error.response.body?.message ||
                    error.response.body?.error ||
                    error.response.body?.details ||
                    "Erreur Brevo inconnue.";
               return {
                    success: false,
                    error: `Erreur Brevo (${error.response.status}): ${apiErrorMessage}`,
                    debug: {
                         brevoApiKeyLength,
                         listId,
                         brevoStatus: error.response.status,
                         brevoMessage: apiErrorMessage,
                    },
               };
          } else {
               console.error("Error Message:", error.message);
               return {
                    success: false,
                    error: `Erreur serveur: ${error.message}`,
                    debug: { brevoApiKeyLength, listId },
               };
          }
     }
}
