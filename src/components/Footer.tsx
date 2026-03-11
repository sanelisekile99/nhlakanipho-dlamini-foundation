import React from 'react';
import { Droplets, Heart, TreePine, Users, Home, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_28%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]"></div>
      <div className="section-container relative py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center mb-4">
              <Droplets className="h-8 w-8 text-green-400 mr-2" />
              <div>
                <h3 className="font-serif text-2xl font-semibold">Nhlakanipho Dlamini</h3>
                <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Foundation</p>
              </div>
            </div>
            <p className="text-blue-100/90 leading-8">
              Transforming communities in Nquthu municipality through comprehensive development programs addressing water access, climate change, agriculture, and youth empowerment.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center text-white">
              <Droplets className="h-5 w-5 mr-2 text-green-400" />
              Water & Environment
            </h4>
            <ul className="space-y-3 text-blue-100/80">
              <li>Sunrise Engozini Water Project</li>
              <li>Community Water Taps</li>
              <li>Tree Planting Initiative</li>
              <li>Climate Change Education</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center text-white">
              <Home className="h-5 w-5 mr-2 text-green-400" />
              Agriculture & Food
            </h4>
            <ul className="space-y-3 text-blue-100/80">
              <li>One Home, One Garden</li>
              <li>Climate-Adapted Growing</li>
              <li>Food Security Programs</li>
              <li>Agricultural Training</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center text-white">
              <Users className="h-5 w-5 mr-2 text-green-400" />
              Youth & Community
            </h4>
            <ul className="space-y-3 text-blue-100/80">
              <li>Youth Empowerment</li>
              <li>Job Application Assistance</li>
              <li>June 16 Youth Day Events</li>
              <li>Career Guidance Programs</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-blue-100/70 text-sm">
              © 2024 Nhlakanipho Dlamini Foundation. All rights reserved.
            </p>
            <div className="flex items-center text-blue-100/70 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 mx-1" />
              <span>for Nquthu communities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;