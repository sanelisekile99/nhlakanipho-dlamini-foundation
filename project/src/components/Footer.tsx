import React from 'react';
import { Droplets, Heart, TreePine, Users, Home, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Droplets className="h-8 w-8 text-green-400 mr-2" />
              <div>
                <h3 className="text-lg font-bold">Nhlakanipho Dlamini</h3>
                <p className="text-sm text-blue-200">Foundation</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Transforming communities in Nquthu municipality through comprehensive development programs addressing water access, climate change, agriculture, and youth empowerment.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <Droplets className="h-5 w-5 mr-2 text-green-400" />
              Water & Environment
            </h4>
            <ul className="space-y-2 text-blue-200">
              <li>Sunrise Engozini Water Project</li>
              <li>Community Water Taps</li>
              <li>Tree Planting Initiative</li>
              <li>Climate Change Education</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <Home className="h-5 w-5 mr-2 text-green-400" />
              Agriculture & Food
            </h4>
            <ul className="space-y-2 text-blue-200">
              <li>One Home, One Garden</li>
              <li>Climate-Adapted Growing</li>
              <li>Food Security Programs</li>
              <li>Agricultural Training</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2 text-green-400" />
              Youth & Community
            </h4>
            <ul className="space-y-2 text-blue-200">
              <li>Youth Empowerment</li>
              <li>Job Application Assistance</li>
              <li>June 16 Youth Day Events</li>
              <li>Career Guidance Programs</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 Nhlakanipho Dlamini Foundation. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0 text-blue-200 text-sm">
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