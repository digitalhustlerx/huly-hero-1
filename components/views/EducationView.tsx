

import React, { useState } from 'react';
import { PlayCircle, Clock, Award, BookOpen, Lock, Filter, CheckCircle2, ChevronRight, BarChart } from 'lucide-react';

// Enhanced Mock Data
const allCourses = [
  { id: 1, title: "Terminal Basics & Setup", lessons: 4, duration: "1h 20m", progress: 100, category: 'technical', level: 'Beginner' },
  { id: 2, title: "Order Flow Analysis", lessons: 8, duration: "3h 45m", progress: 35, category: 'technical', level: 'Advanced' },
  { id: 3, title: "Risk Management Protocols", lessons: 5, duration: "2h 10m", progress: 0, category: 'fundamental', level: 'Intermediate' },
  { id: 4, title: "Derivative Greeks Explained", lessons: 12, duration: "6h 30m", progress: 0, category: 'technical', level: 'Expert' },
  { id: 5, title: "Algorithmic Strategy Design", lessons: 6, duration: "4h 00m", progress: 0, category: 'technical', level: 'Expert' },
  { id: 6, title: "Market Psychology Mastery", lessons: 3, duration: "1h 15m", progress: 0, category: 'psychology', level: 'Intermediate' },
  { id: 7, title: "Macroeconomic Indicators", lessons: 5, duration: "2h 30m", progress: 0, category: 'fundamental', level: 'Advanced' },
  { id: 8, title: "Supply & Demand Zones", lessons: 7, duration: "3h 10m", progress: 10, category: 'technical', level: 'Intermediate' },
  { id: 9, title: "Blockchain Architecture", lessons: 4, duration: "2h 00m", progress: 0, category: 'fundamental', level: 'Beginner' },
];

const CourseModule = ({ title, lessons, duration, progress, category, level }: any) => (
  <div className="flex flex-col h-full p-6 bg-[#0e121a] border border-white/5 rounded-xl hover:border-blue-500/30 hover:bg-[#131720] transition-all group cursor-pointer relative overflow-hidden">
     {/* Category Stripe */}
     <div className={`absolute top-0 left-0 w-1 h-full ${category === 'technical' ? 'bg-blue-500' : category === 'fundamental' ? 'bg-emerald-500' : 'bg-purple-500'}`}></div>

     <div className="flex justify-between items-start mb-4 pl-2">
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-blue-400 group-hover:scale-110 transition-transform">
           <BookOpen size={20} />
        </div>
        <div className="flex flex-col items-end gap-2">
           {progress === 0 ? <Lock size={14} className="text-gray-600" /> : <div className="text-xs font-mono text-blue-400">{progress}%</div>}
           <span className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded border ${
             level === 'Beginner' ? 'border-green-500/30 text-green-500' : 
             level === 'Intermediate' ? 'border-yellow-500/30 text-yellow-500' : 
             'border-red-500/30 text-red-500'
           }`}>
             {level}
           </span>
        </div>
     </div>

     <h3 className="text-lg font-bold text-white mb-2 pl-2 group-hover:text-blue-400 transition-colors leading-tight">{title}</h3>
     
     <div className="mt-auto pl-2">
       <p className="text-xs text-gray-500 mb-4 flex items-center gap-2">
         <Clock size={12} /> {duration} • {lessons} Lessons
       </p>
       
       {/* Progress Bar */}
       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <div className={`h-full ${progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`} style={{width: `${progress}%`}}></div>
       </div>
     </div>
  </div>
);

const EducationView = () => {
  const [filter, setFilter] = useState('all');

  const filteredCourses = filter === 'all' 
    ? allCourses 
    : allCourses.filter(course => course.category === filter);

  return (
    <div className="pt-24 min-h-screen pb-20 bg-[#030508] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Header */}
       <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded border border-blue-500/30 bg-blue-500/10">
            <Award size={14} className="text-blue-400" />
            <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">NEXA Education</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-chrome mb-6">Learn to Trade Like a Pro</h1>
          <p className="text-xl text-secondary font-light">
             From basics to advanced strategies, our courses help you master the markets.
          </p>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
             {/* Filter Controls */}
             <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/5">
                <h2 className="text-2xl font-bold text-white font-display">Curriculum</h2>
                <div className="flex gap-2">
                   {['all', 'technical', 'fundamental', 'psychology'].map(cat => (
                     <button 
                       key={cat}
                       onClick={() => setFilter(cat)}
                       className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                         filter === cat 
                           ? 'bg-blue-600 text-white' 
                           : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                       }`}
                     >
                       {cat}
                     </button>
                   ))}
                </div>
             </div>
             
             {/* Dynamic Course Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map(course => (
                    <CourseModule key={course.id} {...course} />
                  ))
                ) : (
                  <div className="col-span-2 py-12 text-center text-gray-500 border border-white/5 rounded-xl border-dashed">
                    No courses found for this category.
                  </div>
                )}
             </div>
          </div>

          {/* Sidebar / Profile */}
          <div className="lg:col-span-4 space-y-6">
             {/* Progress Card */}
             <div className="p-6 rounded-xl bg-gradient-to-br from-[#0a0d14] to-[#0e121a] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Award size={100} className="text-white" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-12 h-12 rounded-full border-2 border-blue-500 p-0.5">
                       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full rounded-full bg-gray-800" />
                     </div>
                     <div>
                       <div className="text-white font-bold text-sm">Your Progress</div>
                       <div className="text-xs text-blue-400 font-mono">Level 1 • Beginner Trader</div>
                     </div>
                  </div>

                  <div className="space-y-4 mb-6">
                     <div>
                       <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>XP Progress</span>
                          <span className="text-white">1,250 / 5,000</span>
                       </div>
                       <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                          <div className="h-full bg-blue-500 w-[25%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                       </div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-2">
                        <div className="bg-black/30 p-2 rounded border border-white/5 text-center">
                          <div className="text-[10px] text-gray-500 uppercase">Courses</div>
                          <div className="text-lg font-bold text-white">2/15</div>
                        </div>
                        <div className="bg-black/30 p-2 rounded border border-white/5 text-center">
                          <div className="text-[10px] text-gray-500 uppercase">Certificates</div>
                          <div className="text-lg font-bold text-white">0</div>
                        </div>
                     </div>
                  </div>
                  
                  <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wide rounded transition-all shadow-lg shadow-blue-900/20">
                     Resume Learning
                  </button>
                </div>
             </div>

             {/* Upcoming Events */}
             <div className="p-6 rounded-xl bg-[#0e121a] border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-white text-sm uppercase tracking-wider">Live Sessions</h3>
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </div>
                <div className="space-y-4">
                   <div className="group flex gap-3 p-2 hover:bg-white/5 rounded transition-colors cursor-pointer">
                      <div className="w-12 h-12 rounded bg-white/5 flex flex-col items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-colors">
                         <span className="text-[10px] font-bold text-gray-500">OCT</span>
                         <span className="text-lg font-bold text-white">14</span>
                      </div>
                      <div>
                         <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Quarterly Market Outlook</div>
                         <div className="text-xs text-gray-500 mt-1 flex items-center gap-1"><Clock size={10} /> 14:00 UTC</div>
                      </div>
                   </div>
                   <div className="group flex gap-3 p-2 hover:bg-white/5 rounded transition-colors cursor-pointer">
                      <div className="w-12 h-12 rounded bg-white/5 flex flex-col items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-colors">
                         <span className="text-[10px] font-bold text-gray-500">OCT</span>
                         <span className="text-lg font-bold text-white">18</span>
                      </div>
                      <div>
                         <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Advanced Strategy Session</div>
                         <div className="text-xs text-gray-500 mt-1 flex items-center gap-1"><Clock size={10} /> 09:30 EST</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default EducationView;