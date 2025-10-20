import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  delay?: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  duration,
  imageSrc,
  imageAlt,
  ctaText = "Enroll Now",
  ctaLink = "/contact",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-leora-gold-200 text-neutral-800 px-3 py-1 rounded-full text-xs font-medium">
            {duration}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-3 text-neutral-800">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        <Link
          href={ctaLink}
          className="inline-flex items-center justify-center w-full bg-leora-green-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-leora-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-leora-green-500 focus:ring-offset-2"
        >
          {ctaText}
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
