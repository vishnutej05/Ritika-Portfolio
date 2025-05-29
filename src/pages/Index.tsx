
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceProjectsSection from '../components/ExperienceProjectsSection'; 
import ServicesScrollBanner from '@/components/ServicesScrollBanner';

const Index = () => {
  return (
    <div className="font-poppins">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceProjectsSection />
      <ServicesScrollBanner />
      {/* Copyright Footer */}
        <div className="text-center text-gray-500 text-sm mt-2">
          <p>© {new Date().getFullYear()} Ritika Bala. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Index;
