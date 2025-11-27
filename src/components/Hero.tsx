import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import logo from '../img/nhlakapho logo1.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative bg-blue-900 text-white">
      {/* Solid blue background, overlay logo with less opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
      <div className="absolute top-8 left-8 z-10">
        <img src={logo} alt="Nhlakanipho Dlamini Foundation Logo" className="h-20 w-auto drop-shadow-lg" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="flex items-center mb-4">
            <Heart className="h-6 w-6 text-green-400 mr-2" />
            <span className="text-powder-blue font-medium">Transforming Communities Since Foundation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering
            <span className="text-green-400"> Nquthu </span>
            Through Water, Agriculture & Youth Development
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Founded by Dr Nhlakanipho Dlamini, our foundation addresses climate change impacts, provides clean water access through the Sunrise Engozini Project, promotes sustainable agriculture, and empowers youth across Nquthu municipality communities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl font-bold text-green-400">100+</div>
              <div className="text-blue-100">Households with Water Access</div>
            </div>
            <div className="glass p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl font-bold text-green-400">25</div>
              <div className="text-blue-100">Trees Planted for Environment</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </button>
            
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn About Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;