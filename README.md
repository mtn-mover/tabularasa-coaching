# Tabula Rasa Coaching Website

Professional 1:1 coaching website for Karen Florence, CPC, CPRWC.

## 🎯 Overview

This is the official website for Tabula Rasa Coaching - professional coaching services focused on sustainable change through the integration of technical and adaptive approaches. Built with modern web technologies using the design system from TRC Training Academy.

### 🌟 Key Features

- **Professional Design**: Clean, modern interface with TRC Academy design system
- **Accessible Typography**: Large, readable fonts with high contrast
- **Responsive Layout**: Seamless experience across all devices
- **1:1 Coaching Focus**: Executive, Professional Development, and Personal Transformation coaching
- **Contact Form**: Easy consultation booking system
- **SEO Optimized**: Comprehensive meta tags and structured data

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Local Development Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
tabularasa-coaching/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Contact form page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── src/
│   └── components/
│       ├── Header.tsx        # Navigation header
│       └── Footer.tsx        # Site footer
├── public/
│   └── images/               # Static images (to be added)
├── package.json              # Dependencies and scripts
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🛠 Technology Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Font**: Inter (optimized for readability)

## 📝 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎨 Design System

### Colors
- **Primary Blue**: TRC Blue (#4f46e5 - #312e81)
- **Accent Gold**: TRC Gold (#f59e0b - #78350f)
- **Neutral Gray**: TRC Gray scale
- **Professional Orange**: (#f97316 - #c2410c)
- **Teal**: (#14b8a6)

### Typography
- **Font Family**: Inter (sans-serif)
- **Base Size**: 16px for optimal readability
- **Heading Scale**: Responsive sizing for different screens

## 📄 Pages

### Homepage (/)
- Hero Section with tagline
- About Karen Florence section with credentials
- Coaching Philosophy (3 pillars)
- Services (Executive, Professional Development, Personal Transformation)
- Client Testimonials
- Training Academy Teaser (minimal)
- Final CTA Section

### Contact Page (/contact)
- Contact form with:
  - Name, Email, Phone
  - Service Interest dropdown
  - Goals/Objectives textarea
  - Additional message
- Contact information cards
- Success message handling

## 🖼️ Images Needed

To complete the website, add the following images to `public/images/`:

1. **Hero Background**: Professional coaching session image
2. **Karen Florence Photo**: Professional headshot
3. **Final CTA Background**: Inspiring landscape/mountain image

Recommended image sizes:
- Hero: 1920x1080px (landscape)
- Karen Photo: 800x800px (square)
- CTA Background: 1920x1080px (landscape)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Deploy automatically

### Environment Variables

No environment variables required for basic functionality. Optional:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form Email (for future backend integration)
CONTACT_EMAIL_TO=karen@tabularasacoaching.com
```

## 📞 Contact

Tabula Rasa Coaching
- Website: [tabularasacoaching.com](https://tabularasacoaching.com)
- Email: karen@tabularasacoaching.com
- Phone: +1 (610) 228-4145

## 🙏 Acknowledgments

- Design system adapted from TRC Training Academy
- Built with ❤️ for professional coaching excellence
- All content in English as specified

---

© 2025 Tabula Rasa Coaching. All rights reserved.
