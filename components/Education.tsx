
import React from 'react';
import { BookOpen, ArrowUpRight, Clock, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CourseCard = ({ title, level, duration, category, index }: { title: string, level: string, duration: string, category: string, index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div 
      ref={ref}
      className={`group flex flex-col justify-between p-6 bg-[#0e121a] border border-white/5 hover:border-blue-500/40 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
           <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-2 py-1 rounded-sm">
             {category}
           </span>
           <span className="text-[10px] text-gray-500 font-mono border border-white/10 px-2 py-1 rounded-sm">
             {level}
           </span>
        </div>
        <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-blue-400 transition-colors leading-tight">
          {title}
        </h3>
        <div className="w-10 h-[2px] bg-white/10 group-hover:bg-blue-500/50 transition-colors my-4"></div>
      </div>
      
      <div className="flex items-center justify-between mt-2">
         <span className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
           <Clock size={12} /> {duration}
         </span>
         <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white group-hover:bg-blue-600 group-hover:scale-110 transition-all">
            <ArrowUpRight size={14} />
         </button>
      </div>
    </div>
  );
};

const Education = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 sm:py-32 bg-[#030508] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div 
            ref={contentRef}
            className={`lg:w-1/3 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 block">Learn & Grow</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-chrome tracking-tight mb-6">
              Master Your<br />Market.
            </h2>
            <p className="text-lg text-secondary font-light leading-relaxed mb-8">
              Trading is a skill, and we're here to teach you. Our courses turn beginners into confident, informed traders.
            </p>
            
            <div className="p-6 bg-[#0e121a] border border-white/5 rounded-lg mb-8">
               <div className="flex items-center gap-3 mb-3">
                 <Award className="text-yellow-500 w-5 h-5" />
                 <h4 className="text-white font-bold font-display">Certified Analyst Program</h4>
               </div>
               <p className="text-sm text-gray-500 mb-4">Finish our in-depth program and gain access to real trading capital.</p>
               <a href="#" className="text-sm font-bold text-white border-b border-blue-500 pb-0.5 hover:text-blue-400 transition-colors">View Requirements</a>
            </div>

            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-wide text-xs rounded hover:bg-gray-200 transition-colors">
               Full Curriculum <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="lg:w-2/3">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <CourseCard index={0} category="Fundamentals" title="Market Basics & How Prices Move" level="LVL 1" duration="45 MIN" />
               <CourseCard index={1} category="Technical" title="Understanding Supply & Demand" level="LVL 2" duration="90 MIN" />
               <CourseCard index={2} category="Psychology" title="Smart Risk Management" level="LVL 1" duration="30 MIN" />
               <CourseCard index={3} category="Advanced" title="Advanced Market Cycles (Wyckoff)" level="LVL 3" duration="120 MIN" />
               <CourseCard index={4} category="Derivatives" title="Options Trading Fundamentals" level="LVL 2" duration="60 MIN" />
               <CourseCard index={5} category="Strategy" title="Quick Trading Strategies (Scalping)" level="LVL 3" duration="75 MIN" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;