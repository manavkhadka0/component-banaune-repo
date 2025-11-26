import React from 'react';
import { ChevronDown, ArrowRight, Plane } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-5">
      {/* Logo Section */}
      <div className="flex items-center gap-2.5">
        <div className="relative">
          <div className="w-10 h-10 border-[2.5px] border-[#013D2F] rounded-full flex items-center justify-center">
             {/* Plane icon slightly rotated to look like taking off */}
            <Plane size={20} className="text-[#013D2F] -rotate-45 translate-x-0.5" fill="currentColor" />
          </div>
        </div>
        <span className="text-[28px] font-extrabold text-[#013D2F] tracking-tight">RouteX</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden xl:flex items-center gap-8">
        {['HOME', 'ABOUT US', 'SERVICES', 'PROJECTS', 'BLOG', 'PAGE', 'CONTACT'].map((item) => (
          <a 
            key={item}
            href="#" 
            className="text-[13px] font-bold text-gray-700 flex items-center gap-1 hover:text-[#84cc16] transition-colors tracking-wide"
          >
            {item} <ChevronDown size={14} strokeWidth={3} className="text-gray-400" />
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Trigger */}
        <button className="xl:hidden text-[#013D2F]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <button className="hidden md:flex items-center gap-2 bg-[#84cc16] hover:bg-[#72b313] text-white pl-7 pr-5 py-3.5 rounded-full text-sm font-bold transition-all shadow-sm group">
          Get An Appointment
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
             <ArrowRight size={14} strokeWidth={3} />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;