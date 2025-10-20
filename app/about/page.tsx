'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Button from '@/components/Button';

// Metadata is handled in layout.tsx for client components

export default function About() {
  const whyChoosePoints = [
    {
      title: 'Authentic BAMS Doctor',
      description: 'Trained in traditional Ayurvedic medicine with Bachelor of Ayurvedic Medicine and Surgery (BAMS) qualification from India.',
      icon: '🎓'
    },
    {
      title: 'Personalized Care',
      description: 'Every treatment plan is uniquely crafted based on your individual constitution, lifestyle, and health goals.',
      icon: '💚'
    },
    {
      title: 'Integrative Approach',
      description: 'Combining ancient Ayurvedic wisdom with modern understanding for comprehensive, effective healing.',
      icon: '🔗'
    },
    {
      title: 'Natural Healing',
      description: 'Focus on gentle, sustainable healing using UK-registered herbs, dietary guidance, and lifestyle modifications.',
      icon: '🌿'
    },
    {
      title: 'Chronic Condition Support',
      description: 'Specialized expertise in managing long-term health conditions through holistic Ayurvedic approaches.',
      icon: '⚕️'
    },
    {
      title: 'Mind-Body Balance',
      description: 'Understanding the deep connection between mental and physical health for complete wellness.',
      icon: '⚖️'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        backgroundImage="/assets/image.png"
        title="Our Story"
        subtitle="Bringing Ancient Wisdom to Modern Scotland"
        description="At Leora, we believe that true wellness begins with balance – a harmony between your unique constitution and your daily life."
        showCta={false}
        height="md"
      />

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl sm:text-3xl font-serif italic text-neutral-700 mb-8 leading-relaxed">
              &quot;True wellness begins with balance – understanding that each person is unique, 
              and nature holds the keys to healing.&quot;
            </blockquote>
            <p className="text-lg text-neutral-600 leading-relaxed">
              This philosophy guides everything we do at Leora Ayurveda Wellness Clinic, 
              where ancient Ayurvedic science meets modern life in Aberdeen, Scotland.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Philosophy */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-6">
                Understanding Vikriti & Balance
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  In Ayurveda, <strong>Vikriti</strong> represents the current state of imbalance in your body and mind – 
                  the deviations from your natural, healthy constitution. Unlike one-size-fits-all approaches, 
                  we recognize that each person&apos;s imbalances are as unique as their fingerprint.
                </p>
                <p>
                  At Leora, we take time to understand your individual <strong>Prakriti</strong> (natural constitution) 
                  and identify current imbalances through traditional pulse diagnosis, tongue assessment, 
                  and comprehensive lifestyle evaluation.
                </p>
                <p>
                  Our approach honors the Ayurvedic principle that <strong>true health is harmony</strong> – 
                  not merely the absence of disease, but a state of vibrant balance between mind, body, and spirit.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/philosophy-image.jpg"
                  alt="Ayurvedic philosophy illustration showing balance and harmony"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/founder-photo.jpg"
                  alt="Dr. Leora - Founder of Leora Ayurveda Wellness Clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-6">
                Meet Dr. Leora
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  <strong>Dr. Leora</strong> brings authentic Ayurvedic wisdom to Scotland with her 
                  <strong> Bachelor of Ayurvedic Medicine and Surgery (BAMS)</strong> qualification 
                  earned through rigorous traditional training in India.
                </p>
                <p>
                  Her journey began with a deep belief that <strong>true wellness begins with understanding 
                  each person&apos;s unique constitution</strong> and creating personalized pathways to health. 
                  This philosophy led her to establish Leora Ayurveda Wellness Clinic in Aberdeen, 
                  where she combines time-tested Ayurvedic principles with practical solutions for modern living.
                </p>
                <p>
                  Dr. Leora specializes in <strong>women&apos;s health, digestive wellness, mind-body balance, 
                  and chronic condition management</strong>, always approaching each client with the 
                  understanding that healing is a collaborative journey between practitioner and patient.
                </p>
                <blockquote className="border-l-4 border-leora-green-500 pl-6 italic text-lg">
                  &quot;I believe that nature provides everything we need for healing. 
                  My role is to help you discover your unique path to wellness.&quot;
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Leora */}
      <section className="py-20 bg-leora-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-800 mb-6">
              Why Choose Leora?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We combine authentic Ayurvedic knowledge with genuine care, 
              creating a healing experience that honors both tradition and your individual needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-leora-green-100 rounded-full flex items-center justify-center text-xl">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-3 text-neutral-800">
                      {point.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-leora-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🤝
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Trust</h3>
                <p className="text-neutral-600 text-sm">Building honest, transparent relationships with every client</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-leora-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🌱
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Authenticity</h3>
                <p className="text-neutral-600 text-sm">Staying true to traditional Ayurvedic principles and practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-leora-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  💚
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Compassion</h3>
                <p className="text-neutral-600 text-sm">Approaching every healing journey with empathy and understanding</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-leora-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Ready to Discover Your Path to Wellness?
            </h2>
            <p className="text-xl text-leora-green-100 mb-8 leading-relaxed">
              Let&apos;s work together to understand your unique constitution and create 
              a personalized plan for your optimal health and wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="shadow-lg hover:shadow-xl"
              >
                Book Your Consultation
              </Button>
              <Button 
                href="/services" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-leora-green-500"
              >
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
