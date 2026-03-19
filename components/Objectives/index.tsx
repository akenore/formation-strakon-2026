export default function Objectives() {
     return (
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
               <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Objectifs de la formation</h2>
                    <p className="text-xl text-gray-600">Maîtrisez STRAKON pour optimiser vos projets</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover-lift border-t-4 border-strakon-blue">
                         <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                              <svg className="w-8 h-8 text-strakon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                         </div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">Prendre en main STRAKON rapidement</h3>
                         <p className="text-gray-600">Explorez toutes les fonctionnalités principales du logiciel BIM</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover-lift border-t-4 border-strakon-orange">
                         <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                              <svg className="w-8 h-8 text-strakon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                   ></path>
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                         </div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">Configurer vos projets efficacement</h3>
                         <p className="text-gray-600">Naviguez dans l'interface et configurez vos projets</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover-lift border-t-4 border-strakon-blue">
                         <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                              <svg className="w-8 h-8 text-strakon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                   ></path>
                              </svg>
                         </div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">Modéliser comme un professionnel</h3>
                         <p className="text-gray-600">Créez coffrage et armatures de manière claire</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover-lift border-t-4 border-strakon-orange">
                         <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                              <svg className="w-8 h-8 text-strakon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                              </svg>
                         </div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">Optimiser vos projets et votre rentabilité</h3>
                         <p className="text-gray-600">Mesurez l'apport de STRAKON pour vos projets</p>
                    </div>
               </div>
          </div>
     );
}
