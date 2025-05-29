import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Mandala */}
      <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none select-none">
        <img 
          src="/lovable-uploads/8f7e471a-1d3c-4ff4-b1a5-6bdc7a6e7010.png" 
          alt="Mandala Background" 
          className="w-[570px] h-[570px] object-contain opacity-100 blur-[2px]"
        />
      </div>  

      {/* Hello badge - smaller, above heading, with particle */}
      <div
        className="w-full flex justify-center relative z-20 animate-[slide-down_1.2s_ease-out_0.5s_both]"
        style={{ marginTop: '5.8rem' }} // Custom margin between mt-24 and mt-28
      >
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1 shadow-lg border border-black border-[2px] relative text-center">
          <span className="text-custom-black font-medium text-base">Hello!</span>
          {/* Decorative particle (top-right) */}
          <img 
            src="/lovable-uploads/c1e7dd18-8f9b-4bf3-8abb-55e831afc420.png" 
            alt="Decorative element" 
            className="absolute -top-5 -right-5 w-7 h-7 opacity-100"
          />
        </div>
      </div>

      {/* Main heading section */}
      <div className="container mx-auto px-6 relative z-10 mt-2">
        <div className="text-center relative animate-[slide-down_1.2s_ease-out_1s_both]">
          <h1 className="text-5xl lg:text-6xl font-normal text-custom-black leading-tight mb-4">
            I'm Ritika,
          </h1>
          <div className="relative inline-block">
            <h2 className="text-5xl lg:text-6xl font-normal text-custom-black leading-tight">
              UI/UX Designer
            </h2>
            {/* Purple squiggle/particle (bottom left of heading) */}
            <img 
              src="/lovable-uploads/8e86c49a-4aba-44e8-bb32-9fd30aa439b5.png" 
              alt="Decorative squiggle" 
              className="absolute -left-16 -bottom-4 w-16 h-16 opacity-70 pointer-events-none select-none"
            />
          </div>
        </div>
      </div>

      {/* Character image - perfectly centered at bottom */}
      <div
        className="absolute bottom-0 z-30 animate-[rise-from-bottom_1.5s_ease-out_1.5s_both]"
        style={{ left: '36%', transform: 'translateX(-55%)' }}
      >
        <img 
          src="/lovable-uploads/7b7efddc-574a-4169-8b86-533e84823bef.png" 
          alt="Character" 
          className="w-[430px] md:w-[430px] h-auto"
        />
      </div>

      {/* Quote and Rating section */}
      <div className="absolute inset-0 flex items-center justify-between px-8 z-20 pointer-events-none">
        {/* Quote section */}
        <div className="w-80 animate-[slide-right_1.2s_ease-out_2s_both] pointer-events-auto">
          <div className="flex flex-col items-start gap-4">
            <img 
              src="/lovable-uploads/deced0ec-f4d0-4be8-8a67-e7e016ebab52.png" 
              alt="Quote" 
              className="w-8 h-8 opacity-100"
            />
            <p className="text-custom-black text-base leading-relaxed font-medium ">
              My design philosophy is simple: 
              blend effortless user experience with seamlessly integrated, stunning visuals.
            </p>
          </div>
        </div>
        {/* Rating section */}
        <div className="w-100 animate-[slide-left_1.2s_ease-out_2s_both] text-right pointer-events-auto">
          <div className="flex justify-end mb-3">
            <img 
              src="/lovable-uploads/51c37acf-8d58-4e3d-8d80-f6da65f958b9.png" 
              alt="5 stars" 
              className="h-6 mr-3"
            />
          </div>
          <h3 className="text-[35px] font-bold text-custom-black">Rated 5/5</h3>
          <p className="text-gray-600 font-normal text-md">For User Experience</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
