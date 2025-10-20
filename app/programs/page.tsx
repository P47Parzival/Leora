'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ProgramCard from '@/components/ProgramCard';
import Button from '@/components/Button';

// Metadata is handled in layout.tsx for client components

export default function Programs() {
  const programs = [
    {
      title: 'Leora Detox Week',
      description: 'A gentle 7-day cleansing program that eliminates toxins while nourishing your body. Includes personalized meal plans, herbal support, daily guidance, and lifestyle practices to restore natural balance and energy.',
      duration: '7 Days',
      imageSrc: '/assets/detox-week.jpg',
      imageAlt: 'Leora Detox Week program with natural cleansing methods',
      highlights: [
        'Personalized detox meal plans',
        'Daily herbal support protocols',
        'Guided morning & evening routines',
        'Gentle elimination practices',
        'Energy restoration techniques'
      ],
      price: 'From £297',
      includes: [
        'Initial consultation (60 mins)',
        '7-day personalized meal plan',
        'Custom herbal formulations',
        'Daily check-in support',
        'Recipe guide & shopping lists',
        'Post-detox integration plan'
      ]
    },
    {
      title: 'Rejuvenate with Rasayana',
      description: 'A transformative 21-day vitality restoration program using traditional Rasayana (rejuvenative) therapies. Designed to rebuild tissues, restore energy, and enhance longevity through authentic Ayurvedic practices.',
      duration: '21 Days',
      imageSrc: '/assets/rasayana-program.jpg',
      imageAlt: 'Rasayana rejuvenation program for vitality restoration',
      highlights: [
        'Traditional Rasayana formulations',
        'Tissue regeneration protocols',
        'Energy & immunity boosting',
        'Longevity enhancement practices',
        'Constitutional strengthening'
      ],
      price: 'From £597',
      includes: [
        'Comprehensive initial assessment',
        '21-day structured protocol',
        'Premium Rasayana formulations',
        'Weekly progress consultations',
        'Lifestyle & dietary guidelines',
        'Long-term maintenance plan'
      ]
    },
    {
      title: 'Ayurveda for Women\'s Balance',
      description: 'A comprehensive program addressing hormonal harmony and emotional wellbeing through food as medicine, targeted herbs, and lifestyle practices specifically designed for women\'s unique health needs.',
      duration: '8 Weeks',
      imageSrc: '/assets/womens-balance.jpg',
      imageAlt: 'Women\'s hormonal balance program using Ayurvedic principles',
      highlights: [
        'Hormonal balance restoration',
        'Cycle regulation support',
        'Emotional wellness practices',
        'Nutritional therapy for women',
        'Stress & anxiety management'
      ],
      price: 'From £897',
      includes: [
        'Detailed hormonal assessment',
        '8-week structured program',
        'Women-specific herb protocols',
        'Bi-weekly consultations',
        'Cycle-syncing nutrition guide',
        'Emotional wellness toolkit'
      ]
    },
    {
      title: 'Mindful Living Coaching',
      description: 'Learn to seamlessly integrate Ayurvedic principles into your daily UK lifestyle. This program combines ancient wisdom with modern practicality for sustainable wellness and mindful living.',
      duration: '12 Weeks',
      imageSrc: '/assets/mindful-living.jpg',
      imageAlt: 'Mindful living coaching program integrating Ayurveda into modern life',
      highlights: [
        'Daily routine optimization',
        'Seasonal living practices',
        'Mindfulness & meditation',
        'Work-life balance strategies',
        'Sustainable lifestyle changes'
      ],
      price: 'From £1,197',
      includes: [
        'Lifestyle assessment & planning',
        '12-week coaching program',
        'Weekly 1-on-1 sessions',
        'Meditation & mindfulness training',
        'Seasonal adjustment protocols',
        'Lifetime integration toolkit'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        backgroundImage="/assets/programs-bg.jpg"
        title="Signature Leora Programs"
        subtitle="Transformative Journeys"
        description="Comprehensive wellness programs designed to restore balance, vitality, and harmony through authentic Ayurvedic practices tailored for modern life."
        ctaText="Explore Programs"
        ctaLink="#programs"
        height="md"
        overlay="green"
      />

      {/* Programs Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-6">
              Structured Pathways to Wellness
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              Our signature programs combine traditional Ayurvedic wisdom with practical, 
              achievable steps that fit into your modern lifestyle. Each program is designed 
              to create lasting transformation, not quick fixes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-leora-green-500 text-lg">✓</span>
                <span>Evidence-Based Protocols</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-leora-green-500 text-lg">✓</span>
                <span>Ongoing Support & Guidance</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-leora-green-500 text-lg">✓</span>
                <span>Sustainable Lifestyle Changes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <ProgramCard
                  title={program.title}
                  description={program.description}
                  duration={program.duration}
                  imageSrc={program.imageSrc}
                  imageAlt={program.imageAlt}
                  ctaText="Enroll Now"
                  ctaLink="/contact"
                />
                
                {/* Program Details */}
                <div className="px-6 pb-6">
                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-leora-green-500">
                      {program.price}
                    </span>
                    <span className="text-sm text-neutral-500">
                      Payment plans available
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-serif font-semibold text-lg mb-3 text-neutral-800">
                      Program Highlights:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {program.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                          <span className="text-leora-green-500 text-sm">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What's Included */}
                  <div className="mb-6">
                    <h4 className="font-serif font-semibold text-lg mb-3 text-neutral-800">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-2">
                      {program.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-sm text-neutral-600">
                          <span className="text-leora-green-500 text-sm mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Button 
                      href="/contact" 
                      variant="primary" 
                      size="md"
                      className="w-full"
                    >
                      Enroll in {program.title}
                    </Button>
                    <Button 
                      href="/contact" 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
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
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Our structured programs provide comprehensive support and proven protocols 
              for lasting health transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Targeted Results',
                description: 'Each program is designed with specific health goals and measurable outcomes in mind.'
              },
              {
                icon: '👥',
                title: 'Expert Guidance',
                description: 'Direct access to BAMS-qualified practitioner throughout your entire journey.'
              },
              {
                icon: '📋',
                title: 'Structured Approach',
                description: 'Clear protocols and step-by-step guidance eliminate guesswork and confusion.'
              },
              {
                icon: '🔄',
                title: 'Sustainable Changes',
                description: 'Focus on creating lasting lifestyle changes rather than temporary quick fixes.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-leora-green-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-neutral-800">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-leora-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-6">
              Real Transformations
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Hear from clients who have experienced lasting health improvements through our programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                program: 'Detox Week',
                quote: 'I felt completely renewed after the detox program. My energy levels are better than they\'ve been in years.',
                result: 'Increased energy & better digestion'
              },
              {
                name: 'Emma L.',
                program: 'Women\'s Balance',
                quote: 'Finally found relief from irregular cycles and mood swings. The holistic approach really works.',
                result: 'Hormonal balance & emotional stability'
              },
              {
                name: 'James R.',
                program: 'Mindful Living',
                quote: 'Learning to integrate Ayurveda into my busy schedule has transformed how I approach wellness.',
                result: 'Better work-life balance & stress management'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-serif font-semibold text-lg text-neutral-800">
                      {testimonial.name}
                    </h4>
                    <span className="text-sm text-leora-green-500 font-medium">
                      {testimonial.program}
                    </span>
                  </div>
                  <p className="text-sm text-leora-gold-500 font-medium mb-3">
                    {testimonial.result}
                  </p>
                </div>
                <blockquote className="text-neutral-600 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
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
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-leora-green-100 mb-8 leading-relaxed">
              Choose the program that resonates with your health goals and begin your 
              journey to lasting wellness today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </Button>
              <Button 
                href="/services" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-leora-green-500"
              >
                View All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
