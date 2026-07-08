import React from 'react';
import { Link } from 'react-router-dom';
import { COMMITTEES } from '../data';
import * as Icons from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export default function HubPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hub Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 flex items-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4072-1.webp" 
            alt="IZee Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium tracking-wide mb-8 border border-white/20 backdrop-blur-md">
               <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
               Student Committees @ IZee
            </div>
            <h1 className=" text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.1] font-bold tracking-tight">
              Where Managers Are Made{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#C8102E]">Outside the Classroom.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-4 max-w-3xl">
              Student committees at IZee are structured, student-run bodies mentored by faculty coordinators. Each committee operates like a real organization - with defined roles, budgets, targets, and events - giving members hands-on experience in leadership, teamwork, planning, and execution.
            </p>
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-10 max-w-3xl">
              Committee experience at IZee is not an extracurricular add-on; <span className="text-red-400">it is a core part of how we build industry-ready professionals.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => { document.getElementById('committees-grid')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8102E] text-white font-medium transition-all hover:bg-red-800 rounded-full shadow-lg hover:shadow-red-900/20"
              >
                Explore Committees
                <Icons.ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Committees Grid */}
      <section id="committees-grid" className="py-20 bg-slate-50 relative border-y border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative z-10">
            <h2 className=" text-3xl md:text-4xl font-bold text-slate-900 tracking-tight capitalize">
              Our <span className="text-[#C8102E]">Committees</span>
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-start gap-6 relative z-10"
          >
          {COMMITTEES.map((committee) => {
            // @ts-ignore
            const IconComponent = Icons[committee.icon] as React.ElementType;
            
            return (
              <motion.div key={committee.id} variants={itemVariants} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-full">
                <Link 
                  to={`/student-committees/${committee.id}`}
                  className="group relative rounded-[15px] overflow-hidden flex flex-col h-[480px] transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={committee.heroImage} 
                      alt={committee.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Top left badge */}
                  <div className="relative z-10 p-5 md:p-6">
                    <div className="w-10 h-10 bg-[#C8102E] rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                      <Icons.Sun className="w-4 h-4 mb-0.5" strokeWidth={2.5} />
                      <span className="text-[7px] font-bold tracking-[0.2em] leading-none">IZEE</span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Bottom Content */}
                  <div className="relative z-10 p-5 md:p-6 flex flex-col text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-[2px] bg-[#C8102E]" />
                      <p className="text-white/90 font-bold text-[11px] uppercase tracking-[0.2em]">
                        {committee.name}
                      </p>
                    </div>
                    <h2 className=" text-xl lg:text-2xl font-medium text-white mb-6 leading-snug">
                      {committee.fullName}
                    </h2>
                    
                    <div className="w-full h-px bg-white/20 mb-6" />

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-start gap-3 text-white/80 flex-1">
                        <div className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center bg-white/5 flex-shrink-0 mt-0.5 backdrop-blur-sm">
                           {IconComponent && <IconComponent className="w-4 h-4" strokeWidth={2} />}
                        </div>
                        <p className="text-sm font-light leading-relaxed line-clamp-2">
                          {committee.tagline}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C8102E] group-hover:border-[#C8102E] transition-all duration-300 flex-shrink-0 backdrop-blur-sm shadow-sm group-hover:shadow-md">
                        <Icons.ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        </div>
      </section>

      {/* Why Join a Committee */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        {/* Dark background collage */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4071.webp" 
            alt="Students background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight capitalize mb-4 text-white whitespace-nowrap">
              Why Join A Committee?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
              Beyond the classroom, this is where you build the skills that matter.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pb-8 lg:pb-16">
            {[
              { icon: 'Award', title: 'Real Leadership', desc: 'Real leadership experience you can speak about in placement interviews.' },
              { icon: 'Briefcase', title: 'Corporate Exposure', desc: 'Direct interaction with corporates, founders, and industry leaders.' },
              { icon: 'FolderKanban', title: 'Actionable Portfolio', desc: 'A portfolio of events, campaigns, and projects you actually ran.' },
              { icon: 'Users', title: 'Lifelong Network', desc: 'Lifelong network of driven peers and alumni.' }
            ].map((item, i) => {
              const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ElementType;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`bg-[#C8102E] aspect-square p-4 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 border border-transparent hover:border-white/50 hover:shadow-[0_0_30px_rgba(200,16,46,0.8)] relative z-0 hover:z-10 cursor-pointer ${i % 2 === 1 ? 'mt-8 lg:mt-16' : ''}`}
                >
                  <div className="flex flex-col items-center">
                    <IconComponent className="w-10 h-10 md:w-14 md:h-14 mb-4 text-white" strokeWidth={1.5} />
                    <h3 className=" font-bold text-base md:text-xl text-white leading-snug mb-3">{item.title}</h3>
                    <p className="text-white/90 text-xs md:text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className=" text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 capitalize">
            Take Charge Of Your Future
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Every IZee student can apply to one committee at the start of the academic year. Selections are based on interest, aptitude, and interviews — just like the real world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => { document.getElementById('committees-grid')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="w-full sm:w-auto px-8 py-4 bg-[#C8102E] text-white font-medium transition-all hover:bg-red-800 rounded-full shadow-lg hover:shadow-red-900/20"
            >
              Explore Committees
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-900 font-medium transition-all hover:bg-slate-200 rounded-full">
              Apply to IZee
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
