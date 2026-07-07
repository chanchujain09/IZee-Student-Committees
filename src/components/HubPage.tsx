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
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000" 
            alt="IZee Campus" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
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
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.1] font-bold tracking-tight">
              Where Managers Are Made <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#C8102E]">Outside the Classroom.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-3xl">
              At IZee Business School, learning doesn't stop at lectures. Our student-led committees give you real responsibility — running events, managing brands, and building corporate relationships.
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

      {/* Intro Paragraph */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <Icons.Quote className="w-12 h-12 text-slate-200 mx-auto mb-6" />
            <p className="font-sans text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Each committee operates like a real organization — with defined roles, budgets, targets, and events. <br/><br/>
              <span className="font-medium text-slate-900">Committee experience at IZee is not an extracurricular add-on; it is a core part of how we build industry-ready professionals.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committees Grid */}
      <section id="committees-grid" className="py-20 bg-slate-50 relative border-y border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight uppercase">
              OUR <span className="text-[#C8102E]">COMMITTEES</span>
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          >
          {COMMITTEES.map((committee) => {
            // @ts-ignore
            const IconComponent = Icons[committee.icon] as React.ElementType;
            
            return (
              <motion.div key={committee.id} variants={itemVariants} className="h-full">
                <Link 
                  to={`/student-committees/${committee.id}`}
                  className="group bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 hover:border-[#C8102E]/30 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col h-full items-center text-center relative overflow-hidden"
                >
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 flex-1 flex flex-col items-center w-full">
                    {/* Logo / Icon Lockup */}
                    <div className="mb-8 relative">
                      <div className="absolute inset-0 bg-[#C8102E]/5 rounded-full scale-150 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="w-24 h-24 bg-slate-50 border border-slate-100 text-slate-700 group-hover:text-[#C8102E] group-hover:border-[#C8102E]/20 rounded-full flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 relative z-10 shadow-sm">
                        {IconComponent && <IconComponent className="w-10 h-10" strokeWidth={1.5} />}
                      </div>
                    </div>

                    <h2 className="font-display text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#C8102E] transition-colors">{committee.name}</h2>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center justify-center">
                      {committee.fullName}
                    </p>

                    <div className="flex-1 flex flex-col items-center w-full">
                      <h3 className="font-sans text-base font-medium text-slate-700 mb-4 leading-snug px-2">
                        "{committee.tagline}"
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
                        {committee.oneLiner}
                      </p>
                    </div>

                    <div className="w-full mt-auto">
                      <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-50 text-slate-600 font-medium text-sm transition-all duration-300 group-hover:bg-[#C8102E] group-hover:text-white group-hover:shadow-md w-full">
                        Explore Committee
                        <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">
              WHY JOIN A <span className="text-red-400">COMMITTEE?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
              Beyond the classroom, this is where you build the skills that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-slate-700/50 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 uppercase">
            Take Charge of Your Future
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
