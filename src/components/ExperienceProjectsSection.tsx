import React from 'react';
import ContactSection from './ContactSection';

const ExperienceProjectsSection = () => {
  return (
    <div className="w-full bg-white mt-16 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-23 right-0 w-[150px] sm:w-[180px] opacity-35">
        <img src="/uploads/flower.png" alt="Decorative Mandala" />
      </div>
      
      {/* Connecting Mandala Art between sections */}
      <div className="absolute top-[20%] left-0 sm:w-[15%] opacity-15">
        <img src="/uploads/mandala-rotated-1.png" alt="Connecting Mandala" />
      </div>
      
      {/* <div className="absolute bottom-20 left-0 w-[150px] sm:w-[180px] opacity-35">
        <img src="/uploads/bg-mandala.png" alt="Decorative Mandala" />
      </div> */}

      {/* Work Experience Section */}
      <div className="mb-32">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">
          My <span className="text-custom-purple">Work Experience</span>
        </h2>
        
        {/* Experience Timeline Container */}
        <div className="max-w-6xl mx-auto">
          {/* Experience 1 */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-14">
            <div className="md:w-2/5 text-left mb-6 md:mb-0 pr-4">
              <h3 className="text-2xl md:text-3xl font-semibold">Perficient, Hyderabad</h3>
              <p className="text-gray-600 text-lg">Jul 2024 – Oct 2025</p>
            </div>
            
            <div className="flex flex-col items-center mx-2 md:mx-6">
              <div className="w-16 h-16">
                <img src="/uploads/experience.png" alt="Experience Icon" className="w-full h-full" />
              </div>
              <div className="w-[3px] h-[17rem] border-l-[3px] border-dashed border-black"></div>
            </div>
            
            <div className="md:w-2/5 text-left pl-4">
              <h4 className="text-2xl md:text-3xl font-medium">UI/UX Designer</h4>
              <p className="text-gray-600 text-lg mt-2">
               Improved BookMyShow’s UX by spotting and fixing UI flaws, and designed custom weather icons and gym app mockups. Sharpened design instincts through design thinking and real-world app analysis.
              </p>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col md:flex-row justify-between items-start -mt-[55px]">
            <div className="md:w-2/5 text-left mb-6 md:mb-0 pr-4">
              <h3 className="text-2xl md:text-3xl font-semibold">Aidwise.ai, Hyderabad</h3>
              <p className="text-gray-600 text-lg">Jan 2025 – Present</p>
            </div>
            
            <div className="flex flex-col items-center mx-2 md:mx-6">
              <div className="w-16 h-16 ">
                <img src="/uploads/experience.png" alt="Experience Icon" className="w-full h-full" />
              </div>
              {/* Added a short dashed line for visual completion */}
              {/* <div className="w-[3px] h-12 border-l-[3px] border-dashed border-purple-400"></div> */}
            </div>
            
            <div className="md:w-2/5 text-left pl-4">
              <h4 className="text-2xl md:text-3xl font-medium">UI/UX Designer</h4>
              <p className="text-gray-600 text-lg mt-2">
                Designed intuitive dashboards and interfaces for complex data, including hospital records and business insights. Translated client needs into scalable, user-friendly solutions built for clarity and performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-16 mb-8 relative">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">
          Let's have a look at my <span className="text-custom-purple">Projects</span>
        </h2>
        
        {/* Project Grid */}
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Project 1 card with improved styling */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">Global Trade Intelligence Platform</h3>
              <div className="bg-[#F7F7FD] rounded-xl shadow-sm p-8 border border-purple-100 hover:shadow-md transition-shadow">
                <p className="text-gray-600 text-base leading-relaxed">
                  Designed a Figma-based platform to simplify global trade decisions for businesses, featuring supplier-buyer match scoring, risk analysis, and exportable insights — all presented through clean, interactive data tables. Emphasized usability, scalability, and strategic clarity to support confident decision-making.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[350px] rounded-xl overflow-hidden  transform hover:scale-[1.01] transition-transform">
                <img src="/uploads/project-1.jpg" alt="Project Image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12 mb-24">
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">Financial Services Platform</h3>
              <div className="bg-[#F7F7FD] rounded-xl shadow-sm p-8 border border-purple-100 hover:shadow-md transition-shadow">
                <p className="text-gray-600 text-base leading-relaxed">
                  Designed a financial platform in Figma for Indian businesses to manage invoicing, payroll, taxes, and compliance in one place. Featured a clean hero section, modular tool previews, and an intuitive workflow explainer. Used a minimal, icon-driven layout with subtle micro-interactions to enhance usability, trust, and conversion. 
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[350px] rounded-xl overflow-hidden transform hover:scale-[1.01] transition-transform">
                <img src="/uploads/project-2.jpg" alt="Project Image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">Rental Clothing Platform</h3>
              <div className="bg-[#F7F7FD] rounded-xl shadow-sm p-8 border border-purple-100 hover:shadow-md transition-shadow">
                <p className="text-gray-600 text-base leading-relaxed">
                  Designed a responsive Figma prototype for a curated wardrobe platform, focused on clean layouts, visual hierarchy, and trust-building elements like “As seen in” highlights and product galleries. Optimized the user flow from browsing to booking across mobile and desktop, with an emphasis on clarity, conversion, and brand personality.  
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[350px] rounded-xl overflow-hidden transform hover:scale-[1.01] transition-transform">
                <img src="/uploads/project-3.jpg" alt="Project Image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-[58%] -right-10 w-[250px] opacity-35">
          <img src="/uploads/sun.png" alt="Decorative Mandala" />
        </div>
      </div>

      <div className="absolute left-0 top-[75%]  w-[180px] opacity-35">
          <img src="/uploads/half-sun.png" alt="Decorative Mandala" />
      </div>

      <ContactSection />

      <div className="absolute bottom-[120px] right-0 w-[250px] opacity-35">
        <img src="/uploads/flower.png" alt="Decorative Mandala" className="w-full" />
      </div>  
    </div>
  );
};

export default ExperienceProjectsSection;