"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import Objectives from "@/components/Objectives";
import TargetAudience from "@/components/TargetAudience";
import Pricing from "@/components/Pricing";
import Prerequisites from "@/components/Prerequisites";
import FAQ from "@/components/FAQ";
import RegistrationForm from "@/components/RegistrationForm";
import ContactInfo from "@/components/UI/ContactInfo";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/UI/FloatingActionButton";

export default function LandingPage() {
     const [isScrolled, setIsScrolled] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 100);
          };

          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
          e.preventDefault();
          const element = document.getElementById(id);
          if (element) {
               const offset = 0;
               const bodyRect = document.body.getBoundingClientRect().top;
               const elementRect = element.getBoundingClientRect().top;
               const elementPosition = elementRect - bodyRect;
               const offsetPosition = elementPosition - offset;

               window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
               });
          }
     };

     return (
          <div className="bg-gray-50 min-h-screen">
               <Navbar isScrolled={isScrolled} scrollToSection={scrollToSection} />

               <FloatingActionButton scrollToSection={scrollToSection} />

               <main>
                    <Hero scrollToSection={scrollToSection} />

                    <Stats />

                    <Partners />

                    <Objectives />

                    <TargetAudience />

                    <Pricing scrollToSection={scrollToSection} />

                    <Prerequisites />

                    <FAQ />

                    {/* Inscription Section */}
                    <section id="inscription" className="bg-gray-900 text-white py-16 lg:py-24">
                         <div className="max-w-4xl mx-auto px-6">
                              <div className="text-center mb-12">
                                   <h2 className="text-3xl lg:text-4xl font-bold mb-4">Inscription gratuite</h2>
                                   <p className="text-xl text-gray-300">Places limitées - Réservez dès maintenant</p>
                                   <div className="mt-6 inline-block bg-blue-900/50 border border-blue-700/50 px-6 py-3 rounded-xl">
                                        <p className="text-sm text-white italic">
                                             Cette session gratuite est réservée aux structures basées en France et au Luxembourg. <br className="hidden sm:block" />
                                             Pour les autres régions, n'hésitez pas à nous solliciter pour une étude personnalisée.
                                        </p>
                                   </div>
                              </div>

                              <RegistrationForm />
                         </div>
                    </section>

                    <ContactInfo />
               </main>

               <Footer />
          </div>
     );
}
