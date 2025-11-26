import React, { useCallback, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We have been operating for over a decade, providing top-notch services to our clients and building a strong track record in the industry.",
    name: "Albert Flores",
    role: "Web Designer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop",
  },
  {
    quote:
      "The team guided our entire relocation—incredibly smooth and professional. Their expertise made every step stress-free.",
    name: "Theresa Webb",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2787&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2940&auto=format&fit=crop",
  },
  {
    quote:
      "I loved the personalized approach. They listened carefully, tailored the solution, and delivered faster than we expected.",
    name: "Courtney Henry",
    role: "Entrepreneur",
    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2787&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2940&auto=format&fit=crop",
  },
  {
    quote:
      "Their global network opened doors we thought were impossible. Truly exceptional support throughout the process.",
    name: "Marvin McKinney",
    role: "Operations Lead",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2940&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2940&auto=format&fit=crop",
  },
];

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex]
  );

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-4 h-[400px] lg:h-auto rounded-[40px] overflow-hidden bg-gray-200">
        <img
          src={activeTestimonial.heroImage}
          alt={activeTestimonial.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:col-span-8 bg-[#84cc16] rounded-[40px] p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>

        <div className="relative z-10">
          <Quote className="text-white mb-6 fill-white" size={48} />
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-12">
            {activeTestimonial.quote}
          </p>
        </div>

        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white overflow-hidden">
              <img
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white font-bold text-lg">
                {activeTestimonial.name}
              </div>
              <div className="text-white/70 text-sm">{activeTestimonial.role}</div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#013D2F] hover:bg-[#013D2F] hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#013D2F] hover:bg-[#013D2F] hover:text-white transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;