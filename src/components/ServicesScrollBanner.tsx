import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesScrollBanner = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // List of services to display in the scrolling banner
  const services = [
    'UI Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'User Research',
    'Prototyping',
    'UX Design',
    'Web Design',
    'Visual Design',
    'Design Systems'
  ];

  // Animation for the component entry
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Scrolling animation effect - Use a simpler approach
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Animation variables
    let animationId: number;
    let position = 0;
    const speed = 1.2;
    
    // Animation function
    const animate = () => {
      position -= speed;
      
      // Reset position when we've scrolled too far
      const containerWidth = scrollContainer.scrollWidth / 3; // Divide by 3 because we have 3 sets of items
      if (Math.abs(position) >= containerWidth) {
        position = 0;
      }
      
      scrollContainer.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    // Start animation after a short delay to ensure rendering
    const timeoutId = setTimeout(() => {
      animate();
    }, 100);
    
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const bannerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={bannerVariants}
      className="relative overflow-hidden" 
      style={{ 
        height: '130px',
        width: '100%',
        background: '#BCBCFF',
      }}
    >
      {/*simple horizontal band now */}
      <motion.div 
        className="absolute w-full" 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.2 } }
        }}
        style={{
          background: 'white',
          height: '75px',
          top: '29px',
          zIndex: 1
        }}
      ></motion.div>
      
      {/* Scrolling content container - straight horizontal flow */}
      <div 
        className="flex h-full items-center justify-center relative px-2"
        style={{
          zIndex: 2
        }}
      >
        <div
          className="flex items-center whitespace-nowrap"
          ref={scrollContainerRef}
        >
          {/* First set of services */}
          {services.map((service, index) => (
            <motion.div 
              key={`service-1-${index}`}
              variants={itemVariants}
              className="inline-flex items-center mx-2 md:mx-2"
            >
              <span className="text-black text-2xl md:text-3xl font-medium">{service}</span>
              <div className="mx-2 inline-flex items-center justify-center">
                {/* Alternative solution with image */}
                <div className="inline-block" style={{ width: '24px', height: '24px', position: 'relative' }}>
                  <img 
                    src="/uploads/star.png"
                    alt="*"
                    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                    className="md:w-8 md:h-8"
                  />
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Second set of services (duplicate) */}
          {services.map((service, index) => (
            <motion.div 
              key={`service-2-${index}`}
              variants={itemVariants}
              className="inline-flex items-center mx-2 md:mx-2"
            >
              <span className="text-black text-2xl md:text-3xl font-medium">{service}</span>
              <div className="mx-2 inline-flex items-center justify-center">
                {/* Alternative solution with image */}
                <div className="inline-block" style={{ width: '24px', height: '24px', position: 'relative' }}>
                  <img 
                    src="/uploads/star.png"
                    alt="*"
                    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                    className="md:w-8 md:h-8"
                  />
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Third set of services (duplicate) */}
          {services.map((service, index) => (
            <motion.div 
              key={`service-3-${index}`}
              variants={itemVariants}
              className="inline-flex items-center mx-2 md:mx-2"
            >
              <span className="text-black text-2xl md:text-3xl font-medium">{service}</span>
              <div className="mx-2 inline-flex items-center justify-center">
                {/* Alternative solution with image */}
                <div className="inline-block" style={{ width: '24px', height: '24px', position: 'relative' }}>
                  <img 
                    src="/uploads/star.png"
                    alt="*"
                    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                    className="md:w-8 md:h-8"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesScrollBanner;