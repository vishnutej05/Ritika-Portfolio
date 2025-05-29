
import React from 'react';

const AboutSection = () => {
  const skills = [
    'Figma',
    'User Research', 
    'Prototyping',
    'Wireframing',
    'Design Thinking',
    'Requirement Analysis'
  ];

  return (
    <div className="min-h-screen bg-custom-black text-white relative overflow-hidden flex items-center">
      {/* Purple decorative elements */}
      <div className="absolute top-8 right-8 z-10">
        <img 
          src="/lovable-uploads/3bff67ae-1813-44c4-bf13-3a2a16f74fd8.png" 
          alt="Purple decoration top right" 
          className="w-32 h-32 opacity-70"
        />
      </div>
      
      <div className="absolute bottom-8 left-8 z-10">
        <img 
          src="/lovable-uploads/c3b72709-c9f8-4939-b703-d6e317317917.png" 
          alt="Purple decoration bottom left" 
          className="w-32 h-32 opacity-70"
        />
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* About Me Section */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            About <span className="text-custom-purple">Me</span>
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-4xl text-gray-300">
            Aspiring UI/UX Designer (who also loves mandala art, like you can see &gt;&lt;) with a strong 
            foundation in design thinking and a keen eye for crafting user-centric, intuitive interfaces. 
            Experienced in user research, wire framing, and collaborating across teams to create 
            seamless and visually engaging digital experiences. Passionate about solving real-world 
            problems through thoughtful design and continuous iteration.
          </p>
        </div>

        {/* My Skills Section */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            My <span className="text-custom-purple">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-custom-purple/50 transition-all duration-300 group"
              >
                {/* Purple decorative elements for each card */}
                <div className="absolute -top-2 -right-2 z-10">
                  <img 
                    src="/lovable-uploads/3bff67ae-1813-44c4-bf13-3a2a16f74fd8.png" 
                    alt="Purple decoration" 
                    className="w-8 h-8 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                
                <div className="absolute -bottom-2 -left-2 z-10">
                  <img 
                    src="/lovable-uploads/c3b72709-c9f8-4939-b703-d6e317317917.png" 
                    alt="Purple decoration" 
                    className="w-8 h-8 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>

                {/* White/Black decorative elements for each card */}
                <div className="absolute -top-2 -left-2 z-10">
                  <img 
                    src="/lovable-uploads/27a61506-4678-48b8-a7ed-2efed1543a8d.png" 
                    alt="White decoration" 
                    className="w-6 h-6 opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  />
                </div>
                
                <div className="absolute -bottom-2 -right-2 z-10">
                  <img 
                    src="/lovable-uploads/9e97f7b2-3233-49ef-9e1c-8b9d75d23042.png" 
                    alt="Black decoration" 
                    className="w-6 h-6 opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  />
                </div>

                {/* Mandala pattern in each card */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <img 
                    src="/lovable-uploads/8f7e471a-1d3c-4ff4-b1a5-6bdc7a6e7010.png" 
                    alt="Mandala pattern" 
                    className="w-12 h-12"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-center text-white group-hover:text-custom-purple transition-colors duration-300">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
