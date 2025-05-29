import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Mandala */}
      <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none select-none">
        <img 
          src="/uploads/bg-mandala.png" 
          alt="Mandala Background" 
          className="w-[570px] h-[570px] object-contain opacity-100 blur-[2px]"
        />
      </div>  

      {/* Hello badge - smaller, above heading, with particle */}
      <div
        className="w-full flex justify-center relative z-20 animate-[slide-down_1.2s_ease-out_0.5s_both]"
        style={{ marginTop: '5.8rem' }} // Custom margin between mt-24 and mt-28
      >
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1 shadow-lg border-black border-[2px] relative text-center">
          <span className="text-custom-black font-medium text-base">Hello!</span>
          {/* Decorative particle (top-right) */}
          <img 
            src="/uploads/hello.png" 
            alt="Decorative element" 
            className="absolute -top-6 -right-6 w-7 h-7 opacity-100"
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
              src="/uploads/heading.png" 
              alt="Decorative squiggle" 
              className="absolute -left-16 -bottom-10 w-16 h-16 opacity-100 pointer-events-none select-none"
            />
          </div>
        </div>
      </div>

      {/* Quote and Rating section */}
      <div className="absolute inset-0 flex items-center justify-between px-8 z-20 pointer-events-none">
        {/* Quote section */}
        <div className="w-80 animate-[slide-right_1.2s_ease-out_2s_both] pointer-events-auto">
          <div className="flex flex-col items-start gap-4">
            <img 
              src="/uploads/quote.png" 
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
              src="/uploads/rating.png" 
              alt="5 stars" 
              className="h-7 mr-3"
            />
          </div>
          <h3 className="text-[35px] font-bold text-custom-black">Rated 5/5</h3>
          <p className="text-gray-600 font-normal text-md">For User Experience</p>
        </div>
      </div>

      {/* Character image - pops up last after everything else */}
      <div
        className="absolute bottom-0 z-30 animate-[rise-from-bottom_1.5s_ease-out_3s_both] opacity-0"
        style={{ left: '36%', transform: 'translateX(-55%)' }}
      >
        <img 
          src="/uploads/ghibli.png" 
          alt="Character" 
          className="w-[430px] md:w-[430px] h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
