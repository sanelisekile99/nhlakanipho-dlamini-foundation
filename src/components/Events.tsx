import { useEffect, useState } from 'react';
import { Calendar, MapPin, Users, Trophy, Clock, Phone, Mail, X, ChevronLeft, ChevronRight } from 'lucide-react';
import soccerTournament from '../img/soccer-tournament.jpeg';

type UpcomingPrize = {
  position: string;
  prize: string;
};

type UpcomingContact = {
  name: string;
  phone: string;
};

type UpcomingEvent = {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  type: 'upcoming';
  registrationFee: string;
  prizes: UpcomingPrize[];
  contactInfo: UpcomingContact[];
  details: {
    teams: string;
    format: string;
    duration: string;
  };
};

const Events = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const imageModules = import.meta.glob('../img/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    import: 'default'
  }) as Record<string, string>;

  const eventGallery = Object.entries(imageModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image], index) => {
      const fileName = path.split('/').pop()?.replace(/\.[^/.]+$/, '') ?? `Image ${index + 1}`;
      const title = fileName
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())
        .trim();

      return {
        id: index + 1,
        title,
        image
      };
    });

  const findImageByKeyword = (keywords: string[], fallback = soccerTournament) => {
    const lowerKeywords = keywords.map((keyword) => keyword.toLowerCase());
    const match = Object.entries(imageModules).find(([path]) => {
      const lowerPath = path.toLowerCase();
      return lowerKeywords.some((keyword) => lowerPath.includes(keyword));
    });

    return match?.[1] ?? fallback;
  };

  useEffect(() => {
    if (eventGallery.length <= 1) return;
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventGallery.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [eventGallery.length, isPaused]);

  useEffect(() => {
    if (currentSlide >= eventGallery.length) {
      setCurrentSlide(0);
    }
  }, [currentSlide, eventGallery.length]);

  const goToPreviousSlide = () => {
    if (eventGallery.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + eventGallery.length) % eventGallery.length);
  };

  const goToNextSlide = () => {
    if (eventGallery.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % eventGallery.length);
  };

  const upcomingEvents: UpcomingEvent[] = [];

  const pastEvents = [
    {
      id: 0,
      title: "Backing My School Campaign",
      date: "27 February 2026",
      location: "uBongumenzi Secondary School",
      description: "A community drive to provide school supplies, support, and resources to students in need. Community members came together to back schools and empower learners.",
      image: findImageByKeyword(['backing', 'school', 'bongimenzi']),
      attendees: "Community participation",
      highlights: [
        "School support drive completed",
        "Community resource contributions",
        "Learner empowerment initiative"
      ]
    },
    {
      id: 1,
      title: "Soccer Tournament",
      date: "20 & 21 December 2025",
      location: "Ntanyandlovu Sports Ground",
      description: "A successful soccer tournament that brought together 8 teams from across the community, promoting youth engagement, healthy competition, and unity.",
      image: soccerTournament,
      attendees: "8 teams participated",
      highlights: [
        "R10,000 first prize awarded",
        "Youth engagement through sport",
        "Strong community turnout"
      ]
    },
    {
      id: 2,
      title: "June 16 Youth Day Celebration",
      date: "16 June 2024",
      location: "Nquthu Municipality",
      description: "Annual youth empowerment event featuring guest speakers from various government departments sharing their experiences and career guidance.",
      image: findImageByKeyword(['founder-community', 'kids', 'laptop', 'youth', 'principal']),
      attendees: "50+ youth participants",
      highlights: [
        "Career guidance sessions",
        "Motivational talks from department representatives",
        "Job application assistance",
        "Networking opportunities"
      ]
    },
    {
      id: 3,
      title: "Climate Change Education Workshop",
      date: "March 2024",
      location: "Community Centers, Nquthu",
      description: "Interactive workshops teaching communities about climate change impacts on agriculture and adaptive growing techniques.",
      image: findImageByKeyword(['climate', 'education']),
      attendees: "100+ community members",
      highlights: [
        "Climate change awareness",
        "Adaptive farming techniques",
        "Sustainable agriculture practices",
        "Q&A with agricultural experts"
      ]
    },
    {
      id: 4,
      title: "Sunrise Engozini Water Project Launch",
      date: "2023",
      location: "2 Villages, Nquthu Municipality",
      description: "Official launch of our flagship water access project bringing clean water to over 100 households.",
      image: findImageByKeyword(['tap', 'water']),
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
    <section id="events" className="section-shell bg-gradient-to-br from-blue-50/80 via-white to-green-50/70">
      <div className="section-container">
        <div className="section-header">
          <div className="eyebrow text-blue-700">
            <Calendar className="h-4 w-4" />
            Community Events
          </div>
          <h2 className="section-title">
            Events & Activities
          </h2>
          <p className="section-copy">
            Join us in our mission to empower communities through engaging events, educational workshops, and celebration of our achievements together.
          </p>
        </div>

        <div className="mb-20">
          <div className="surface-card relative overflow-hidden p-3 shadow-2xl">
            {eventGallery.length > 0 ? (
              <>
                <div
                  className="group relative aspect-[16/10] w-full overflow-hidden rounded-[22px] bg-slate-100 md:aspect-[16/9] lg:aspect-[21/9]"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {eventGallery.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-75"
                      />
                      <div className="absolute inset-0 bg-black/35" />
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="relative z-10 h-full w-full object-contain p-3 sm:p-5"
                      />
                    </div>
                  ))}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <button
                    onClick={goToPreviousSlide}
                    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/45 p-2.5 text-white transition-all hover:bg-black/70"
                    aria-label="Previous event image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    onClick={goToNextSlide}
                    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/45 p-2.5 text-white transition-all hover:bg-black/70"
                    aria-label="Next event image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                <div className="bg-white/80 px-3 py-4">
                  <div className="mb-3 flex items-center justify-center gap-2">
                    {eventGallery.map((slide, index) => (
                      <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to ${slide.title}`}
                        className={`h-2.5 rounded-full transition-all ${
                          index === currentSlide ? 'w-8 bg-green-600' : 'w-2.5 bg-gray-400 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {eventGallery.map((slide, index) => (
                      <button
                        key={`thumb-${slide.id}`}
                        onClick={() => setCurrentSlide(index)}
                        className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                          index === currentSlide
                            ? 'border-green-500 ring-2 ring-green-200'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                        aria-label={`Preview ${slide.title}`}
                      >
                        <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="p-8 text-center text-slate-600">
                No images found in the img folder.
              </div>
            )}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-8 flex items-center font-serif text-4xl font-semibold text-blue-950">
            <Calendar className="h-8 w-8 text-green-600 mr-3" />
            Upcoming Events
          </h3>

          {upcomingEvents.length === 0 && (
            <div className="surface-card mb-8 p-6 text-center text-slate-600">
              No upcoming events right now. Please check back soon.
            </div>
          )}
          
          {upcomingEvents.map((event) => (
            <div key={event.id} className="surface-card overflow-hidden">
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
                  <h4 className="font-serif text-4xl font-semibold text-blue-950 mb-2">{event.title}</h4>
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
                        <div key={idx} className="rounded-2xl bg-slate-50 p-3">
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
                    className="elegant-button-primary w-full px-6 py-4"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Register Your Team
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-8 flex items-center font-serif text-4xl font-semibold text-blue-950">
            <Clock className="h-8 w-8 text-blue-600 mr-3" />
            Past Events
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="surface-card lift-card p-6">
                <div className="mb-5 overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-52 w-full object-cover"
                  />
                </div>

                <div className="mb-4">
                  <h4 className="text-2xl font-semibold text-blue-950 mb-2">{event.title}</h4>
                  <div className="flex items-center text-slate-500 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-slate-500 text-sm mb-3">
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

                <p className="text-slate-700 text-sm leading-7 mb-4">{event.description}</p>

                {event.highlights && (
                  <div>
                    <h5 className="font-semibold text-blue-900 text-sm mb-2 uppercase tracking-[0.18em]">Highlights</h5>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-slate-600 text-xs flex items-start leading-6">
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

        <div className="surface-card mt-16 bg-blue-950 p-8 text-center text-white lg:p-12">
          <h3 className="font-serif text-4xl font-semibold mb-4">Stay Updated on Our Events</h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on upcoming community events, workshops, and celebrations. Get in touch to learn more or participate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="elegant-button-secondary px-8 py-4"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </button>
            <button 
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-blue-950"
            >
              Support Our Events
            </button>
          </div>
        </div>
      </div>

      {/* Registration Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[28px] p-8 max-w-md w-full shadow-2xl relative">
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
