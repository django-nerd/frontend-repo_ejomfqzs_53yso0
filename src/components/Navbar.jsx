import React from 'react';
import { Shield, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/70 backdrop-blur bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-sky-600 text-white">
              <Shield className="h-5 w-5" />
            </div>
            <div className="font-semibold text-slate-800">InsureOps</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#overview" className="hover:text-slate-900">Overview</a>
            <a href="#charts" className="hover:text-slate-900">Grafik</a>
            <a href="#products" className="hover:text-slate-900">Produk</a>
            <a href="#simulator" className="hover:text-slate-900">Simulasi Premi</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#login" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <LogIn className="h-4 w-4" />
              Login
            </a>
            <a href="#signup" className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700">
              <UserPlus className="h-4 w-4" />
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
