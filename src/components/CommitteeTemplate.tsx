import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { COMMITTEES } from '../data';
import * as Icons from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function CommitteeTemplate() {
  const { id } = useParams<{ id: string }>();
  const committee = COMMITTEES.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!committee) {
    return <Navigate to="/student-committees" replace />;
  }

  // @ts-ignore
  const IconComponent = Icons[committee.icon] as React.ElementType;

  const halfWhatWeDoLength = Math.ceil(committee.whatWeDo.length / 2);
  const leftItems = committee.whatWeDo.slice(0, halfWhatWeDoLength);
  const rightItems = committee.whatWeDo.slice(halfWhatWeDoLength);

  return (
    <div className="bg-white">
      {/* 1. Hero + Tagline */}
      <section className="relative min-h-[60vh] flex items-center pt-20 pb-20 overflow-hidden border-b-8 border-red-800">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src={committee.heroImage} 
            alt={committee.fullName} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <Link 
                to="/student-committees" 
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-300 hover:text-white mb-8 transition-colors"
              >
                <Icons.ArrowLeft className="w-4 h-4" />
                Back to Committees
              </Link>
              
              <div className="mb-8 flex items-center gap-6 lg:gap-8">
                {committee.logo && (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl flex items-center justify-center p-2 shadow-xl shadow-black/20 flex-shrink-0 hidden sm:flex">
                    <img src={committee.logo} alt={committee.name} className="w-full h-full object-contain" />
                  </div>
                )}
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 sm:hidden mb-4">
                    {committee.logo && (
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 shadow-xl shadow-black/20 flex-shrink-0">
                        <img src={committee.logo} alt={committee.name} className="w-full h-full object-contain" />
                      </div>
                    )}
                  </div>
                  <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight uppercase drop-shadow-md">{committee.name}</h1>
                  <p className="text-sm sm:text-base font-bold mt-2 uppercase tracking-widest text-slate-300">
                    {committee.fullName}
                  </p>
                </div>
              </div>
              
              <div className={cn("w-24 h-1.5 mb-8 rounded-full", committee.color.bg)} />
              
              <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-snug mb-6">
                {committee.tagline}
              </h2>
              
              <button 
                className={cn(
                  "inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4 rounded bg-white text-slate-900 font-bold text-sm tracking-widest uppercase shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                )}
                onClick={() => {
                  document.getElementById('join-cta')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Join {committee.name}
                <Icons.ArrowDown className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. About */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-5/12"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className={cn("w-12 h-1 rounded-full", committee.color.bg)} />
                 <span className={cn("font-bold tracking-widest uppercase text-sm", committee.color.text)}>About</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight capitalize mb-8">
                Discover <span className={committee.color.text}>{committee.name}</span>
              </h2>
              <div className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                {committee.about}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-7/12"
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6 h-[450px] md:h-[600px]">
                 <div className="col-span-1 row-span-2 rounded-[2rem] overflow-hidden relative shadow-lg group">
                   <img src={committee.heroImage} alt={committee.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
                 </div>
                 <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative shadow-lg group">
                   <img src={committee.flagshipEvent.image} alt="Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
                 </div>
                 <div className={cn("col-span-1 row-span-1 rounded-[2rem] shadow-lg p-6 md:p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group", committee.color.bg)}>
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                    <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-white mb-4 relative z-10 opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100" strokeWidth={1.5} />
                    <span className="text-white font-bold text-lg md:text-xl tracking-wide relative z-10">Join the Community</span>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3 & 4. Mission & Vision */}
      <section className="py-24 bg-white overflow-hidden relative ">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Mission Column */}
            <div className="bg-slate-900 rounded-[1.5rem] p-8 md:p-10 flex flex-col relative text-white">
               {/* Header Pill */}
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                    <Icons.X className="w-5 h-5 text-slate-900" strokeWidth={2.5} />
                  </div>
                  <span className="text-xl font-medium">Mission</span>
               </div>
               
               {/* Top Bracket */}
               <svg viewBox="0 0 400 40" fill="none" preserveAspectRatio="none" className="w-full h-4 text-white/40 my-6">
                 <path d="M0 40 Q20 40 20 20 C20 0 180 0 200 0 C220 0 380 0 380 20 Q380 40 400 40" stroke="currentColor" strokeWidth="2" />
               </svg>

               {/* Content */}
               <div className="flex-1 flex flex-col gap-4">
                 {committee.mission.split('\n').map((item, index) => (
                   <div key={index} className="flex items-start gap-3">
                     <Icons.X className="w-4 h-4 text-white mt-1 shrink-0" strokeWidth={2.5} />
                     <span className="text-white/90 text-[15px] leading-relaxed">
                       {item.replace(/^[•\-\*]\s*/, '')}
                     </span>
                   </div>
                 ))}
               </div>

               {/* Bottom Bracket */}
               <svg viewBox="0 0 400 40" fill="none" preserveAspectRatio="none" className="w-full h-4 text-white/40 mt-8 mb-2">
                 <path d="M0 0 Q20 0 20 20 C20 40 180 40 200 40 C220 40 380 40 380 20 Q380 0 400 0" stroke="currentColor" strokeWidth="2" />
               </svg>
            </div>

            {/* Vision Column */}
            <div className={cn("rounded-[1.5rem] p-8 md:p-10 flex flex-col relative text-white", committee.color.bg)}>
               {/* Header Pill */}
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                    <Icons.Check className={cn("w-5 h-5", committee.color.text)} strokeWidth={3} />
                  </div>
                  <span className="text-xl font-medium">Vision</span>
               </div>
               
               {/* Top Bracket */}
               <svg viewBox="0 0 400 40" fill="none" preserveAspectRatio="none" className="w-full h-4 text-white/40 my-6">
                 <path d="M0 40 Q20 40 20 20 C20 0 180 0 200 0 C220 0 380 0 380 20 Q380 40 400 40" stroke="currentColor" strokeWidth="2" />
               </svg>

               {/* Content */}
               <div className="flex-1 flex flex-col gap-4">
                 {committee.vision.split('\n').map((item, index) => (
                   <div key={index} className="flex items-start gap-3">
                     <Icons.Check className="w-4 h-4 text-white mt-1 shrink-0" strokeWidth={3} />
                     <span className="text-white/90 text-[15px] leading-relaxed">
                       {item.replace(/^[•\-\*]\s*/, '')}
                     </span>
                   </div>
                 ))}
               </div>

               {/* Bottom Bracket */}
               <svg viewBox="0 0 400 40" fill="none" preserveAspectRatio="none" className="w-full h-4 text-white/40 mt-8 mb-2">
                 <path d="M0 0 Q20 0 20 20 C20 40 180 40 200 40 C220 40 380 40 380 20 Q380 0 400 0" stroke="currentColor" strokeWidth="2" />
               </svg>
            </div>

          </div>
        </div>
      </section>

      {/* 5. What We Do (Grid matching design aspect) */}
      <section className="py-16 bg-white relative overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mx-auto mb-16 flex flex-col items-center">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Why Us?</h3>
            <h2 className=" text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
              Advantages of Having <span className={committee.color.text}>{committee.name}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 max-w-6xl mx-auto justify-center px-4">
            {committee.whatWeDo.map((item, index) => {
              const rotationClasses = [
                '-rotate-2 translate-x-1 translate-y-1',
                'rotate-2 -translate-x-1 translate-y-1',
                '-rotate-1 translate-x-2 -translate-y-1',
                'rotate-1 -translate-x-1 translate-y-2'
              ];
              const offsetClass = rotationClasses[index % rotationClasses.length];

              return (
                <div key={index} className="relative flex flex-col items-center group mt-4 lg:mt-0">
                  {/* Background offset shape */}
                  <div className={cn("absolute inset-0 rounded-3xl transition-transform duration-500 group-hover:scale-105 opacity-80", committee.color.bg, offsetClass)} />
                  
                  {/* Main Card */}
                  <div className="bg-white rounded-3xl shadow-sm w-full relative z-10 flex flex-col items-center p-6 text-center h-full border border-slate-100 transition-transform duration-500 group-hover:-translate-y-1">
                    
                    <div className="mb-4 bg-slate-50 p-3 rounded-full">
                       <Icons.CheckCircle className={cn("w-6 h-6", committee.color.text)} />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Flagship Event */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white mb-8 uppercase tracking-widest"
            >
              <Icons.Star className={cn("w-4 h-4", committee.color.text)} />
              Flagship Event
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className=" text-4xl md:text-6xl font-bold tracking-tight mb-8 capitalize drop-shadow-lg"
            >
              {committee.flagshipEvent.title}
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10"
            >
              {committee.flagshipEvent.description}
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={cn(
                "inline-flex items-center gap-3 px-8 py-3 rounded-sm text-white font-bold text-sm tracking-widest uppercase transition-all",
                committee.color.bg,
                "hover:brightness-110"
              )}
            >
              View Event Gallery <Icons.ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* 7. Team */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-start justify-between mb-16 lg:mb-24 gap-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight capitalize">
              Our Team
            </h3>
            <p className="text-slate-600 max-w-md text-base leading-relaxed">
              Explore our comprehensive suite of key features designed to enhance efficiency, streamline processes, and elevate your experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {committee.team.slice(0, 6).map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group rounded-[5px] overflow-hidden aspect-[4/5] bg-slate-200"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* White box at the bottom */}
                <div className="absolute bottom-3 left-3 right-3 bg-white rounded-[5px] p-4 shadow-lg">
                  <h4 className=" font-bold text-slate-900 text-base mb-0.5">{member.name}</h4>
                  <p className="text-slate-500 text-xs font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Join CTA */}
      <section id="join-cta" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              "flex flex-col md:flex-row items-center justify-between gap-8 rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden",
              committee.color.bg
            )}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-56 h-56 bg-black/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Want to be part of {committee.name}?
              </h2>
              <p className="text-white/80 text-lg">
                Applications open at the start of every academic year.
              </p>
            </div>
            
            <button className={cn(
              "relative z-10 shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white font-semibold transition-all hover:scale-105 active:scale-95 shadow-md",
              committee.color.text
            )}>
              Express Interest
              <Icons.ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
