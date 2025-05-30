import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceProjectsSection from '../components/ExperienceProjectsSection'; 
import ServicesScrollBanner from '@/components/ServicesScrollBanner';
import { motion } from 'framer-motion';

const Index = () => {
  // Add a smooth scroll behavior to the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  return (
    <motion.div 
      className="font-poppins"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceProjectsSection />
      <section id="services">
        <ServicesScrollBanner />
      </section>
      {/* Copyright Footer */}
      <motion.div 
        className="text-center text-gray-500 text-sm mt-2 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>© {new Date().getFullYear()} Ritika Bala. All rights reserved.</p>
      </motion.div>
    </motion.div>
  );
};

export default Index;
