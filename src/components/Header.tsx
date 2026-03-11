import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import logo from '../img/nhlakapho logo1.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Impact', href: '#impact' },
    { name: 'Events', href: '#events' },
    { name: 'Donate', href: '#donate' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-slate-50/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <div className="flex shrink-0 items-center gap-3">
              <img src={logo} alt="Nhlakanipho Dlamini Foundation Logo" className="h-12 w-auto rounded-full ring-1 ring-slate-200" />
              <div className="hidden sm:block">
                <p className="font-serif text-2xl font-semibold text-blue-950">Nhlakanipho Dlamini</p>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Foundation</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-sm">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.name === 'Donate'
                      ? 'ml-2 rounded-full bg-green-500 px-5 py-2.5 text-white shadow-lg shadow-green-900/10 hover:-translate-y-0.5 hover:bg-green-600'
                      : 'rounded-full px-4 py-2.5 text-slate-600 hover:bg-blue-50 hover:text-blue-700'
                  } text-sm font-medium transition-all duration-300`}
                >
                  {item.name === 'Donate' && <Heart className="inline h-4 w-4 mr-1" />}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm transition-colors hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="surface-card mt-2 space-y-1 px-3 py-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.name === 'Donate'
                      ? 'bg-green-500 text-white text-center rounded-2xl font-semibold shadow-lg shadow-green-900/10 hover:bg-green-600'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-2xl'
                  } block px-4 py-3 text-base font-medium transition-all duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name === 'Donate' && <Heart className="inline h-4 w-4 mr-1" />}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;