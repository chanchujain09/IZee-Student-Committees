import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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

      {/* Premium minimal footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img 
              src="https://izeeinstitutions.com/wp-content/uploads/2024/12/Logo-1-1.png.webp" 
              alt="IZee Institutions" 
              className="h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-90"
            />
          </div>
          <p className="text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()} IZee Business School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
