export default function TargetAudience() {
     return (
          <div className="bg-gradient-to-br from-gray-100 to-blue-50 pt-20 pb-16 lg:pt-32 lg:pb-24 border-y border-gray-200">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cette formation est faite pour vous si :</h2>
                         <p className="text-xl text-gray-600">Vous êtes un professionnel du BTP souhaitant moderniser son approche</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                         <div className="bg-white p-8 rounded-xl shadow-md text-center hover-lift border-b-4 border-strakon-blue">
                              <div className="text-5xl mb-6">🏢</div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3">Ingénieur structure</h3>
                              <p className="text-gray-600">Responsable de la conception et du dimensionnement des ouvrages</p>
                         </div>
                         <div className="bg-white p-8 rounded-xl shadow-md text-center hover-lift border-b-4 border-strakon-orange">
                              <div className="text-5xl mb-6">🏗️</div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3">Projeteur béton armé</h3>
                              <p className="text-gray-600">En charge de la réalisation des plans de coffrage et de ferraillage</p>
                         </div>
                         <div className="bg-white p-8 rounded-xl shadow-md text-center hover-lift border-b-4 border-strakon-blue">
                              <div className="text-5xl mb-6">🚀</div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3">Professionnel</h3>
                              <p className="text-gray-600">Souhaitant adopter STRAKON et la modélisation BIM dans ses projets</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
