import { z } from "zod";
import { isProfessionalEmail } from "@/lib/utils/email-utils";

export const RegistrationSchema = z.object({
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
          .regex(/^(\+?\d{1,4}[-.\s]?)?(\(?\d{1,}\)?[-.\s]?)?[\d\s-.]{5,}$/, "Format de téléphone invalide"),
     company: z.string().min(2, "Le nom de la société est requis"),
     tva: z.string().optional(),
     function: z.string().optional(),
     message: z.string().optional(),
     consent: z.boolean().refine((v) => v === true, {
          message: "Vous devez accepter l'utilisation de vos données",
     }),
});

export type RegistrationData = z.infer<typeof RegistrationSchema>;
