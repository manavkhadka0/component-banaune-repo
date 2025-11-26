import React from 'react';
import { ArrowRight, Map } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 relative">
      {/* Background decoration lines (simplified) */}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-[0.03] overflow-hidden">
        <svg width="100%" height="100%">
            <circle cx="0" cy="50%" r="40%" stroke="black" strokeWidth="2" fill="none" />
            <circle cx="0" cy="50%" r="50%" stroke="black" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
                 <Map size={14} /> OUR COACHING
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#013D2F] mb-12 leading-tight">
                  Exploring the Unknown <br /> Voyages of Wonder
              </h2>

              <div className="space-y-6">
                  {[
                      { name: "Courtney Henry", role: "Medical Assistant", active: true },
                      { name: "Courtney Henry", role: "Marketing Coordinator" },
                      { name: "Albert Flores", role: "Web Designer" },
                  ].map((member, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-[#84cc16] transition-colors cursor-pointer">
                          <div>
                              <h4 className="font-bold text-[#013D2F]">{member.name}</h4>
                              <p className="text-xs text-gray-500 mt-1">{member.role}</p>
                          </div>
                          <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${member.active ? 'bg-[#84cc16] text-white' : 'border border-gray-200 text-gray-400 group-hover:bg-[#84cc16] group-hover:text-white group-hover:border-[#84cc16]'}`}>
                              <ArrowRight size={16} />
                          </button>
                      </div>
                  ))}
              </div>
          </div>

          <div className="relative">
              <div className="h-[500px] w-full bg-gray-200 rounded-[40px] overflow-hidden relative">
                   <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2776&auto=format&fit=crop" 
                        alt="Professional Team Member" 
                        className="w-full h-full object-cover"
                   />
                   
                   {/* Social Links overlay */}
                   <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm py-2 px-6 rounded-full flex gap-4">
                       {['X', 'f', 'O', 'in'].map((social, i) => (
                           <span key={i} className="font-bold text-xs text-[#013D2F] hover:text-[#84cc16] cursor-pointer">{social}</span>
                       ))}
                   </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Team;