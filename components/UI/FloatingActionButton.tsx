"use client";

interface FABProps {
     scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function FloatingActionButton({ scrollToSection }: FABProps) {
     return (
          <a
               href="#inscription"
               onClick={(e) => scrollToSection(e, "inscription")}
               className="fab-btn btn-strakon p-4 rounded-full shadow-2xl pulse-animation fixed bottom-8 right-8 z-40"
          >
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
               </svg>
          </a>
     );
}
