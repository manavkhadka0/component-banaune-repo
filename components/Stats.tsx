import React, { useEffect, useState, useRef } from 'react';
import { Globe, ArrowRight } from 'lucide-react';

// Hook for counting up animation
const useCounter = (end: number, duration: number = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            setCount(Math.floor(progress * (end - start) + start));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration, start]);

    return { count, ref };
};

const StatItem = ({ end, suffix, label }: { end: number, suffix: string, label: string }) => {
    const { count, ref } = useCounter(end);
    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">
                {count}{suffix}
            </div>
            <div className="text-white/80 text-xs font-medium uppercase tracking-wider">{label}</div>
        </div>
    );
};

const Stats: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
        {/* Banner Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-12">
             <div className="lg:col-span-3 bg-[#E5E7EB] h-64 lg:h-auto rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"></div>
             
             <div className="lg:col-span-6 bg-white p-12 text-center flex flex-col items-center justify-center relative z-10 -mt-8 lg:mt-0 rounded-3xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#84cc16] rounded-full flex items-center justify-center mb-6">
                    <Globe className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#013D2F] mb-4">Get our best offers quickly</h3>
                <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
                    Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy
                </p>
                <button className="flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-full text-sm font-bold text-[#013D2F] hover:bg-[#013D2F] hover:text-white transition-colors">
                    Contact us <ArrowRight size={14} />
                </button>
             </div>
             
             <div className="lg:col-span-3 bg-[#E5E7EB] h-64 lg:h-auto rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none"></div>
        </div>

        {/* Animated Stats Bar */}
        <div className="bg-[#84cc16] rounded-3xl p-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
            <StatItem end={10} suffix="k+" label="Complete project" />
            <StatItem end={20} suffix="+" label="Team member" />
            <StatItem end={5} suffix="k+" label="Winning award" />
            <StatItem end={100} suffix="+" label="Complete project" />
        </div>
    </div>
  );
};

export default Stats;