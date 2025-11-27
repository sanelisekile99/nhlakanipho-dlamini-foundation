import { useState } from 'react';
import { Calendar, MapPin, Users, Trophy, Clock, Phone, Mail, X } from 'lucide-react';
import soccerTournament from '../img/soccer-tournament.jpeg';

const Events = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const upcomingEvents = [
    {
      id: 1,
      title: "Soccer Tournament",
      subtitle: "Nhlakanipho Dlamini Foundation Cup",
      date: "20 & 21 December 2025",
      time: "Full Day Event",
      location: "Ntanyandlovu Sports Ground",
      description: "Join us for an exciting soccer tournament bringing together 8 teams from across the community. This event promotes youth engagement, healthy competition, and community unity.",
      image: soccerTournament,
      type: "upcoming",
      registrationFee: "R1100 per team",
      prizes: [
        { position: "1st Place", prize: "R10,000 + Jersey + Trophy + Gold Medals" },
        { position: "2nd Place", prize: "R5,000 + Jersey + Silver Medals" },
        { position: "3rd & 4th Place", prize: "Jersey for both teams" }
      ],
      contactInfo: [
        { name: "Ntando Shoba", phone: "076 814 1030" },
        { name: "T. Action Shelembe", phone: "082 383 4543" }
      ],
      details: {
        teams: "8 Teams",
        format: "Tournament Format",
        duration: "2 Days"
      }
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "June 16 Youth Day Celebration",
      date: "16 June 2024",
      location: "Nquthu Municipality",
      description: "Annual youth empowerment event featuring guest speakers from various government departments sharing their experiences and career guidance.",
      image: null,
      attendees: "50+ youth participants",
      highlights: [
        "Career guidance sessions",
        "Motivational talks from department representatives",
        "Job application assistance",
        "Networking opportunities"
      ]
    },
    {
      id: 2,
      title: "Climate Change Education Workshop",
      date: "March 2024",
      location: "Community Centers, Nquthu",
      description: "Interactive workshops teaching communities about climate change impacts on agriculture and adaptive growing techniques.",
      image: null,
      attendees: "100+ community members",
      highlights: [
        "Climate change awareness",
        "Adaptive farming techniques",
        "Sustainable agriculture practices",
        "Q&A with agricultural experts"
      ]
    },
    {
      id: 3,
      title: "Sunrise Engozini Water Project Launch",
      date: "2023",
      location: "2 Villages, Nquthu Municipality",
      description: "Official launch of our flagship water access project bringing clean water to over 100 households.",
      image: null,
      attendees: "200+ community members",
      highlights: [
        "Water tap installations completed",
        "Community celebration",
        "Partnership announcements",
        "Future project roadmap shared"
      ]
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold uppercase tracking-wide">Community Events</span>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Events & Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in our mission to empower communities through engaging events, educational workshops, and celebration of our achievements together.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
            <Calendar className="h-8 w-8 text-green-600 mr-3" />
            Upcoming Events
          </h3>
          
          {upcomingEvents.map((event) => (
            <div key={event.id} className="glass-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Event Image */}
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    Upcoming
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-8 lg:p-12">
                  <h4 className="text-3xl font-bold text-blue-900 mb-2">{event.title}</h4>
                  <p className="text-xl text-green-600 font-semibold mb-6">{event.subtitle}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">{event.date}</p>
                        <p className="text-gray-600 text-sm">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{event.location}</p>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{event.details.teams} | {event.details.duration}</p>
                    </div>
                    <div className="flex items-start">
                      <Trophy className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-semibold">Registration: {event.registrationFee}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>

                  {/* Prizes */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                      Prizes
                    </h5>
                    <div className="space-y-2">
                      {event.prizes.map((prize, idx) => (
                        <div key={idx} className="glass rounded-lg p-3">
                          <span className="font-semibold text-blue-900">{prize.position}:</span>
                          <span className="text-gray-700 ml-2">{prize.prize}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-blue-900 mb-3">For More Information:</h5>
                    <div className="space-y-2">
                      {event.contactInfo.map((contact, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <Phone className="h-4 w-4 mr-2 text-green-600" />
                          <span className="font-medium">{contact.name}:</span>
                          <span className="ml-2">{contact.phone}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => setShowContactModal(true)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Register Your Team
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
            <Clock className="h-8 w-8 text-blue-600 mr-3" />
            Past Events
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="glass-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{event.title}</h4>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  {event.attendees && (
                    <div className="flex items-center text-green-600 text-sm font-semibold mb-3">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees}
                    </div>
                  )}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">{event.description}</p>

                {event.highlights && (
                  <div>
                    <h5 className="font-semibold text-blue-900 text-sm mb-2">Highlights:</h5>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-600 text-xs flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 glass-blue rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Updated on Our Events</h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on upcoming community events, workshops, and celebrations. Get in touch to learn more or participate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </button>
            <button 
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              Support Our Events
            </button>
          </div>
        </div>
      </div>

      {/* Registration Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-6">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Register Your Team</h3>
              <p className="text-gray-600">Contact the following people to register for the tournament</p>
            </div>

            <div className="space-y-4">
              <div className="glass-white p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 rounded-full p-2 mr-3">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Ntando Shoba</p>
                  </div>
                </div>
                <a 
                  href="tel:0768141030"
                  className="block bg-green-500 hover:bg-green-600 text-white text-center font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                >
                  Call: 076 814 1030
                </a>
              </div>

              <div className="glass-white p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-500 rounded-full p-2 mr-3">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">T. Action Shelembe</p>
                  </div>
                </div>
                <a 
                  href="tel:0823834543"
                  className="block bg-blue-500 hover:bg-blue-600 text-white text-center font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                >
                  Call: 082 383 4543
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                <strong className="text-blue-900">Registration Fee:</strong> R1100 per team
              </p>
            </div>

            <button
              onClick={() => setShowContactModal(false)}
              className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
