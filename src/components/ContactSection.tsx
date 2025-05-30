import React, { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <div id="contact" className="w-full mt-28 px-6 sm:px-12 lg:px-24 relative overflow-hidden">

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-2">
            Have an Awesome Project <br/>Idea? <span className="text-[#9D8AE6]">Let's Discuss</span>
          </h2>
        </div>

        {/* Contact Form and Info Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl mb-12 relative">
            <div className="bg-gray-100 rounded-full flex items-center p-2">
              <div className="p-2 rounded-full bg-[#9D8AE6] flex items-center justify-center ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-grow py-3 px-4 bg-transparent focus:outline-none text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#9D8AE6] hover:bg-[#8A76E5] text-white font-medium py-3 px-10 rounded-full transition-colors"
              >
                Send
              </button>
            </div>
            
            {/* Success Message - show when submitted */}
            {submitted && (
              <div className="absolute mt-2 text-green-600 text-sm font-medium">
                Thank you! Your message has been sent.
              </div>
            )}
          </form>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-4 w-full max-w-4xl">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <a href="tel:+918074016707" className="text-gray-800 font-medium">+91-8074016707</a>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href="mailto:mritikabala@gmail.com" className="text-gray-800 font-medium">mritikabala@gmail.com</a>
            </div>
            
            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                </svg>
              </div>
              <a href="https://www.linkedin.com/in/ritika-bala-malluru-a22691249/" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-medium">ritika-bala-malluru</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;