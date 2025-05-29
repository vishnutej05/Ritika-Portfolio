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
    <div className="min-h-screen bg-custom-black text-white relative overflow-hidden">
      {/* Purple decorative elements */}
      <div className="absolute top-0 right-0 z-10">
        <img 
          src="/uploads/about-top-right.png" 
          alt="Purple decoration top right" 
          className="w-40 h-45 opacity-70"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 z-10">
        <img 
          src="/uploads/about-bottom-left.png" 
          alt="Purple decoration bottom left" 
          className="w-40 h-45 opacity-100"
        />
      </div>

      <div className="w-full py-10">
        {/* About Me Section */}
        <div className="mb-16 px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            About <span className="text-custom-purple">Me</span>
          </h2>
          <p className="text-2xl lg:text-3xl leading-relaxed text-gray-300">
            Aspiring UI/UX Designer who also loves mandala art, like you can see &gt;&lt; with a strong 
            foundation in design thinking and a keen eye for crafting user-centric, intuitive interfaces. 
            Experienced in user research, wire framing, and collaborating across teams to create 
            seamless and visually engaging digital experiences. Passionate about solving real-world 
            problems through thoughtful design and continuous iteration.
          </p>
        </div>

        {/* My Skills Section */}
        <div className="px-0 mt-5">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 px-8">
            My <span className="text-custom-purple">Skills</span>
          </h2>
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 px-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="relative bg-[#2D2D2D] backdrop-blur-sm rounded-2xl py-7 px-4 border border-gray-700/50 hover:border-custom-purple/50 transition-all duration-300 group flex items-center justify-center min-h-[100px]"
                >
                  {/* Purple decorative elements for each card */}
                  <div className="absolute top-0 left-0 z-10">
                    <img
                      src="/uploads/skills-top-left.png"
                      alt="Purple decoration"
                      className="w-10 h-10 opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 z-10">
                    <img
                      src="/uploads/skills-bottom-right.png"
                      alt="Purple decoration"
                      className="w-10 h-10 opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-medium text-center text-white group-hover:text-custom-purple transition-colors duration-300 leading-snug">
                    {skill}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
