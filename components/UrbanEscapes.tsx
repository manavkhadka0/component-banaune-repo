import React from 'react';
import { Check } from 'lucide-react';

const countries = [
    { name: "Canada", flagColor: "bg-red-500" },
    { name: "Bangladesh", flagColor: "bg-green-600" },
    { name: "Australia", flagColor: "bg-blue-600" },
    { name: "United Kingdom", flagColor: "bg-blue-800" },
];

const UrbanEscapes: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                 <div className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">AVAILABLE COUNTRIES</div>
                 <h2 className="text-4xl font-bold text-[#013D2F]">
                    Urban Escapes City <br/> Hopping Adventures
                 </h2>
            </div>
            <button className="bg-[#84cc16] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#72b313] transition-colors mt-4 md:mt-0">
                View More →
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, idx) => (
                <div key={idx} className="bg-[#F9FAF9] p-8 rounded-3xl border border-transparent hover:border-[#84cc16]/30 transition-all hover:bg-white hover:shadow-lg">
                    <div className={`w-16 h-16 ${country.flagColor} rounded-full mb-6 opacity-20`}></div>
                    <h3 className="text-xl font-bold text-[#013D2F] mb-6">{country.name}</h3>
                    <ul className="space-y-3">
                        {["Mistakes To Avoid", "Your Startup", "Knew About Fonts"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-xs text-gray-600 font-medium">
                                <Check size={14} className="text-[#013D2F]" strokeWidth={3} /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
  );
};

export default UrbanEscapes;