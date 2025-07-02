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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-4">
              <User className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-green-600 font-semibold uppercase tracking-wide">About Our Founder</span>
            </div>
            
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Dr Nhlakanipho Dlamini
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
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
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={nhlakaniphoPhoto}
                alt="Dr Nhlakanipho Dlamini"
                  className="object-cover w-full h-96 object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm">Households Served</div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600 mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;