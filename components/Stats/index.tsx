export default function Stats() {
     return (
          <div className="bg-white py-12 shadow-md">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                         <div>
                              <div className="text-4xl font-bold text-strakon-blue">1 jour</div>
                              <div className="text-gray-600 mt-2">Formation intensive</div>
                         </div>
                         <div>
                              <div className="text-4xl font-bold text-strakon-orange">100%</div>
                              <div className="text-gray-600 mt-2">Pratique & Gratuite</div>
                         </div>
                         <div>
                              <div className="text-4xl font-bold text-strakon-blue">14 jours</div>
                              <div className="text-gray-600 mt-2">Accès prolongé*</div>
                         </div>
                         <div>
                              <div className="text-4xl font-bold text-strakon-orange">BIM</div>
                              <div className="text-gray-600 mt-2">Technologie avancée</div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
