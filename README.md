# Leora Ayurveda Wellness Clinic Website

A modern, responsive, and SEO-optimized static website built with Next.js 14, TypeScript, and Tailwind CSS for Leora Ayurveda Wellness Clinic in Aberdeen, Scotland.

## 🌿 About

This website represents Leora Ayurveda Wellness Clinic, a holistic healing space that brings ancient Ayurvedic science to modern life. The site showcases authentic Ayurvedic services, signature wellness programs, and provides easy booking for consultations both online and in-person.

## ✨ Features

- **Fully Responsive**: Mobile-first design optimized for all devices
- **SEO Optimized**: Complete meta tags, structured data, Open Graph tags
- **Static Generation**: Built for fast loading and optimal performance
- **Accessibility**: ARIA labels, keyboard navigation, high contrast
- **Modern Design**: Clean, earthy aesthetic with custom color palette
- **Interactive Elements**: Smooth animations with Framer Motion
- **Contact Forms**: React Hook Form integration with validation
- **Multi-page Structure**: Home, About, Services, Programs, Contact

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom theme
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Fonts**: Google Fonts (Playfair Display, Open Sans)
- **Build**: Static export ready

## 🎨 Design System

### Color Palette
- **Primary Green**: `#4A7C59` - Main brand color
- **Light Green**: `#A8CABA` - Secondary green
- **Gold Accent**: `#D4A574` - Accent color for buttons/highlights
- **Warm Neutral**: `#F5F5F5` - Background color
- **Text Colors**: `#2C2C2C` (dark), `#6B7280` (light)

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Open Sans (sans-serif)

## 📁 Project Structure

```
leora-wellness/
├── app/                    # Next.js App Router pages
│   ├── about/
│   │   ├── layout.tsx     # About page metadata
│   │   └── page.tsx       # About page component
│   ├── contact/
│   │   ├── layout.tsx     # Contact page metadata
│   │   └── page.tsx       # Contact form & info
│   ├── programs/
│   │   └── page.tsx       # Signature programs
│   ├── services/
│   │   └── page.tsx       # All 7 services
│   ├── globals.css        # Global styles & Tailwind config
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx          # Home page
│   └── sitemap.ts        # Auto-generated sitemap
├── components/            # Reusable React components
│   ├── Button.tsx        # Reusable button component
│   ├── Footer.tsx        # Site footer
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section component
│   ├── ProgramCard.tsx   # Program display cards
│   └── ServiceCard.tsx   # Service display cards
├── public/
│   ├── assets/           # Images and media files
│   └── robots.txt        # SEO robots file
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd leora-wellness
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add sample images**
   
   Replace placeholder images in `/public/assets/` with actual images:
   - `hero-bg.jpg` - Hero background (1920x1080px)
   - `services-bg.jpg` - Services page background
   - `programs-bg.jpg` - Programs page background
   - `contact-bg.jpg` - Contact page background
   - `consultation.jpg` - Consultation service image
   - `detox-week.jpg` - Detox program image
   - And other images as listed in `/public/assets/README.md`

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

### Build for Production

```bash
# Build static site
npm run build

# The built files will be in the 'out' directory
# Ready for deployment to any static hosting service
```

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action
- Core philosophy (Prakriti/Vikriti, Health as Harmony, Nature Heals)
- Service previews (4 main services)
- Trust indicators (BAMS qualified, natural healing, personalized care)

### About Page (`/about`)
- Clinic story and mission
- Detailed philosophy explanation
- Founder bio (Dr. Leora with BAMS qualification)
- "Why Choose Leora" section with 6 key points

### Services Page (`/services`)
- Comprehensive list of 7 services:
  - Ayurvedic Consultation
  - Herbal Medicine & Supplements
  - Mind-Body Wellness
  - Detox & Rejuvenation
  - Women's Health & Hormonal Balance
  - Digestive Health & Metabolic Balance
  - Skin & Hair Wellness
- Service process explanation
- FAQ section

### Programs Page (`/programs`)
- 4 signature programs:
  - Leora Detox Week (7 days)
  - Rejuvenate with Rasayana (21 days)
  - Ayurveda for Women's Balance (8 weeks)
  - Mindful Living Coaching (12 weeks)
- Program benefits and success stories

### Contact Page (`/contact`)
- Contact form with validation
- Clinic details (Aberdeen, Scotland)
- Google Maps integration
- Online and in-person consultation options

## 🔧 Configuration

### Environment Variables (Optional)
For future API integrations, create `.env.local`:

```env
# Email service integration (for contact forms)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics (optional)
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_id

# Site verification codes
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code
```

### Customization

1. **Colors**: Edit custom colors in `app/globals.css` under the `:root` section
2. **Content**: Update service descriptions, program details, and contact information in respective page files
3. **Images**: Replace all placeholder images in `/public/assets/`
4. **SEO**: Update metadata in `app/layout.tsx` and individual page layouts

## 📊 SEO Features

- **Structured Data**: Schema.org markup for local business
- **Meta Tags**: Complete title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Image Alt Text**: Descriptive alt text for all images
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🎯 Performance Features

- **Static Generation**: Pre-built pages for fast loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Compression**: Gzip compression enabled
- **Caching**: Optimal caching headers

## 🔒 Security Features

- **Security Headers**: XSS protection, frame options, content type options
- **No Server**: Static site eliminates server vulnerabilities
- **Form Validation**: Client-side and server-side validation ready

## 🚀 Deployment

This site is ready for deployment to any static hosting service:

- **Netlify**: Connect repository, set build command to `npm run build`
- **Vercel**: Automatic deployment with git integration
- **GitHub Pages**: Build to `out` folder and deploy
- **AWS S3**: Upload `out` folder contents
- **Any CDN**: Static files ready for distribution

### Build Commands
```bash
npm run build    # Build static site
npm run start    # Preview built site locally
npm run lint     # Check code quality
```

## 📞 Contact Information

**Leora Ayurveda Wellness Clinic**
- **Location**: Aberdeen, Scotland, UK
- **Phone**: +44 7378 686 559
- **Website**: www.leoraayurveda.co.uk
- **Social**: @LeoraAyurveda (Instagram & Facebook)

## 📝 License

This project is built for Leora Ayurveda Wellness Clinic. All content and branding belong to the clinic.

## 🤝 Contributing

For updates or modifications:
1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request with description

## 📚 Additional Notes

- **Mobile-First**: Site is optimized for mobile devices primarily
- **Offline Ready**: Static generation allows for offline functionality
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Accessibility**: WCAG 2.1 AA compliant where possible

---

Built with ❤️ for holistic wellness and authentic Ayurvedic healing.