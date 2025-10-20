import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ayurvedic Services',
  description: 'Comprehensive Ayurvedic services in Aberdeen including consultations, herbal medicine, women\'s health, detox programs, digestive wellness, and mind-body healing.',
  keywords: [
    'Ayurvedic consultation Aberdeen',
    'herbal medicine Scotland',
    'women\'s health Ayurveda',
    'detox programs Aberdeen',
    'digestive health Ayurveda',
    'mind-body wellness Scotland',
    'skin hair Ayurveda UK'
  ],
  openGraph: {
    title: 'Ayurvedic Services | Holistic Health Care in Aberdeen',
    description: 'Discover our comprehensive range of Ayurvedic services including consultations, herbal medicine, women\'s health, and specialized wellness programs.',
    images: ['/assets/services-bg.jpg'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
