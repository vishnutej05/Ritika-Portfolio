import React, { useEffect } from 'react';
import ContactSection from './ContactSection';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Experience data structure
const experiences = [
  {
    company: "Perficient, Hyderabad",
    period: "Jul 2024 – Oct 2025",
    title: "UI/UX Designer",
    description: "Improved BookMyShow's UX by spotting and fixing UI flaws, and designed custom weather icons and gym app mockups. Sharpened design instincts through design thinking and real-world app analysis."
  },
  {
    company: "Aidwise.ai, Hyderabad",
    period: "Jan 2025 – Present",
    title: "UI/UX Designer",
    description: "Designed intuitive dashboards and interfaces for complex data, including hospital records and business insights. Translated client needs into scalable, user-friendly solutions built for clarity and performance."
  }
  // You can add more experiences here
];

// Project data structure
const projects = [
  {
    title: "Global Trade Intelligence Platform",
    description: "Designed a Figma-based platform to simplify global trade decisions for businesses, featuring supplier-buyer match scoring, risk analysis, and exportable insights — all presented through clean, interactive data tables. Emphasized usability, scalability, and strategic clarity to support confident decision-making.",
    image: "/uploads/project-1.jpg",
    isReversed: false
  },
  {
    title: "Financial Services Platform",
    description: "Designed a financial platform in Figma for Indian businesses to manage invoicing, payroll, taxes, and compliance in one place. Featured a clean hero section, modular tool previews, and an intuitive workflow explainer. Used a minimal, icon-driven layout with subtle micro-interactions to enhance usability, trust, and conversion.",
    image: "/uploads/project-2.jpg",
    isReversed: true
  },
  {
    title: "Rental Clothing Platform",
    description: "Designed a responsive Figma prototype for a curated wardrobe platform, focused on clean layouts, visual hierarchy, and trust-building elements like \"As seen in\" highlights and product galleries. Optimized the user flow from browsing to booking across mobile and desktop, with an emphasis on clarity, conversion, and brand personality.",
    image: "/uploads/project-3.jpg",
    isReversed: false
  }
  // You can add more projects here
];

// Animation component that triggers when element comes into view
const AnimatedSection = ({ children, delay = 0, direction = "up", className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Update the component signature to accept props
const ExperienceProjectsSection = ({ 
  showExperience = true, 
  showProjects = true 
}) => {
  return (
    <div className="w-full bg-white mt-16 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-23 right-0 w-[150px] sm:w-[180px] opacity-35">
        <img src="/uploads/flower.png" alt="Decorative Mandala" />
      </div>
      
      <div className="absolute top-[20%] left-0 sm:w-[15%] opacity-15">
        <img src="/uploads/mandala-rotated-1.png" alt="Connecting Mandala" />
      </div>
      
      {/* Work Experience Section */}
      {showExperience && (
        <AnimatedSection>
          <div id="experience"  className="mb-32">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">
              My <span className="text-custom-purple">Work Experience</span>
            </h2>
            
            {/* Experience Timeline Container */}
            <div className="max-w-6xl mx-auto">
              {experiences.map((experience, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <div 
                    className={`flex flex-col md:flex-row justify-between items-start ${
                      index !== 0 ? "-mt-[55px]" : "mb-14"
                    }`}
                  >
                    <div className="md:w-2/5 text-left mb-6 md:mb-0 pr-4">
                      <h3 className="text-2xl md:text-3xl font-semibold">{experience.company}</h3>
                      <p className="text-gray-600 text-lg">{experience.period}</p>
                    </div>
                    
                    <div className="flex flex-col items-center mx-2 md:mx-6">
                      <div className="w-16 h-16">
                        <img src="/uploads/experience.png" alt="Experience Icon" className="w-full h-full" />
                      </div>
                      {index !== experiences.length - 1 && (
                        <div className="w-[3px] h-[17rem] border-l-[3px] border-dashed border-black"></div>
                      )}
                    </div>
                    
                    <div className="md:w-2/5 text-left pl-4">
                      <h4 className="text-2xl md:text-3xl font-medium">{experience.title}</h4>
                      <p className="text-gray-600 text-lg mt-2">{experience.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Projects Section */}
      {showProjects && (
        <div id="projects" className="mt-16 mb-8 relative">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">
              Let's have a look at my <span className="text-custom-purple">Projects</span>
            </h2>
          </AnimatedSection>
          
          {/* Project Grid */}
          <div className="max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const isEven = index % 2 !== 0;
              const contentDirection = isEven ? "right" : "left";
              const imageDirection = isEven ? "left" : "right";
              
              return (
                <div 
                  key={index} 
                  className={`flex flex-col ${project.isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-12 mb-32`}
                >
                  <AnimatedSection direction={contentDirection} delay={0.2} className="lg:w-1/2">
                    <div className="w-full">
                      <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">{project.title}</h3>
                      <div className="bg-[#F7F7FD] rounded-xl shadow-sm p-8 border border-purple-100 hover:shadow-md transition-shadow">
                        <p className="text-gray-600 text-base leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection direction={imageDirection} delay={0.4} className="lg:w-1/2">
                    <div className="w-full h-[350px] rounded-xl overflow-hidden transform hover:scale-[1.01] transition-transform shadow-lg">
                      <img src={project.image} alt={`${project.title} Image`} className="w-full h-full object-cover" />
                    </div>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="absolute left-0 top-[80%] w-[180px] opacity-35">
        <img src="/uploads/half-sun.png" alt="Decorative Mandala" />
      </div>

      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>

      <div className="absolute bottom-[120px] right-0 w-[250px] opacity-35">
        <img src="/uploads/flower.png" alt="Decorative Mandala" className="w-full" />
      </div>  
    </div>
  );
};

export default ExperienceProjectsSection;