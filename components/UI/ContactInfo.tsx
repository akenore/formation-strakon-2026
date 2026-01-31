export default function ContactInfo() {
     return (
          <div className="bg-white py-16 lg:py-24">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Besoin d'informations ?</h2>
                         <p className="text-xl text-gray-600">Notre équipe est là pour répondre à vos questions</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                         <div className="text-center p-6 bg-gray-50 rounded-xl hover-lift">
                              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                   <svg className="w-8 h-8 text-strakon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                   </svg>
                              </div>
                              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                              <p className="text-gray-600 text-sm">info@c2it.lu</p>
                         </div>

                         <div className="text-center p-6 bg-gray-50 rounded-xl hover-lift">
                              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                   <svg className="w-8 h-8 text-strakon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        ></path>
                                   </svg>
                              </div>
                              <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                              <p className="text-gray-600 text-sm">+352 27 996 597</p>
                         </div>

                         <button
                              id="brevo-chat-trigger"
                              onClick={() => (window as any).BrevoConversations?.('openChat')}
                              className="text-center p-6 bg-gray-50 rounded-xl hover-lift block w-full"
                         >
                              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                   <svg className="w-8 h-8 text-strakon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                   </svg>
                              </div>
                              <h3 className="font-bold text-gray-900 mb-2">Support</h3>
                              <p className="text-gray-600 text-sm">Assistance technique disponible</p>
                              <span className="inline-block mt-3 text-strakon-blue text-xs font-semibold hover:underline">Ouvrir le chat →</span>
                         </button>
                    </div>
               </div>
          </div>
     );
}
