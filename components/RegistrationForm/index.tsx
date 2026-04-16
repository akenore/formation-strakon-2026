"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegistrationSchema, type RegistrationData } from "@/lib/schemas/contact-schema";
import { submitContact } from "@/actions";

export default function RegistrationForm() {
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
     const [showOptional, setShowOptional] = useState(false);

     const {
          register,
          handleSubmit,
          reset,
          control,
          setValue,
          watch,
          formState: { errors },
     } = useForm<RegistrationData>({
          resolver: zodResolver(RegistrationSchema),
          defaultValues: {
               date_formation: "",
               firstname: "",
               lastname: "",
               email: "",
               phone: "",
               company: "",
               tva: "",
               function: "",
               consent: false,
          },
     });

     const onSubmit = async (data: RegistrationData) => {
          setIsSubmitting(true);
          setSubmitStatus(null);

          const formData = new FormData();
          Object.entries(data).forEach(([key, value]) => {
               if (value !== undefined && value !== null) {
                    formData.append(key, value === true ? "on" : value.toString());
               }
          });

          try {
               const result = await submitContact(formData);
               if (result.success) {
                    setSubmitStatus({
                         success: true,
                         message: "Inscription réussie ! Nous vous contacterons prochainement.",
                    });
                    reset();
               } else {
                    setSubmitStatus({
                         success: false,
                         message: result.error || "Une erreur est survenue.",
                    });
               }
          } catch (error) {
               setSubmitStatus({
                    success: false,
                    message: "Une erreur critique est survenue.",
               });
          } finally {
               setIsSubmitting(false);
          }
     };

     // Watch the date_formation field to power the UI selection state
     const selectedDate = watch("date_formation");

     const trainingDates = [
          { value: "2026-04-23", label: "23 Avril 2026", disabled: true, tag: "Complet" },
          { value: "2026-05-21", label: "21 Mai 2026" },
     ];

     return (
          <div className="bg-white text-gray-900 p-8 lg:p-12 rounded-2xl shadow-2xl">
               <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* Date Selection */}
                    <div>
                         <label className="block text-sm font-semibold mb-3">Sélectionnez la date de formation *</label>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {trainingDates.map((date) => (
                                   <button
                                        key={date.value}
                                        type="button"
                                        disabled={date.disabled}
                                        onClick={() => setValue("date_formation", date.value, { shouldValidate: true })}
                                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 relative ${
                                             date.disabled
                                                  ? "border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed"
                                                  : selectedDate === date.value
                                                       ? "border-blue-600 bg-blue-50 ring-2 ring-blue-600 ring-opacity-20"
                                                       : "border-gray-200 hover:border-blue-300 hover:bg-gray-50 bg-white"
                                        }`}
                                   >
                                        <div className="flex items-center justify-between">
                                             <span className={`font-medium ${date.disabled ? "text-gray-500" : selectedDate === date.value ? "text-blue-700" : "text-gray-700"}`}>
                                                  {date.label}
                                             </span>
                                             {date.tag && (
                                                  <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-md uppercase tracking-wider">{date.tag}</span>
                                             )}
                                             {!date.disabled && selectedDate === date.value && (
                                                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                  </svg>
                                             )}
                                        </div>
                                   </button>
                              ))}
                         </div>
                         {/* Hidden field for react-hook-form registration if needed, though setValue handles state. We register it to ensure validation works seamlessly. */}
                         <input type="hidden" {...register("date_formation")} />
                         {errors.date_formation && <p className="mt-2 text-sm text-red-500 font-medium">{errors.date_formation.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                              <label className="block text-sm font-semibold mb-2">Prénom *</label>
                              <input
                                   {...register("firstname")}
                                   type="text"
                                   placeholder="Ex: Jean"
                                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition ${errors.firstname ? "border-red-500 focus:border-transparent" : "border-gray-300 focus:border-transparent"
                                        }`}
                              />
                              {errors.firstname && <p className="mt-1 text-xs text-red-500 font-medium">{errors.firstname.message}</p>}
                         </div>
                         <div>
                              <label className="block text-sm font-semibold mb-2">Nom *</label>
                              <input
                                   {...register("lastname")}
                                   type="text"
                                   placeholder="Ex: Dupont"
                                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition ${errors.lastname ? "border-red-500 focus:border-transparent" : "border-gray-300 focus:border-transparent"
                                        }`}
                              />
                              {errors.lastname && <p className="mt-1 text-xs text-red-500 font-medium">{errors.lastname.message}</p>}
                         </div>
                    </div>

                    <div>
                         <label className="block text-sm font-semibold mb-2">Email professionnel *</label>
                         <input
                              {...register("email")}
                              type="email"
                              placeholder="jean.dupont@societe.fr"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition ${errors.email ? "border-red-500 focus:border-transparent" : "border-gray-300 focus:border-transparent"
                                   }`}
                         />
                         {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email.message}</p>}
                         <p className="mt-1 text-[10px] text-gray-400">Les adresses comme AOL, iCloud ou ProtonMail ne sont pas acceptées.</p>
                    </div>

                    <div>
                         <label className="block text-sm font-semibold mb-2">Téléphone *</label>
                         <Controller
                              name="phone"
                              control={control}
                              render={({ field }) => (
                                   <PhoneInput
                                        {...field}
                                        international
                                        defaultCountry="FR"
                                        placeholder="+33 6 12 34 56 78"
                                        className={`w-full px-4 py-3 border rounded-lg focus-within:ring-2 focus-within:ring-blue-600 outline-none transition ${errors.phone ? "border-red-500" : "border-gray-300"
                                             } [&>input]:outline-none [&>input]:bg-transparent`}
                                   />
                              )}
                         />
                         {errors.phone && <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone.message}</p>}
                    </div>

                    {/* Toggle Optional Fields */}
                    <div className="pt-2 pb-2">
                         <button
                              type="button"
                              onClick={() => setShowOptional(!showOptional)}
                              className="text-strakon-blue font-medium text-sm flex items-center gap-2 hover:text-blue-700 transition"
                         >
                              {showOptional ? (
                                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                              ) : (
                                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                              )}
                              Informations complémentaires (optionnel)
                         </button>
                    </div>

                    {showOptional && (
                         <div className="space-y-6 animate-fade-in border-l-2 border-blue-100 pl-4 py-2">
                              <div>
                                   <label className="block text-sm font-semibold mb-2">Fonction</label>
                                   <select
                                        {...register("function")}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                   >
                                        <option value="">Sélectionnez votre fonction</option>
                                        <option value="Ingénieur structure">Ingénieur structure</option>
                                        <option value="Projeteur béton">Projeteur béton</option>
                                        <option value="Responsable BE">Responsable BE</option>
                                        <option value="Chef de projet">Chef de projet</option>
                                        <option value="Directeur technique">Directeur technique</option>
                                        <option value="Autre">Autre</option>
                                   </select>
                                   {errors.function && <p className="mt-1 text-xs text-red-500 font-medium">{errors.function.message}</p>}
                              </div>

                              <div>
                                   <label className="block text-sm font-semibold mb-2">Société</label>
                                   <input
                                        {...register("company")}
                                        type="text"
                                        placeholder="Nom de votre entreprise"
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition ${errors.company ? "border-red-500 focus:border-transparent" : "border-gray-300 focus:border-transparent"
                                             }`}
                                   />
                                   {errors.company && <p className="mt-1 text-xs text-red-500 font-medium">{errors.company.message}</p>}
                              </div>

                              <div>
                                   <label className="block text-sm font-semibold mb-2">N° TVA intracommunautaire</label>
                                   <input
                                        {...register("tva")}
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                        placeholder="FR12345678901"
                                   />
                                   {errors.tva && <p className="mt-1 text-xs text-red-500 font-medium">{errors.tva.message}</p>}
                              </div>
                         </div>
                    )}

                    <div className="flex items-start">
                         <input
                              {...register("consent")}
                              type="checkbox"
                              className={`mt-1 mr-3 w-5 h-5 text-strakon-blue focus:ring-strakon-blue ${errors.consent ? "border-red-500" : "border-gray-300"
                                   }`}
                         />
                         <label className="text-sm text-gray-600">
                              J'accepte que mes données soient utilisées pour traiter ma demande d'inscription à la formation STRAKON et recevoir des informations sur les
                              produits et services STRAKON. *
                         </label>
                    </div>
                    {errors.consent && <p className="mt-1 text-xs text-red-500 font-medium">{errors.consent.message}</p>}

                    {submitStatus && (
                         <div className={`p-4 rounded-lg flex items-center gap-3 ${submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                              {submitStatus.success ? (
                                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                             fillRule="evenodd"
                                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                             clipRule="evenodd"
                                        />
                                   </svg>
                              ) : (
                                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                             fillRule="evenodd"
                                             d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                             clipRule="evenodd"
                                        />
                                   </svg>
                              )}
                              <span className="font-medium">{submitStatus.message}</span>
                         </div>
                    )}

                    <div className="text-center pb-2">
                         <p className="text-sm font-medium text-gray-600">Commencez gratuitement – aucun paiement requis</p>
                    </div>

                    <button
                         type="submit"
                         disabled={isSubmitting}
                         className="w-full btn-strakon2 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                         {isSubmitting ? (
                              <div className="flex items-center justify-center gap-2">
                                   <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                   </svg>
                                   Envoi en cours...
                              </div>
                         ) : (
                              "Réserver ma place gratuite"
                         )}
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">* Champs obligatoires</p>
               </form>
          </div>
     );
}
