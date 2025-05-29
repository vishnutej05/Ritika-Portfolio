import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom animated component for sections
const AnimateOnScroll = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Enhanced staggered animation for skills grid with more pronounced pop effect
const StaggeredGrid = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      // Add a delay before starting the skill cards animation
      // This ensures About Me section animations complete first
      setTimeout(() => {
        controls.start("visible");
      }, 600); // 600ms delay before starting the skill animations
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.5, // Each card appears 0.5s after the previous one
            delayChildren: 0.3,   // Initial delay before first card
          }
        }
      }}
      className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 px-4"
    >
      {children}
    </motion.div>
  );
};

const AboutSection = () => {
  const skills = [
    'Figma',
    'User Research', 
    'Prototyping',
    'Wireframing',
    'Design Thinking',
    'Requirement Analysis'
  ];

  // Enhanced animation variants for skill cards with more pronounced "pop" effect
  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.5    // Each card's animation takes 0.5s
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(157, 138, 230, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-custom-black text-white relative overflow-hidden">
      {/* Purple decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 z-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img 
          src="/uploads/about-top-right.png" 
          alt="Purple decoration top right" 
          className="w-40 h-45 opacity-100"
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img 
          src="/uploads/about-bottom-left.png" 
          alt="Purple decoration bottom left" 
          className="w-40 h-45"
        />
      </motion.div>

      <div className="w-full py-10">
        {/* About Me Section */}
        <AnimateOnScroll className="mb-16 px-8">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About <span className="text-custom-purple">Me</span>
          </motion.h2>
          <motion.p 
            className="text-2xl lg:text-3xl leading-relaxed text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Aspiring UI/UX Designer who also loves mandala art, like you can see &gt;&lt; with a strong 
            foundation in design thinking and a keen eye for crafting user-centric, intuitive interfaces. 
            Experienced in user research, wire framing, and collaborating across teams to create 
            seamless and visually engaging digital experiences. Passionate about solving real-world 
            problems through thoughtful design and continuous iteration.
          </motion.p>
        </AnimateOnScroll>

        {/* My Skills Section */}
        <div className="px-0 mt-5">
          <AnimateOnScroll className="px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              My <span className="text-custom-purple">Skills</span>
            </h2>
          </AnimateOnScroll>
          
          <div className="w-full flex flex-col items-center">
            <StaggeredGrid>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="relative bg-[#2D2D2D] backdrop-blur-sm rounded-2xl py-7 px-4 border border-gray-700/50 hover:border-custom-purple/50 transition-all duration-300 group flex items-center justify-center min-h-[100px]"
                  variants={skillCardVariants}
                  whileHover="hover"
                >
                  {/* white decorative elements for each card */}
                  <div className="absolute top-0 left-0 z-10">
                    <img
                      src="/uploads/skills-top-left.png"
                      alt="white decoration"
                      className="w-10 h-10 opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 z-10">
                    <img
                      src="/uploads/skills-bottom-right.png"
                      alt="white decoration"
                      className="w-10 h-10 opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-medium text-center text-white group-hover:text-custom-purple transition-colors duration-300 leading-snug">
                    {skill}
                  </h3>
                </motion.div>
              ))}
            </StaggeredGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
