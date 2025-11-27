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
    <header className="glass-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Nhlakanipho Dlamini Foundation Logo" className="h-12 w-auto" />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.name === 'Donate'
                      ? 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg transform hover:scale-105'
                      : 'text-gray-700 hover:text-blue-600 px-3 py-2'
                  } text-sm font-medium transition-all duration-200`}
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
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.name === 'Donate'
                      ? 'bg-green-500 hover:bg-green-600 text-white text-center rounded-lg font-semibold shadow-lg'
                      : 'text-gray-700 hover:text-blue-600'
                  } block px-3 py-2 text-base font-medium`}
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