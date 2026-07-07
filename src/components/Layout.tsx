import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowUp } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const isHubPage = location.pathname === '/student-committees' || location.pathname === '/student-committees/';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-900 selection:text-white">
      {/* Premium minimal header */}
      <header className="sticky top-0 z-50 bg-[#1A1A1A] border-b border-[#2A2A2A] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/student-committees" className="flex items-center group py-2">
            <img 
              src="https://izeeinstitutions.com/wp-content/uploads/2024/12/Logo-1-1.png.webp" 
              alt="IZee Institutions" 
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {!isHubPage && (
            <Link 
              to="/student-committees"
              className="hidden sm:flex items-center gap-2 text-sm font-bold tracking-wide uppercase text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Committees
            </Link>
          )}
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-[#1C1C1C] text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1 */}
            <div>
              <img 
                src="https://izeeinstitutions.com/wp-content/uploads/2024/12/Logo-1-1.png.webp" 
                alt="IZee Institutions" 
                className="h-16 w-auto object-contain mb-6"
              />
              <p className="text-slate-400 text-sm leading-relaxed">
                The college's rich history stems back to the 2004. With over 19+ years experience , IZee Business School is among the top ranked institutions in India.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 border-b border-[#C8102E] inline-block pb-1">Main Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Blog', 'Governing Counsel & Advisory Board', 'International Study Tour & Boot Camp', 'Placement Snapshot', 'Photo', 'Privacy Policy', 'Complaint Box - Student Grievenance Form', 'Mandatory Disclosure', 'Contact Us'].map((link, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C8102E] text-xs mt-1.5">•</span>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 border-b border-[#C8102E] inline-block pb-1">Academics</h3>
              <ul className="space-y-3">
                {[
                  'MBA + PGPM Global with International Tour',
                  'MBA + PGPM',
                  'MBA + PGPM Global with IBM Bussiness Analytics (International tour)',
                  'MBA in Business Analytics in Bangalore',
                  'Bachelor of Business Administration (BBA)',
                  'Bachelor of Business Administration (BBA) with IBM',
                  'Bachelor of Computer Applications (BCA)',
                  'Bachelor of Computer Applications (BCA) with IBM',
                  'Bachelor of Business Administration (BBA Aviation)',
                  'Bachelor of Commerce (B. Com)'
                ].map((link, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C8102E] text-xs mt-1.5">•</span>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 border-b border-[#C8102E] inline-block pb-1">Head Office</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#C8102E] text-xs mt-1.5">•</span>
                  <div>
                    <p className="text-white text-sm">Email</p>
                    <a href="mailto:admin@izeeinstitutions.com" className="text-slate-400 hover:text-white text-sm transition-colors">admin@izeeinstitutions.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C8102E] text-xs mt-1.5">•</span>
                  <div>
                    <p className="text-white text-sm">Phone</p>
                    <p className="text-slate-400 text-sm">+91 1800 4122 0061 | +91 96096043002</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C8102E] text-xs mt-1.5">•</span>
                  <div>
                    <p className="text-white text-sm">Address</p>
                    <p className="text-slate-400 text-sm leading-relaxed">Jigani Campus - Izee Business School , Plot 325, Part A , Bommasandra - jigani Link Road ,Jigani Post , Anekal Taluk , Bengaluru , Karnataka 560105</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C8102E] text-xs mt-1.5">•</span>
                  <p className="text-slate-400 text-sm leading-relaxed">Doddabalapur campus - Plot # SW45-SW48, KIADB Apparel Park Phase II Bangalore - 561203, Doddaballapura, Karnataka 562163</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#151515] py-6 border-t border-[#2A2A2A] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © Copyright 2026 <span className="text-[#C8102E]">IZee Education Trust.</span> All Right Reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-400">
                Design and Developed by <span className="text-[#C8102E]">Mediagarh</span>
              </p>
            </div>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute right-6 bottom-4 md:bottom-1/2 md:translate-y-1/2 w-10 h-10 bg-[#C8102E] hover:bg-red-700 text-white flex items-center justify-center rounded shadow-lg transition-colors z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
