import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import CountryCarousel from './components/CountryCarousel';
import VisaCategory from './components/VisaCategory';
import UrbanEscapes from './components/UrbanEscapes';
import Stats from './components/Stats';
import Coaching from './components/Coaching';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Process from './components/Process';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans overflow-x-hidden text-[#013D2F]">
      <div className="max-w-[1440px] mx-auto bg-white shadow-xl overflow-hidden">
        
        {/* Header Section */}
        <div className="px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <Navbar />
          <div className="mt-6">
            <Hero />
          </div>
        </div>

        {/* Main Content Stack */}
        <div className="flex flex-col gap-24 pb-0">
          <Features />
          <WhyChooseUs />
          <CountryCarousel />
          <VisaCategory />
          <UrbanEscapes />
          <Stats />
          <Coaching />
          <Team />
          <div className="px-4 sm:px-6 lg:px-12">
             <Testimonial />
          </div>
          <Process />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;