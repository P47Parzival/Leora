import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signature Programs',
  description: 'Transformative Ayurvedic wellness programs including Leora Detox Week, Rasayana rejuvenation, women\'s balance, and mindful living coaching in Aberdeen, Scotland.',
  keywords: [
    'Ayurveda detox program Aberdeen',
    'Rasayana rejuvenation Scotland',
    'women\'s balance program',
    'mindful living coaching',
    'wellness programs Aberdeen',
    'Ayurvedic lifestyle programs'
  ],
  openGraph: {
    title: 'Signature Ayurvedic Programs | Transformative Wellness Journeys',
    description: 'Join our signature wellness programs designed to restore balance, vitality, and harmony through authentic Ayurvedic practices.',
    images: ['/assets/programs-bg.jpg'],
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
