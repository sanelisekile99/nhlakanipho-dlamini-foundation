import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: ["Nquthu Municipality", "KwaZulu-Natal, South Africa"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+27 79 422 2745", "Available Mon-Fri 8AM-5PM"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@nhlakaniphofoundation.org", "We'll respond within 24 hours"]
    }
  ];

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: ''
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "messages"), form);
      setSuccess(true);
      setForm({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Send className="h-6 w-6 text-green-400 mr-2" />
            <span className="text-green-400 font-semibold uppercase tracking-wide">Get In Touch</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Whether you want to volunteer, partner with us, or learn about our work, we'd love to hear from you. Together, we can continue transforming communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex">
                  <div className="text-green-400 mr-4 mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-blue-100">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-800 rounded-xl">
              <h4 className="font-semibold text-lg mb-3">How You Can Help</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Volunteer for community projects</li>
                <li>• Donate to water infrastructure initiatives</li>
                <li>• Partner with us on sustainability programs</li>
                <li>• Spread awareness about our work</li>
              </ul>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
            {success && <div className="mb-4 text-green-600 font-semibold">Thank you! Your message has been sent.</div>}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>Volunteer Opportunities</option>
                  <option>Partnership</option>
                  <option>Donation</option>
                  <option>Media Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Tell us how you'd like to get involved or any questions you have..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;