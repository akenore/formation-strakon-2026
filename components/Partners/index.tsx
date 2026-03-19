export default function Partners() {
     return (
          <div className="bg-gradient-to-r from-blue-50 to-white py-16">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                         <div className="text-center md:text-left md:flex-1">
                              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                                   <span className="inline-block bg-blue-100 text-strakon-blue px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                                        +100 ingénieurs formés
                                   </span>
                                   <span className="inline-block bg-orange-100 text-strakon-orange px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                                        Experts BIM structure
                                   </span>
                              </div>
                              <p className="text-sm font-semibold text-strakon-blue uppercase tracking-wide mb-2">Organisme de formation certifié</p>
                              <h3 className="text-3xl font-bold text-gray-900 mb-4">Formation dispensée par C2IT</h3>
                              <p className="text-lg text-gray-600 mb-4">Partenaire officiel et expert STRAKON au Luxembourg et en France</p>
                              <p className="text-gray-600">
                                   Plus de 15 ans d’expérience dans l’accompagnement des bureaux d’études en solutions BIM dédiées à l’ingénierie structurelle.
                              </p>
                         </div>
                         <div className="md:flex-1 flex justify-center">
                              <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
                                   <img src="/static/logo-c2it.png" alt="C2IT Logo" className="h-24 md:h-32 w-auto" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
