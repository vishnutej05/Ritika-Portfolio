import React, { useEffect, useRef } from 'react';

const ServicesScrollBanner = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Calculate the total width needed
    let totalWidth = 0;
    const items = Array.from(scrollContainer.children) as HTMLElement[];
    items.forEach(item => {
      totalWidth += item.offsetWidth;
    });

    // Duplicate items to ensure continuous flow
    const cloneItems = () => {
      for (let i = 0; i < items.length; i++) {
        const clone = items[i].cloneNode(true);
        scrollContainer.appendChild(clone);
      }
    };
    
    // Clone items to ensure we have enough content
    cloneItems();
    cloneItems();

    // Animation variables
    let animationId: number;
    let position = 0;
    const speed = 1.2; // Controls scrolling speed
    
    // Animation function
    const animate = () => {
      position -= speed;
      
      // Reset position when we've scrolled one full screen width
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      
      scrollContainer.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ 
      height: '130px', // Increased height from 120px to 150px
      width: '100%',
      background: '#BCBCFF',
    }}>
      {/* Diagonal white strip - simple horizontal band now */}
      <div className="absolute w-full" style={{
        background: 'white',
        height: '75px', // Increased height of white band
        top: '29px', // Adjusted top position to center it
        zIndex: 1
      }}></div>
      
      {/* Scrolling content container - straight horizontal flow */}
      <div 
        className="flex h-full items-center justify-center relative px-4"
        style={{
          zIndex: 2
        }}
      >
        <div
          className="flex items-center whitespace-nowrap"
          ref={scrollContainerRef}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="inline-flex items-center mx-2" // Increased horizontal spacing
            >
              <span className="text-black text-3xl md:text-4xl font-medium">{service}</span>
              <div className="mx-5 inline-block" style={{ minWidth: '30px', minHeight: '30px' }}>
                <img 
                  src="/uploads/star.png"
                  alt="Star" 
                  width={30}
                  height={30}
                  className="md:w-9 md:h-9"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesScrollBanner;