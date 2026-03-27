"use client";

import Image from "next/image";

interface PricingProps {
     scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Pricing({ scrollToSection }: PricingProps) {
     return (
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 lg:py-24">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto mb-16 px-4">
                         <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
                              {/* Left/Top side: Image */}
                              <div className="flex-shrink-0 relative w-48 h-48 md:w-64 md:h-64">
                                   <Image
                                        src="/strakon-usb.png"
                                        alt="Clé de licence STRAKON USB"
                                        fill
                                        className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                   />
                              </div>

                              {/* Right/Bottom side: Text */}
                              <div className="text-center md:text-left">
                                   <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Et après la formation ?</h3>
                                   <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-medium">
                                        Une offre exclusive de licence STRAKON (clé perpétuelle) sera proposée aux participants souhaitant continuer avec nous.
                                        Contactez-nous pour plus d’informations.
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                         <div className="text-center">
                              <p className="text-blue-200 mb-4 font-medium italic">Formation gratuite, sans engagement – possibilité de continuer avec STRAKON ensuite</p>
                              <a
                                   href="#inscription"
                                   onClick={(e) => scrollToSection(e, "inscription")}
                                   className="inline-block px-8 py-4 btn-strakon text-white font-bold rounded-lg shadow-lg pulse-animation"
                              >
                                   Réserver ma place gratuite
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
}
