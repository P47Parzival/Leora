import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  link,
  delay = 0,
}) => {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-leora-green-500/10 group-hover:bg-leora-green-500/20 transition-colors duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-3 text-neutral-800 group-hover:text-leora-green-500 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        {link && (
          <div className="flex items-center text-leora-green-500 text-sm font-medium group-hover:text-leora-green-600 transition-colors duration-200">
            Learn More
            <svg 
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <Link href={link} className="block focus:outline-none focus:ring-2 focus:ring-leora-green-500 focus:ring-offset-2 rounded-lg">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ServiceCard;
