import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Book your Ayurvedic consultation with Leora Wellness Clinic in Aberdeen, Scotland. Available online and in-person. Call +44 7378 686 559 or fill out our contact form today.',
  keywords: [
    'book Ayurveda consultation Aberdeen',
    'contact Leora Wellness',
    'Ayurvedic doctor Aberdeen booking',
    'online Ayurveda consultation UK',
    'holistic health Aberdeen contact'
  ],
  openGraph: {
    title: 'Contact Leora Ayurveda Wellness Clinic | Book Your Consultation',
    description: 'Ready to start your healing journey? Book your personalized Ayurvedic consultation today. Available online and in-person in Aberdeen, Scotland.',
    images: ['/assets/contact-bg.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
