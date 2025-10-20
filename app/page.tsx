'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

export default function Home() {
  const philosophyPoints = [
    {
      icon: '🌱',
      title: 'Prakriti & Vikriti',
      description: 'Understanding your unique constitution (Prakriti) and current imbalances (Vikriti) to create personalized healing pathways.'
    },
    {
      icon: '⚖️',
      title: 'Health as Harmony',
      description: 'We believe true health is the harmony between mind, body, and spirit, achieved through balanced living and natural healing.'
    },
    {
      icon: '🌿',
      title: 'Nature Heals',
      description: 'Harnessing the power of authentic Ayurvedic herbs, lifestyle practices, and time-tested wisdom for sustainable wellness.'
    }
  ];

  const quickServices = [
    {
      title: 'Ayurvedic Consultation',
      description: 'Comprehensive pulse and tongue assessment to understand your unique constitution and current health needs.',
      imageSrc: '/assets/consultation.jpg',
      imageAlt: 'Ayurvedic consultation session',
      link: '/services'
    },
    {
      title: 'Detox & Rejuvenation',
      description: 'Gentle cleansing programs and Rasayana therapies to restore vitality and balance naturally.',
      imageSrc: '/assets/detox-week.jpg',
      imageAlt: 'Detox and rejuvenation therapy',
      link: '/services'
    },
    {
      title: 'Women\'s Health',
      description: 'Specialized care for menstrual health, PCOS, menopause, and hormonal balance using natural approaches.',
      imageSrc: '/assets/womens-health.jpg',
      imageAlt: 'Women\'s health consultation',
      link: '/services'
    },
    {
      title: 'Mind-Body Wellness',
      description: 'Holistic support for anxiety, sleep disorders, and stress through herbs, meditation, and lifestyle guidance.',
      imageSrc: '/assets/mind-body.jpg',
      imageAlt: 'Mind-body wellness session',
      link: '/services'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        backgroundImage="/assets/hero-bg.jpg"
        title="Illuminate with Ayurveda"
        subtitle="Ancient Wisdom • Modern Life"
        description="Discover your healthiest self – gently, naturally, and sustainably through authentic Ayurvedic healing in Aberdeen, Scotland."
        ctaText="Book Consultation"
        ctaLink="/contact"
        height="full"
      />

      {/* Core Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-800 mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              At Leora, we honor the ancient science of Ayurveda while making it accessible for modern life. 
              Every individual is unique, and so is their path to wellness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-leora-green-100 rounded-full flex items-center justify-center text-3xl group-hover:bg-leora-green-200 transition-colors duration-300">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-neutral-800">
                  {point.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-800 mb-6">
              Holistic Care Tailored to You
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
              From comprehensive consultations to specialized programs, discover how Ayurvedic wisdom 
              can transform your health and wellbeing.
            </p>
            <Button href="/services" variant="outline" size="lg">
              View All Services
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                link={service.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-leora-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-leora-green-100 mb-8 leading-relaxed">
              Take the first step towards balanced health with a personalized Ayurvedic consultation. 
              Available both online and in-person in Aberdeen, Scotland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="shadow-lg hover:shadow-xl"
              >
                Book Consultation
              </Button>
              <Button 
                href="/about" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-leora-green-500"
              >
                Learn About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-leora-gold-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">BAMS Qualified</h3>
              <p className="text-neutral-600 text-sm">Authentic Ayurvedic doctor with traditional training from India</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-leora-gold-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">Natural Healing</h3>
              <p className="text-neutral-600 text-sm">UK-registered herbs and time-tested natural therapies</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-leora-gold-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">Personalized Care</h3>
              <p className="text-neutral-600 text-sm">Tailored treatments based on your unique constitution</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
