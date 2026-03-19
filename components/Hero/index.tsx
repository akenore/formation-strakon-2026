"use client";

interface HeroProps {
     scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
     return (
          <div className="gradient-bg text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-black opacity-5"></div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48 animate-float"></div>
               <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full -ml-40 -mb-40"></div>

               <div className="relative max-w-7xl mx-auto px-8 py-12 lg:py-20">
                    <div className="flex justify-between items-center mb-16">
                         <div className="flex items-center gap-3">
                              <div className="bg-white p-2 rounded-lg shadow-sm">
                                   <img src="/static/logo-c2it.png" alt="C2IT Logo" className="h-14 w-auto" />
                              </div>
                         </div>
                         <div className="hidden sm:block">
                              <img src="/static/logo-strakon.png" alt="Strakon Logo" className="h-12 w-auto brightness-0 invert opacity-80" />
                         </div>
                    </div>

                    <div className="text-center">
                         <div className="inline-block px-4 py-2 bg-strakon-orange rounded-full text-sm font-semibold mb-6">🎓 Formation 100% Gratuite</div>
                         <h1 className="text-4xl lg:text-3xl font-bold mb-6 leading-tight">
                              Accès gratuit à STRAKON
                              <br />
                              <span className="text-blue-200">pendant 10 jours</span>
                         </h1>
                         <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                              Testez STRAKON en conditions réelles pendant la formation projets structure béton armé
                              <br />
                              <span className="text-sm opacity-80 mt-2 block font-medium uppercase tracking-wider">Action exclusive pour la France et le Luxembourg</span>
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                              <a
                                   href="#inscription"
                                   onClick={(e) => scrollToSection(e, "inscription")}
                                   className="inline-block px-8 py-4 btn-strakon text-white font-bold rounded-lg shadow-lg pulse-animation text-lg"
                              >
                                   Réserver ma place gratuite
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
}
