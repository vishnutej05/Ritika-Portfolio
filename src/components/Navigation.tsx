import React, { useState, useEffect } from 'react';

const Navigation = () => {
  // Update to match the ACTUAL order of sections in your Index.tsx
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'contact', 'Services'];

  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Get all sections and their positions
      const sectionPositions = navItems.map(item => {
        const section = document.getElementById(item.toLowerCase());
        if (!section) return { id: item.toLowerCase(), top: 0, bottom: 0 };
        
        const rect = section.getBoundingClientRect();
        return {
          id: item.toLowerCase(),
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height
        };
      });
      
      // Find the section that occupies most of the viewport
      const viewportHeight = window.innerHeight;
      const viewportMiddle = viewportHeight / 2;
      
      // Sort sections by how close they are to the middle of the viewport
      const sortedSections = [...sectionPositions].sort((a, b) => {
        const aDistance = Math.abs((a.top + a.bottom) / 2 - viewportMiddle);
        const bDistance = Math.abs((b.top + b.bottom) / 2 - viewportMiddle);
        return aDistance - bDistance;
      });
      
      // Special case for the bottom of the page to highlight Contact
      const scrollPosition = window.scrollY;
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // If we're near the bottom of the page, activate Contact section
      if (scrollPosition + windowHeight > documentHeight - 100) {
        setActiveSection('contact');
        return;
      }
      
      // For Services section which might be small, give it special treatment
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const servicesRect = servicesSection.getBoundingClientRect();
        // More aggressive detection for Services section
        if (servicesRect.top < viewportHeight * 0.8 && servicesRect.bottom > viewportHeight * 0.2) {
          setActiveSection('services');
          return;
        }
      }
      
      // Otherwise use the closest section to middle
      if (sortedSections.length > 0 && sortedSections[0].id) {
        setActiveSection(sortedSections[0].id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Run once on mount to set initial active section
    setTimeout(handleScroll, 100); // Small delay to ensure DOM is fully loaded
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);
  
  const handleNavClick = (e, item) => {
    e.preventDefault();
    const sectionId = item.toLowerCase();
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Add offset for fixed navbar
      const navbarHeight = 80;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
      
      // Immediately set active section when clicking
      setActiveSection(sectionId);
    } else {
      console.warn(`Section with id "${sectionId}" not found`);
    }
  };

  return (
    <nav className="fixed top-0.5 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-custom-black/95 backdrop-blur-sm rounded-full px-2 py-4 shadow-2xl">
        <ul className="flex items-center space-x-4">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`
                  px-8 py-2 rounded-full text-base font-medium transition-all duration-300
                  ${activeSection === item.toLowerCase()
                    ? 'bg-custom-purple text-custom-black shadow-md' 
                    : 'text-custom-white hover:bg-custom-purple/20 hover:text-custom-purple'
                  }
                `}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
