import React from 'react';
import { ArrowRight, Map, Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
  const blogs = [
      { title: "World of Wander Discovering Diverse Landscapes", date: "October 19, 2022" },
      { title: "Search of Serenity Tranquil Retreats and Escapes", date: "October 19, 2022" },
      { title: "Road to Adventure Embarking on New Horizons", date: "October 19, 2022" }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-12 pb-24">
       <div className="flex justify-between items-end mb-12">
           <div>
               <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                   <Map size={14} /> RECENT BLOGS
               </div>
               <h2 className="text-4xl font-bold text-[#013D2F] leading-tight">
                   Journeys of Discovery <br/> Uncovering Hidden
               </h2>
           </div>
           <div className="flex gap-2">
               <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#84cc16] hover:text-white transition-colors">←</button>
               <button className="w-10 h-10 rounded-full bg-[#84cc16] text-white flex items-center justify-center">→</button>
           </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {blogs.map((blog, idx) => (
               <div key={idx} className="group cursor-pointer">
                   <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden mb-6 relative">
                       <img 
                           src={`https://images.unsplash.com/photo-${1500000000000 + idx * 1000}?q=80&w=800&auto=format&fit=crop`} // Dynamic placeholder
                           alt="Blog thumbnail"
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                       />
                       {/* Date badge on image if needed, but design has it below */}
                   </div>
                   
                   <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                       <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date}</span>
                       <span className="flex items-center gap-1"><User size={12} /> By admin</span>
                   </div>

                   <h3 className="text-xl font-bold text-[#013D2F] mb-4 group-hover:text-[#84cc16] transition-colors">
                       {blog.title}
                   </h3>
                   <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                       Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
                   </p>

                   <div className="flex items-center gap-2 text-sm font-bold text-[#013D2F] group-hover:translate-x-2 transition-transform">
                       Read More <ArrowRight size={14} />
                   </div>
               </div>
           ))}
       </div>
    </div>
  );
};

export default Blog;