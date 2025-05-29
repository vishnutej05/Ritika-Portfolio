
import React from 'react';

const Navigation = () => {
  const navItems = ['Home', 'About', 'Service', 'Resume', 'Project', 'Contact'];

  return (
    <nav className="fixed top-0.5 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-custom-black/95 backdrop-blur-sm rounded-full px-10 py-4 shadow-2xl">
        <ul className="flex items-center space-x-4">
          {navItems.map((item, index) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`
                  px-8 py-2 rounded-full text-base font-medium transition-all duration-300
                  ${index === 0 
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
