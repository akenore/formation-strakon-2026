export default function FAQ() {
     return (
          <div className="bg-gray-100 py-16 lg:py-24">
               <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
                    </div>

                    <div className="space-y-4">
                         <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-strakon-orange">
                              <h3 className="font-bold text-lg text-strakon-blue mb-2">Que vais-je obtenir après inscription ?</h3>
                              <ul className="text-gray-700 list-disc list-inside mt-2 space-y-1">
                                   <li>Accès à la formation complète</li>
                                   <li>10 jours gratuits sur STRAKON</li>
                                   <li>Accompagnement pour démarrer</li>
                              </ul>
                         </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="font-bold text-lg text-strakon-blue mb-2">Faut-il installer STRAKON avant la formation ?</h3>
                              <p className="text-gray-700">
                                   Oui, STRAKON offre 10 jours d'utilisation libre à la première installation, ce qui est suffisant pour suivre l'initiation et prendre une
                                   décision éclairée.
                              </p>
                         </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="font-bold text-lg text-strakon-blue mb-2">Que se passe-t-il après la formation ?</h3>
                              <p className="text-gray-700">
                                   Vous recevrez une proposition pour l'offre découverte de 3 mois, avec la possibilité d'acheter la licence complète STRAKON 2026 avec clé HASP
                                   libre de droit.
                              </p>
                         </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="font-bold text-lg text-strakon-blue mb-2">La formation est-elle vraiment gratuite ?</h3>
                              <p className="text-gray-700">
                                   Oui, cette journée de formation est totalement gratuite pour les prospects qualifiés disposant d'un numéro de TVA intracommunautaire.
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
