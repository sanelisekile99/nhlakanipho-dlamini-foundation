import React from 'react';
import { Users, Droplets, TreePine, TrendingUp, Home, Calendar } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: <Home className="h-12 w-12" />,
      number: "100+",
      label: "Households Served",
      description: "Families with improved water access through Sunrise Engozini"
    },
    {
      icon: <Droplets className="h-12 w-12" />,
      number: "2",
      label: "Villages Connected",
      description: "Communities now with clean water tap access"
    },
    {
      icon: <TreePine className="h-12 w-12" />,
      number: "25",
      label: "Trees Planted",
      description: "Environmental restoration across communities"
    },
    {
      icon: <Users className="h-12 w-12" />,
      number: "50+",
      label: "Youth Empowered",
      description: "Young people supported through programs and events"
    }
  ];

  const testimonials = [
    {
      name: "Nomsa Mthembu",
      role: "Community Leader",
      content: "The Sunrise Engozini Water Project has completely transformed our daily lives. Our families no longer walk long distances for clean water, and the home garden program has taught us how to grow vegetables despite changing weather patterns.",
      image: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sipho Ndlovu",
      role: "Local Farmer & Garden Participant",
      content: "Dr Dlamini's foundation taught us about climate change and how to adapt our growing methods. The 'One Home, One Garden' program has improved our food security and helped us understand new agricultural techniques.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Thandi Mhlongo",
      role: "Youth Program Participant",
      content: "The June 16 Youth Day event was inspiring. The guest speakers from different departments shared their journeys and gave us practical advice about career opportunities. The foundation also helped me with job applications.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const programs = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Water & Sanitation",
      description: "Sunrise Engozini Water Project providing clean water access"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Climate Education",
      description: "Teaching communities about climate change and adaptive agriculture"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Home Gardens",
      description: "One Home, One Garden initiative with Department of Agriculture"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Youth Empowerment",
      description: "Job assistance and annual Youth Day events with guest speakers"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
            <span className="text-green-600 font-semibold uppercase tracking-wide">Our Impact</span>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Transforming Lives Across Nquthu Municipality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every number represents real lives improved, communities strengthened, and sustainable solutions implemented through our comprehensive development programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-blue-600 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-blue-900 mb-2">{stat.label}</div>
              <div className="text-gray-600 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Program Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-green-600 mb-4 flex justify-center">{program.icon}</div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">{program.title}</h4>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">Community Voices</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex-1">
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <div className="font-semibold text-blue-900 text-sm">{testimonial.name}</div>
                    <div className="text-gray-600 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;