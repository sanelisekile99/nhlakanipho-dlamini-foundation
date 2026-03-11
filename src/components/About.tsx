import { User, Leaf, Target, Award } from 'lucide-react';
import nhlakaniphoPhoto from '../img/nhlakanipho photo.jpg';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Community First",
      description: "Every initiative centers around the genuine needs and voices of local communities in Nquthu municipality."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Impact",
      description: "We build lasting solutions that communities can maintain and benefit from long-term, addressing climate change challenges."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Committed to the highest standards in everything we do, from water projects to youth empowerment programs."
    }
  ];

  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow text-green-700">
              <User className="h-4 w-4" />
              About Our Founder
            </div>
            
            <h2 className="section-title max-w-xl">
              Dr Nhlakanipho Dlamini
            </h2>
            
            <div className="mt-8 space-y-6 text-slate-600">
              <p className="text-lg text-slate-700">
                A visionary leader with deep roots in agriculture and community development, Dr Nhlakanipho Dlamini founded this organization with a comprehensive mission: to address climate change impacts, ensure water access, promote sustainable agriculture, and empower youth in Nquthu municipality.
              </p>
              
              <p>
                Drawing from his extensive experience as a farmer, Dr Dlamini understands intimately how climate change has altered traditional growing patterns and affected agricultural practices. His agricultural background drives the foundation's holistic approach to community development, combining water access, climate education, and sustainable farming practices.
              </p>
              
              <p>
                Under his leadership, the Nhlakanipho Dlamini Foundation has successfully implemented the Sunrise Engozini Water Project, established community gardens through the "One Home, One Garden" initiative, planted trees for environmental restoration, and created youth empowerment programs that have directly impacted hundreds of families across Nquthu municipality.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="surface-card overflow-hidden p-3">
              <img 
                src={nhlakaniphoPhoto}
                alt="Dr Nhlakanipho Dlamini"
                className="h-[28rem] w-full rounded-[22px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-[24px] border border-white/20 bg-blue-950 px-6 py-5 text-white shadow-2xl">
              <div className="text-sm uppercase tracking-[0.22em] text-blue-200">Community Impact</div>
              <div className="mt-2 text-3xl font-semibold">100+</div>
              <div className="text-sm text-blue-100">Households served through water access</div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-center font-serif text-4xl font-semibold text-blue-950">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="surface-card lift-card p-8">
                <div className="text-green-600 mb-4">{value.icon}</div>
                <h4 className="text-2xl font-semibold text-blue-950 mb-3">{value.title}</h4>
                <p className="text-slate-600 leading-8">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;