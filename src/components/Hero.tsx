import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import logo from '../img/nhlakapho logo1.jpg';
import founderPhoto from '../img/founder-community.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-blue-950 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_28%),linear-gradient(135deg,#0f172a_0%,#1e3a8a_45%,#0f172a_100%)]"></div>
      <div className="absolute inset-0 subtle-grid opacity-20"></div>
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-green-400/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl"></div>
      <div className="absolute top-8 left-8 z-10 hidden lg:block">
        <img src={logo} alt="Nhlakanipho Dlamini Foundation Logo" className="h-20 w-auto rounded-full ring-1 ring-white/20 drop-shadow-lg" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <div className="max-w-5xl">
          <div className="eyebrow border-white/10 bg-white/10 text-powder-blue">
            <Heart className="h-4 w-4 text-green-400" />
            Transforming communities with dignity and care
          </div>
          
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
            Empowering
            <span className="text-green-400"> Nquthu </span>
            Through Water, Agriculture & Youth Development
          </h1>
          
          <p className="mt-8 max-w-3xl text-lg leading-8 text-blue-100 md:text-2xl md:leading-10">
            Founded by Dr Nhlakanipho Dlamini, our foundation addresses climate change impacts, provides clean water access through the Sunrise Engozini Project, promotes sustainable agriculture, and empowers youth across Nquthu municipality communities.
          </p>
          
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:max-w-3xl">
            <div className="surface-card-dark lift-card p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-powder-blue">Reach</div>
              <div className="mt-3 text-4xl font-semibold text-green-400">100+</div>
              <div className="mt-2 text-blue-100">Households with improved access to clean water</div>
            </div>
            <div className="surface-card-dark lift-card p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-powder-blue">Restoration</div>
              <div className="mt-3 text-4xl font-semibold text-green-400">25</div>
              <div className="mt-2 text-blue-100">Trees planted to strengthen environmental resilience</div>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button 
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
              className="elegant-button-primary px-8 py-4"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </button>
            
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
            >
              Learn About Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-blue-950"
            >
              Get Involved
            </button>
          </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -left-6 top-12 hidden h-24 w-24 rounded-full border border-white/15 bg-green-400/10 blur-sm lg:block"></div>
            <div className="absolute -right-6 bottom-12 hidden h-32 w-32 rounded-full border border-white/10 bg-blue-200/10 blur-sm lg:block"></div>

            <div className="surface-card-dark relative overflow-hidden p-3">
              <img
                src={founderPhoto}
                alt="Dr Nhlakanipho Dlamini"
                className="h-[420px] w-full rounded-[24px] object-cover object-top sm:h-[520px]"
              />

              <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-300">Founder</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Dr Nhlakanipho Dlamini</h2>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Leading community transformation through water access, sustainable agriculture, climate education, and youth empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;