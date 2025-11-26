import React from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-4 h-[400px] lg:h-auto rounded-[40px] overflow-hidden bg-gray-200">
             <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop" 
                alt="Team working together" 
                className="w-full h-full object-cover"
             />
        </div>

        <div className="lg:col-span-8 bg-[#84cc16] rounded-[40px] p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>

             <div className="relative z-10">
                 <Quote className="text-white mb-6 fill-white" size={48} />
                 <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-12">
                     We have been operating for over an providin top-notch services to our clients and build strong track record in the industry.We have been operating for over a decad providi ina top-notch We have been operating
                 </p>
             </div>

             <div className="flex items-center justify-between relative z-10">
                 <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-full bg-white overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                     </div>
                     <div>
                         <div className="text-white font-bold text-lg">Albert Flores</div>
                         <div className="text-white/70 text-sm">Web Designer</div>
                     </div>
                 </div>

                 <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#013D2F] hover:bg-[#013D2F] hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#013D2F] hover:bg-[#013D2F] hover:text-white transition-colors">
                        <ArrowRight size={20} />
                    </button>
                 </div>
             </div>
        </div>
    </div>
  );
};

export default Testimonial;