import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './Button';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  showCta?: boolean;
  height?: 'sm' | 'md' | 'lg' | 'full';
  overlay?: 'light' | 'dark' | 'green';
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaLink = "/contact",
  showCta = true,
  height = 'lg',
  overlay = 'dark',
}) => {
  const heightClasses = {
    sm: 'h-96',
    md: 'h-[500px]',
    lg: 'h-[600px]',
    full: 'h-screen',
  };

  const overlayClasses = {
    light: 'bg-white/60',
    dark: 'bg-black/50',
    green: 'bg-leora-green-500/70',
  };

  const textColorClasses = {
    light: 'text-neutral-800',
    dark: 'text-white',
    green: 'text-white',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-sm sm:text-base font-medium mb-4 tracking-wide ${textColorClasses[overlay]} opacity-90`}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight ${textColorClasses[overlay]}`}
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${textColorClasses[overlay]} opacity-90`}
            >
              {description}
            </motion.p>
          )}
          
          {showCta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                href={ctaLink}
                size="lg"
                variant={overlay === 'light' ? 'primary' : 'secondary'}
                className="shadow-lg hover:shadow-xl"
              >
                {ctaText}
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-6 border-2 border-current rounded-full ${textColorClasses[overlay]} opacity-70`}
        >
          <div className={`w-1 h-1 ${overlay === 'light' ? 'bg-neutral-800' : 'bg-white'} rounded-full mx-auto mt-2`}></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
