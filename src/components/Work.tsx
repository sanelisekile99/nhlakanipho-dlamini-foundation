import React from 'react';
import { Droplets, Sprout, Users, TreePine, CheckCircle } from 'lucide-react';
import tapPhoto from '../img/tap.jpg';
import oneHomeOneGarden from '../img/one home one garden.jpeg';
import climateEducation from '../img/climate education.jpg';
import chatgptImage from '../img/ChatGPT Image Jun 19, 2025, 02_14_07 PM.png';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Sunrise Engozini Water Project",
      location: "2 Villages in Nquthu Municipality",
      beneficiaries: "100+ households",
      status: "Completed",
      icon: <Droplets className="h-8 w-8" />,
      description: "Our flagship water access initiative providing clean, accessible water through strategically installed taps across two villages, transforming daily life for over 100 households.",
      image: tapPhoto,
      impact: [
        "Installed water taps serving 100+ households",
        "Eliminated long-distance water collection",
        "Improved community health and sanitation",
        "Enhanced quality of life for families"
      ]
    },
    {
      id: 2,
      title: "One Home, One Garden Initiative",
      location: "Nquthu Municipality Communities",
      beneficiaries: "Multiple families",
      status: "Ongoing",
      icon: <Sprout className="h-8 w-8" />,
      description: "Partnership with the Department of Agriculture to establish sustainable home gardens, teaching climate-adapted growing techniques and promoting food security.",
      image: oneHomeOneGarden,
      impact: [
        "Established home gardens across communities",
        "Taught climate-adapted growing techniques",
        "Promoted food security and nutrition",
        "Partnered with Department of Agriculture"
      ]
    },
    {
      id: 3,
      title: "Climate Change Education Program",
      location: "Nquthu Municipality",
      beneficiaries: "Community members",
      status: "Ongoing",
      icon: <TreePine className="h-8 w-8" />,
      description: "Comprehensive education on climate change impacts, teaching communities how changing weather patterns affect traditional vegetable growing and agricultural practices.",
      image: climateEducation,
      impact: [
        "Educated communities on climate change",
        "Taught adaptive growing techniques",
        "Planted 25 trees for environmental restoration",
        "Promoted sustainable agricultural practices"
      ]
    },
    {
      id: 4,
      title: "Youth Empowerment Program",
      location: "Nquthu Municipality",
      beneficiaries: "Local youth",
      status: "Ongoing",
      icon: <Users className="h-8 w-8" />,
      description: "Comprehensive youth development including job application assistance and the annual June 16 Youth Day event featuring guest speakers from various departments sharing life experiences and career guidance.",
      image: chatgptImage,
      impact: [
        "Assisted youth with job applications",
        "Hosted annual June 16 Youth Day event",
        "Connected youth with department speakers",
        "Provided career guidance and life advice"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Ongoing': return 'bg-blue-100 text-blue-800';
      case 'Planned': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="work" className="section-shell bg-white/40">
      <div className="section-container">
        <div className="section-header">
          <div className="eyebrow text-blue-700">
            <Droplets className="h-4 w-4" />
            Our Programs
          </div>
          <h2 className="section-title">
            Comprehensive Community Development
          </h2>
          <p className="section-copy">
            From water access and climate education to agricultural support and youth empowerment, our programs address the interconnected challenges facing Nquthu municipality communities.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`surface-card grid items-center gap-10 overflow-hidden p-6 lg:grid-cols-2 lg:p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={`h-80 w-full rounded-[24px] bg-slate-50 object-contain shadow-xl ${project.title === 'Youth Empowerment Program' ? 'scale-100' : 'object-center scale-95'}`}
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`rounded-full px-4 py-1.5 text-sm font-medium shadow-sm ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                    <div className="text-blue-600">{project.icon}</div>
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-4xl font-semibold text-blue-950">{project.title}</h3>
                
                <div className="mt-5 flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center text-slate-500">
                    <Droplets className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-slate-500">
                    <Users className="h-4 w-4 mr-1" />
                    {project.beneficiaries}
                  </div>
                </div>
                
                <p className="mt-6 text-lg text-slate-600">
                  {project.description}
                </p>
                
                <div className="mt-6">
                  <h4 className="font-semibold uppercase tracking-[0.2em] text-blue-800">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start rounded-2xl bg-slate-50 px-4 py-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;