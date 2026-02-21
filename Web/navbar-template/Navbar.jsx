import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function for merging Tailwind classes safely
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Flowpage Navbar Component
 * Features:
 * - Transparent on top of page
 * - Blurs and gains background when scrolled
 * - Uses magnetic hover for buttons
 * 
 * Dependencies required:
 * `npm install gsap lucide-react clsx tailwind-merge`
 */
export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    // We scope the GSAP animations specifically to avoid memory leaks
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        // Toggles a Tailwind class defined in the className below
        toggleClass: { className: 'scrolled', targets: navRef.current }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none py-6">
      <nav 
        ref={navRef}
        className={cn(
          "pointer-events-auto flex items-center justify-between px-8 py-4 w-full max-w-7xl mx-auto rounded-full",
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "bg-transparent text-brand-dark border border-transparent",
          // The .scrolled classes activate once the user scrolls down past 50px
          "[&.scrolled]:bg-brand-bg/80 [&.scrolled]:backdrop-blur-xl [&.scrolled]:border-brand-border [&.scrolled]:shadow-sm"
        )}
      >
        {/* Logo Area */}
        <a href="#top" className="font-clash font-semibold text-2xl tracking-tight text-brand-dark">
          Flowpage<span className="text-brand-orange">.</span>
        </a>
        
        {/* Links Area */}
        <div className="hidden md:flex items-center gap-10 font-medium text-sm text-brand-gray">
          <a href="#constat" className="hover:text-brand-dark transition-colors">Notre constat</a>
          <a href="#methode" className="hover:text-brand-dark transition-colors">La méthode</a>
          <a href="#protocole" className="hover:text-brand-dark transition-colors">Protocole</a>
        </div>
        
        {/* CTA Area */}
        <button className="flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-orange transition-colors">
          Prendre contact
        </button>
      </nav>
    </div>
  );
}
