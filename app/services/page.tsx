'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

// Metadata is handled in layout.tsx for client components

export default function Services() {
  const services = [
    {
      title: 'Ayurvedic Consultation',
      description: 'Comprehensive assessment including traditional pulse diagnosis, tongue examination, and dosha analysis. Receive personalized diet plans, lifestyle recommendations, and herbal prescriptions tailored to your unique constitution.',
      imageSrc: '/assets/consultation.jpg',
      imageAlt: 'Ayurvedic consultation with pulse diagnosis and traditional assessment',
      features: [
        'Pulse and tongue diagnosis',
        'Dosha constitution assessment',
        'Personalized diet plan',
        'Lifestyle recommendations',
        'Herbal medicine prescriptions'
      ]
    },
    {
      title: 'Herbal Medicine & Supplements',
      description: 'Authentic Ayurvedic herbs and formulations sourced from UK-registered suppliers. Custom herbal blends created specifically for your health needs and constitution.',
      imageSrc: '/assets/herbal-medicine.jpg',
      imageAlt: 'Ayurvedic herbs and natural supplements',
      features: [
        'UK-registered authentic herbs',
        'Custom herbal formulations',
        'Traditional preparation methods',
        'Quality assured supplements',
        'Ongoing monitoring and adjustments'
      ]
    },
    {
      title: 'Mind-Body Wellness',
      description: 'Holistic approach to mental and emotional health using Ayurvedic principles. Support for anxiety, sleep disorders, stress management through herbs, meditation, and lifestyle modifications.',
      imageSrc: '/assets/mind-body.jpg',
      imageAlt: 'Mind-body wellness session with meditation and relaxation techniques',
      features: [
        'Anxiety and stress management',
        'Sleep disorder support',
        'Meditation guidance',
        'Breathing techniques (Pranayama)',
        'Emotional balance restoration'
      ]
    },
    {
      title: 'Detox & Rejuvenation',
      description: 'Gentle cleansing programs and Rasayana (rejuvenative) therapies designed to eliminate toxins and restore vitality. Customized detox plans that work with your lifestyle.',
      imageSrc: '/assets/detox-week.jpg',
      imageAlt: 'Detox and rejuvenation therapy with natural cleansing methods',
      features: [
        'Gentle detoxification programs',
        'Rasayana rejuvenative therapies',
        'Customized cleansing plans',
        'Nutritional support',
        'Energy restoration protocols'
      ]
    },
    {
      title: 'Women\'s Health & Hormonal Balance',
      description: 'Specialized care for women\'s unique health needs including menstrual irregularities, PCOS, menopause symptoms, and postnatal support using natural Ayurvedic approaches.',
      imageSrc: '/assets/womens-health.jpg',
      imageAlt: 'Women\'s health consultation focusing on hormonal balance and wellness',
      features: [
        'Menstrual health support',
        'PCOS management',
        'Menopause symptom relief',
        'Fertility enhancement',
        'Postnatal care and recovery'
      ]
    },
    {
      title: 'Digestive Health & Metabolic Balance',
      description: 'Comprehensive digestive wellness programs for IBS, acid reflux, and metabolic conditions like diabetes and thyroid disorders. Focus on strengthening Agni (digestive fire).',
      imageSrc: '/assets/digestive-health.jpg',
      imageAlt: 'Digestive health consultation with focus on metabolic balance',
      features: [
        'IBS and digestive disorder support',
        'Diabetes management',
        'Thyroid condition care',
        'Agni (digestive fire) strengthening',
        'Metabolic balance restoration'
      ]
    },
    {
      title: 'Skin & Hair Wellness',
      description: 'Natural solutions for skin conditions and hair health combining internal treatments with external therapies. Address root causes rather than just symptoms.',
      imageSrc: '/assets/skin-hair.jpg',
      imageAlt: 'Natural skin and hair care treatments using Ayurvedic principles',
      features: [
        'Skin condition treatment',
        'Hair health restoration',
        'Internal-external therapy combination',
        'Natural skincare guidance',
        'Constitutional skin analysis'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        backgroundImage="/assets/services-bg.jpg"
        title="Holistic Ayurvedic Care Tailored to You"
        subtitle="Comprehensive Services"
        description="From traditional consultations to specialized programs, discover how authentic Ayurvedic medicine can transform your health and wellbeing."
        ctaText="Book Consultation"
        ctaLink="/contact"
        height="md"
        overlay="green"
      />

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-6">
              Personalized Healing for Every Need
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              Our comprehensive range of Ayurvedic services addresses the root causes of health imbalances, 
              not just symptoms. Each treatment is carefully tailored to your unique constitution and current health needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-leora-green-500 text-lg">✓</span>
                <span>Traditional Diagnosis Methods</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-leora-green-500 text-lg">✓</span>
                <span>UK-Registered Herbs</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-leora-green-500 text-lg">✓</span>
                <span>Personalized Treatment Plans</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                />
                
                {/* Service Features */}
                <div className="px-6 pb-6">
                  <h4 className="font-serif font-semibold text-lg mb-3 text-neutral-800">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                        <span className="text-leora-green-500 text-sm">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button 
                      href="/contact" 
                      variant="primary" 
                      size="sm"
                      className="w-full"
                    >
                      Book This Service
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-6">
              Your Healing Journey
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Understanding what to expect during your Ayurvedic consultation and treatment process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Comprehensive assessment including pulse diagnosis, tongue examination, and detailed health history.'
              },
              {
                step: '02',
                title: 'Constitution Analysis',
                description: 'Determine your unique Prakriti (constitution) and identify current Vikriti (imbalances).'
              },
              {
                step: '03',
                title: 'Treatment Plan',
                description: 'Receive personalized recommendations for diet, lifestyle, herbs, and therapies.'
              },
              {
                step: '04',
                title: 'Follow-up Care',
                description: 'Regular monitoring and adjustments to ensure optimal progress and lasting results.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-leora-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-neutral-800">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-leora-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: 'How long is an initial consultation?',
                answer: 'Initial consultations typically last 60-90 minutes to allow time for comprehensive assessment, pulse diagnosis, and detailed discussion of your health history and goals.'
              },
              {
                question: 'Are the herbs safe and regulated?',
                answer: 'Yes, all our herbal medicines are sourced from UK-registered suppliers and meet strict quality standards. We only use authentic, tested herbs that comply with UK regulations.'
              },
              {
                question: 'Can Ayurveda help with chronic conditions?',
                answer: 'Ayurveda can be very effective for managing chronic conditions by addressing root causes rather than just symptoms. We work alongside your existing healthcare providers when needed.'
              },
              {
                question: 'Do you offer online consultations?',
                answer: 'Yes, we offer both online and in-person consultations in Aberdeen. Online consultations are just as effective for most Ayurvedic assessments and ongoing support.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="font-serif font-semibold text-lg mb-3 text-neutral-800">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-xl text-leora-green-100 mb-8 leading-relaxed">
              Book your personalized Ayurvedic consultation today and discover 
              the natural path to optimal health and wellbeing.
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
                href="/programs" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-leora-green-500"
              >
                View Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
