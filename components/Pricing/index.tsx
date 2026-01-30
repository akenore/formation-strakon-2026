"use client";

interface PricingProps {
     scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Pricing({ scrollToSection }: PricingProps) {
     return (
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 lg:py-24">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl lg:text-4xl font-bold mb-4">💡 Offre découverte STRAKON</h2>
                         <p className="text-xl text-blue-200">Prolongez votre expérience pendant 3 mois</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                         <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
                              <div className="text-center mb-6">
                                   <h3 className="text-2xl font-bold mb-2">Offre Découverte 3 mois</h3>
                                   <div className="text-5xl font-bold text-strakon-blue mb-2">1 100 €</div>
                                   <div className="text-gray-600">HT</div>
                              </div>
                              <ul className="space-y-4">
                                   <li className="flex items-start">
                                        <svg className="w-6 h-6 text-strakon-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Clé de déblocage 3 mois sur votre poste</span>
                                   </li>
                                   <li className="flex items-start">
                                        <svg className="w-6 h-6 text-strakon-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>3 mois de maintenance inclus</span>
                                   </li>
                                   <li className="flex items-start">
                                        <svg className="w-6 h-6 text-strakon-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Accès au replay de la formation</span>
                                   </li>
                                   <li className="flex items-start">
                                        <svg className="w-6 h-6 text-strakon-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Support technique complet</span>
                                   </li>
                              </ul>
                         </div>

                         <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl border-4 border-strakon-orange relative">
                              <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 bg-strakon-orange text-white px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl font-bold text-center shadow-2xl min-w-[180px] sm:min-w-[200px] border-2 border-white whitespace-nowrap">
                                   <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] opacity-90 mb-0 sm:mb-0.5">Meilleure Offre</div>
                                   <div className="text-[12px] sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2">
                                        <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        Exclusivité Formation
                                   </div>
                              </div>
                              <div className="text-center mb-6 mt-4">
                                   <h3 className="text-2xl font-bold mb-2">Licence STRAKON 2026</h3>
                                   <div className="text-5xl font-bold text-strakon-orange mb-3">5 900 €</div>
                                   <div className="text-gray-600 block text-sm">HT (soit environ 10% du prix catalogue)</div>
                              </div>
                              <ul className="space-y-4">
                                   <li className="flex items-start">
                                        <svg className="w-6 h-6 text-strakon-blue mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Clé HASP libre de droit (perpétuelle)</span>
                                   </li>
                                   <li className="flex items-start">
                                        <svg className="w-6 h-6 text-strakon-blue mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Déduction des 1 100 € si offre découverte souscrite</span>
                                   </li>
                                   <li className="flex items-start">
                                        <svg className="w-6 h-6 text-strakon-blue mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Toutes les fonctionnalités STRAKON 2026</span>
                                   </li>
                                   <li className="flex items-start">
                                        <svg className="w-6 h-6 text-strakon-blue mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>3 mois de maintenance inclus</span>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                         <a
                              href="#inscription"
                              onClick={(e) => scrollToSection(e, "inscription")}
                              className="inline-block px-8 py-4 btn-strakon text-white font-bold rounded-lg shadow-lg pulse-animation"
                         >
                              S'inscrire maintenant
                         </a>
                    </div>
               </div>
          </div>
     );
}
