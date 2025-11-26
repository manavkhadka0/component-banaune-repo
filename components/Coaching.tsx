import React from 'react';
import { ArrowUpRight, Map } from 'lucide-react';

const Coaching: React.FC = () => {
  const courses = [
      { name: "TOFEL Coaching", desc: "There are many variati of passages of engineer" },
      { name: "IELTS Coaching", desc: "There are many variati of passages of engineer", active: true },
      { name: "OET Coaching", desc: "There are many variati of passages of engineer" }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                 <Map size={14} /> SUPPORTING COACHING
              </div>
              <h2 className="text-4xl font-bold text-[#013D2F] leading-tight">
                  A Tapestry of Experiences <br/> Cultural Encounters
              </h2>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
             <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#84cc16] hover:text-white transition-colors">←</button>
             <button className="w-10 h-10 rounded-full bg-[#84cc16] text-white flex items-center justify-center">→<span className="sr-only">Next</span></button>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden group">
                  <div className="h-48 bg-gray-200 w-full relative">
                      {/* Image placeholder */}
                      <div className="absolute inset-0 bg-gray-200"></div>
                  </div>
                  <div className="p-8 border border-t-0 border-gray-100 rounded-b-3xl relative top-[-20px] bg-white mx-4 shadow-sm group-hover:shadow-lg transition-all">
                      <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-bold text-[#013D2F]">{course.name}</h3>
                          <button className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${course.active ? 'bg-[#84cc16] text-white' : 'bg-gray-100 text-[#013D2F]'}`}>
                              <ArrowUpRight size={16} />
                          </button>
                      </div>
                      <p className="text-xs text-gray-500">{course.desc}</p>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default Coaching;