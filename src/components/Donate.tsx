import { useState } from 'react';
import { Heart, CreditCard, Building, Smartphone, CheckCircle, X } from 'lucide-react';

const Donate = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [donationType, setDonationType] = useState('once');

  const predefinedAmounts = ['100', '250', '500', '1000', '2500', '5000'];

  const donationImpact = [
    {
      title: 'Water Access',
      impact: 'Help provide clean water infrastructure to communities',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Home Gardens',
      impact: 'Support families with seeds, tools, and agricultural training',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Climate Education',
      impact: 'Fund workshops teaching climate adaptation strategies',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Tree Planting',
      impact: 'Restore the environment through reforestation projects',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Youth Empowerment',
      impact: 'Empower young people with skills and opportunities',
      icon: <Heart className="h-6 w-6" />
    }
  ];

  const handleDonate = () => {
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a payment gateway
    alert('Thank you for your donation! Payment integration coming soon.');
    setShowModal(false);
  };

  return (
    <section id="donate" className="section-shell bg-gradient-to-br from-green-50/80 via-white to-blue-50/80">
      <div className="section-container">
        <div className="section-header">
          <div className="eyebrow text-green-700">
            <Heart className="h-4 w-4" />
            Make a Difference
          </div>
          <h2 className="section-title">
            Support Our Mission
          </h2>
          <p className="section-copy">
            Your donation helps us provide clean water, promote sustainable agriculture, educate communities about climate change, and empower youth across Nquthu municipality.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-center font-serif text-4xl font-semibold text-blue-950">Where Your Donation Goes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {donationImpact.map((item, index) => (
              <div key={index} className="surface-card lift-card p-6">
                <div className="text-green-600 mb-3">{item.icon}</div>
                <div className="text-2xl font-semibold text-blue-950 mb-2">{item.title}</div>
                <p className="text-slate-600 text-sm leading-7">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-serif text-4xl font-semibold text-blue-950 mb-4">Choose Your Donation Amount</h3>
            <p className="text-slate-600">Every contribution, big or small, makes a real difference in our communities.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
                className={`p-4 rounded-lg font-semibold transition-all duration-300 ${
                  selectedAmount === amount
                    ? 'bg-green-500 text-white shadow-lg scale-105'
                    : 'bg-white text-blue-950 hover:bg-green-50 border border-slate-200 shadow-sm'
                }`}
              >
                R{amount}
              </button>
            ))}
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Or Enter Custom Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">R</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount('');
                }}
                className="input-elegant pl-10 text-lg"
                placeholder="Enter amount"
                min="1"
              />
            </div>
          </div>

          {/* Donation Type */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">Donation Type</label>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setDonationType('once')}
                className={`p-4 rounded-lg font-semibold transition-all duration-300 ${
                  donationType === 'once'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-950 hover:bg-blue-50 border border-slate-200 shadow-sm'
                }`}
              >
                One-Time Donation
              </button>
              <button
                onClick={() => setDonationType('monthly')}
                className={`p-4 rounded-lg font-semibold transition-all duration-300 ${
                  donationType === 'monthly'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-950 hover:bg-blue-50 border border-slate-200 shadow-sm'
                }`}
              >
                Monthly Donation
              </button>
            </div>
          </div>

          {/* Donate Button */}
          <button
            onClick={handleDonate}
            disabled={!selectedAmount && !customAmount}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
              selectedAmount || customAmount
                ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Heart className="mr-2 h-6 w-6" />
            Donate Now
          </button>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <CreditCard className="h-8 w-8 text-green-600 mb-2" />
              <p className="text-sm text-gray-600">Secure Payment</p>
            </div>
            <div className="flex flex-col items-center">
              <Building className="h-8 w-8 text-green-600 mb-2" />
              <p className="text-sm text-gray-600">Tax Deductible</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
              <p className="text-sm text-gray-600">100% to Communities</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center font-serif text-4xl font-semibold text-blue-950 mb-8">Other Ways to Give</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="surface-card p-6 text-center">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-2xl font-semibold text-blue-950 mb-3">Bank Transfer</h4>
              <p className="text-slate-600 mb-4">Direct deposit to our foundation account</p>
              <button className="text-green-600 font-semibold hover:text-green-700">View Details</button>
            </div>
            <div className="surface-card p-6 text-center">
              <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-2xl font-semibold text-blue-950 mb-3">Mobile Money</h4>
              <p className="text-slate-600 mb-4">Donate via mobile payment platforms</p>
              <button className="text-green-600 font-semibold hover:text-green-700">Learn More</button>
            </div>
            <div className="surface-card p-6 text-center">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-2xl font-semibold text-blue-950 mb-3">In-Kind Donations</h4>
              <p className="text-slate-600 mb-4">Contribute materials, supplies, or services</p>
              <button className="text-green-600 font-semibold hover:text-green-700">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[28px] p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="font-serif text-3xl font-semibold text-blue-950 mb-6">Complete Your Donation</h3>

            <div className="mb-6 p-4 bg-green-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Amount:</span>
                <span className="text-2xl font-bold text-green-600">
                  R{selectedAmount || customAmount}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Type:</span>
                <span className="text-blue-900 font-semibold">
                  {donationType === 'once' ? 'One-Time' : 'Monthly'}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-2xl border-2 ${
                      paymentMethod === 'card'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <CreditCard className="h-6 w-6 mx-auto mb-1" />
                    <span className="text-xs">Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-3 rounded-2xl border-2 ${
                      paymentMethod === 'bank'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <Building className="h-6 w-6 mx-auto mb-1" />
                    <span className="text-xs">Bank</span>
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      className="input-elegant"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        className="input-elegant"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        className="input-elegant"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="input-elegant"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="elegant-button-primary w-full px-6 py-4"
              >
                Complete Donation
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              Your donation is secure and encrypted. We never store your payment details.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Donate;
