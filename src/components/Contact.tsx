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
    <section id="contact" className="section-shell overflow-hidden bg-blue-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_25%),linear-gradient(180deg,#0f172a_0%,#172554_100%)]"></div>
      <div className="absolute inset-0 subtle-grid opacity-15"></div>
      <div className="section-container relative">
        <div className="section-header">
          <div className="eyebrow border-white/10 bg-white/10 text-green-300">
            <Send className="h-4 w-4" />
            Get In Touch
          </div>
          <h2 className="section-title text-white">
            Join Our Mission
          </h2>
          <p className="section-copy text-blue-100">
            Whether you want to volunteer, partner with us, or learn about our work, we'd love to hear from you. Together, we can continue transforming communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-4xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="surface-card-dark flex items-start gap-4 p-6">
                  <div className="rounded-2xl bg-white/10 p-3 text-green-300">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-xl mb-2 text-white">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-blue-100">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="surface-card-dark mt-12 p-8">
              <h4 className="font-serif text-3xl font-semibold mb-4">How You Can Help</h4>
              <ul className="space-y-3 text-blue-100">
                <li>• Volunteer for community projects</li>
                <li>• Donate to water infrastructure initiatives</li>
                <li>• Partner with us on sustainability programs</li>
                <li>• Spread awareness about our work</li>
              </ul>
            </div>
          </div>

          <div className="surface-card p-8 text-gray-900 lg:p-10">
            <h3 className="font-serif text-4xl font-semibold text-blue-950 mb-6">Send us a Message</h3>
            {success && <div className="mb-4 rounded-2xl bg-green-50 px-4 py-3 text-green-700 font-semibold">Thank you! Your message has been sent.</div>}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="input-elegant"
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
                    className="input-elegant"
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
                  className="input-elegant"
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
                  className="input-elegant"
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
                  className="input-elegant resize-none"
                  placeholder="Tell us how you'd like to get involved or any questions you have..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="elegant-button-primary w-full px-6 py-4"
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