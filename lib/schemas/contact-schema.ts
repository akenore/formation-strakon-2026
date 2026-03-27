import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { isProfessionalEmail } from "@/lib/utils/email-utils";

export const RegistrationSchema = z.object({
     date_formation: z.string().min(1, "Veuillez sélectionner une date de formation"),
     firstname: z.string().min(2, "Le prénom est trop court"),
     lastname: z.string().min(2, "Le nom est trop court"),
     email: z
          .string()
          .email("Email invalide")
          .refine((email) => isProfessionalEmail(email), {
               message: "Veuillez renseigner une adresse e-mail professionnelle.",
          }),
     phone: z
          .string()
          .min(10, "Numéro de téléphone invalide")
          .refine((val) => isValidPhoneNumber(val), {
               message: "Numéro de téléphone invalide (vérifiez le pays et le format)",
          }),
     company: z.string().optional(),
     tva: z.string().optional(),
     function: z.string().optional(),
     consent: z.boolean().refine((v) => v === true, {
          message: "Vous devez accepter l'utilisation de vos données",
     }),
});

export type RegistrationData = z.infer<typeof RegistrationSchema>;
