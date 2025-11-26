import React from 'react';
import { Map } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 text-center relative overflow-hidden py-12">
      {/* Background wavy lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
           <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 50 Q 25 20 50 50 T 100 50" stroke="black" fill="none" vectorEffect="non-scaling-stroke"/>
               <path d="M0 60 Q 25 30 50 60 T 100 60" stroke="black" fill="none" vectorEffect="non-scaling-stroke"/>
           </svg>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
          <Map size={14} /> PROCESS OVERVIEW
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-[#013D2F] mb-16">
          Unforgettable Getaways <br/> Escaping Routine
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
              { num: "01", title: "Visa Voyage Agency", desc: "Lorem Ipsum is simply dummy text the printing and typeser" },
              { num: "02", title: "International Access Visas", desc: "Lorem Ipsum is simply dummy text the printing and typeser" },
              { num: "03", title: "Gateway to Global Citizenship", desc: "Lorem Ipsum is simply dummy text the printing and typeser" },
          ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-[#84cc16] hover:shadow-md transition-all group">
                  <div className="text-5xl font-outline text-transparent stroke-gray-300 font-bold mb-4 group-hover:text-gray-100 transition-colors" style={{ WebkitTextStroke: "1px #d1d5db" }}>
                      {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-[#013D2F] mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default Process;