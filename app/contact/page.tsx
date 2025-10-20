'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Hero from '@/components/Hero';
import Button from '@/components/Button';

// Since this is a client component, metadata is handled in layout or separate metadata file

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  preferredContactMethod: 'email' | 'phone';
  consultationType: 'online' | 'in-person' | 'either';
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const services = [
    'Ayurvedic Consultation',
    'Herbal Medicine & Supplements',
    'Mind-Body Wellness',
    'Detox & Rejuvenation',
    'Women\'s Health & Hormonal Balance',
    'Digestive Health & Metabolic Balance',
    'Skin & Hair Wellness',
    'Leora Detox Week Program',
    'Rejuvenate with Rasayana Program',
    'Ayurveda for Women\'s Balance Program',
    'Mindful Living Coaching Program',
    'General Inquiry'
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // For now, we'll just log the form data and simulate a successful submission
      console.log('Form submission data:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Integrate with email service (e.g., EmailJS)
      // Example API integration:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      // 
      // if (!response.ok) throw new Error('Failed to send message');
      
      // For demo purposes, we'll show success
      setSubmitStatus('success');
      reset();
      
      // Note: In production, you would integrate with:
      // - EmailJS (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
      // - Formspree (process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT)
      // - Custom API endpoint with email service
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        backgroundImage="/assets/contact-bg.jpg"
        title="Ready to Begin Your Journey?"
        subtitle="Get in Touch"
        description="Take the first step towards balanced health and wellbeing. We're here to guide you on your personalized healing journey."
        showCta={false}
        height="md"
        overlay="dark"
      />

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-6">
                Book Your Consultation
              </h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Fill out the form below and we&apos;ll get back to you within 24 hours to discuss 
                your health goals and schedule your personalized consultation.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-leora-green-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-leora-green-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email address"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-leora-green-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-leora-green-500 focus:border-transparent transition-colors duration-200"
                    aria-invalid={errors.service ? 'true' : 'false'}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Consultation Type */}
                <div>
                  <fieldset>
                    <legend className="block text-sm font-medium text-neutral-700 mb-3">
                      Preferred Consultation Type
                    </legend>
                    <div className="space-y-2">
                      {[
                        { value: 'either', label: 'Either online or in-person' },
                        { value: 'online', label: 'Online consultation' },
                        { value: 'in-person', label: 'In-person (Aberdeen)' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            value={option.value}
                            {...register('consultationType')}
                            className="h-4 w-4 text-leora-green-500 focus:ring-leora-green-500 border-neutral-300"
                          />
                          <span className="ml-2 text-sm text-neutral-700">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Please enter a message' })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-leora-green-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Tell us about your health goals, any specific concerns, or questions you have..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                      ✓ Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      ✗ There was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-6">
                Get in Touch
              </h2>

              {/* Contact Details */}
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-leora-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Location</h3>
                    <p className="text-neutral-600">
                      Leora Ayurveda Wellness Clinic<br />
                      Aberdeen, Scotland, UK
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-leora-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-neutral-600">
                      <a 
                        href="tel:+447378686559" 
                        className="hover:text-leora-green-500 transition-colors duration-200"
                      >
                        +44 7378 686 559
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-leora-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Website</h3>
                    <p className="text-neutral-600">
                      <a 
                        href="https://www.leoraayurveda.co.uk" 
                        className="hover:text-leora-green-500 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.leoraayurveda.co.uk
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-leora-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Hours</h3>
                    <div className="text-neutral-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Types */}
              <div className="bg-leora-green-50 rounded-lg p-6 mb-8">
                <h3 className="font-serif font-semibold text-xl mb-4 text-neutral-800">
                  Consultation Options
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-leora-green-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium text-neutral-800">Online Consultations</h4>
                      <p className="text-sm text-neutral-600">
                        Convenient video consultations available worldwide. 
                        Perfect for follow-ups and ongoing support.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-leora-green-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium text-neutral-800">In-Person Consultations</h4>
                      <p className="text-sm text-neutral-600">
                        Traditional in-person consultations available in Aberdeen 
                        for comprehensive pulse diagnosis and assessment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-serif font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/LeoraAyurveda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-leora-green-500 text-white rounded-full flex items-center justify-center hover:bg-leora-green-600 transition-colors duration-200"
                    aria-label="Follow us on Instagram"
                  >
                    <span className="text-lg">📷</span>
                  </a>
                  <a
                    href="https://facebook.com/LeoraAyurveda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-leora-green-500 text-white rounded-full flex items-center justify-center hover:bg-leora-green-600 transition-colors duration-200"
                    aria-label="Follow us on Facebook"
                  >
                    <span className="text-lg">📘</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-6">
              Find Us in Aberdeen
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Located in the heart of Aberdeen, Scotland, our clinic provides a peaceful 
              sanctuary for your healing journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full h-96 rounded-lg overflow-hidden shadow-lg"
          >
            {/* Google Maps Embed - Static for now */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54948.470719094944!2d-2.1488894!3d57.1497167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48840e4b43b3b2b9%3A0x3b3c4c7b5e4f8c2a!2sAberdeen%2C%20UK!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Leora Ayurveda Wellness Clinic Location in Aberdeen, Scotland"
            />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-leora-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Your Wellness Journey Starts Here
            </h2>
            <p className="text-xl text-leora-green-100 mb-8 leading-relaxed">
              Don&apos;t wait to start feeling better. Book your personalized Ayurvedic 
              consultation today and take the first step towards optimal health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="tel:+447378686559" 
                variant="secondary" 
                size="lg"
                className="shadow-lg hover:shadow-xl"
              >
                Call Now: +44 7378 686 559
              </Button>
              <Button 
                href="/about" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-leora-green-500"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
