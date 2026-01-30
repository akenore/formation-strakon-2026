export default function TargetAudience() {
     return (
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 lg:py-24">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Public cible</h2>
                         <p className="text-xl text-gray-600">Cette formation s'adresse aux professionnels du BTP</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                         <div className="bg-white p-6 rounded-xl shadow-md text-center hover-lift border-b-4 border-strakon-blue">
                              <div className="text-4xl mb-4">🏢</div>
                              <h3 className="font-bold text-gray-900 mb-2">Bureaux d'études</h3>
                              <p className="text-gray-600 text-sm">Structures et béton armé</p>
                         </div>
                         <div className="bg-white p-6 rounded-xl shadow-md text-center hover-lift border-b-4 border-strakon-orange">
                              <div className="text-4xl mb-4">🏗️</div>
                              <h3 className="font-bold text-gray-900 mb-2">Entreprises</h3>
                              <p className="text-gray-600 text-sm">Construction et génie civil</p>
                         </div>
                         <div className="bg-white p-6 rounded-xl shadow-md text-center hover-lift border-b-4 border-strakon-blue">
                              <div className="text-4xl mb-4">👷</div>
                              <h3 className="font-bold text-gray-900 mb-2">Ingénieurs</h3>
                              <p className="text-gray-600 text-sm">Projeteurs béton</p>
                         </div>
                         <div className="bg-white p-6 rounded-xl shadow-md text-center hover-lift border-b-4 border-strakon-orange">
                              <div className="text-4xl mb-4">✅</div>
                              <h3 className="font-bold text-gray-900 mb-2">Prospects qualifiés</h3>
                              <p className="text-gray-600 text-sm">Avec TVA intracommunautaire</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
