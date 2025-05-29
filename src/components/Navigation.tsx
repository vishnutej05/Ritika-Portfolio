import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Services', 'Contact'];

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.toLowerCase());
      
      // Find which section is currently in view
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (e, item) => {
    e.preventDefault();
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(item.toLowerCase());
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
