"use client";

interface NavbarProps {
     isScrolled: boolean;
     scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Navbar({ isScrolled, scrollToSection }: NavbarProps) {
     return (
          <nav
               id="main-header"
               className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 sm:px-12 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md opacity-100 translate-y-0" : "bg-transparent opacity-0 -translate-y-full"
                    }`}
          >
               <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
                    <div className="flex items-center flex-shrink-0">
                         <img src="/static/logo-c2it.png" alt="C2IT Logo" className="h-6 sm:h-8 w-auto" />
                    </div>
                    <a
                         href="#inscription"
                         onClick={(e) => scrollToSection(e, "inscription")}
                         className="px-4 py-2 bg-strakon-orange text-white text-[10px] sm:text-sm font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-md whitespace-nowrap flex-shrink-0"
                    >
                         S'inscrire maintenant
                    </a>
               </div>
          </nav>
     );
}
