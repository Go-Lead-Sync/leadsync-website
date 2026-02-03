# LeadSync Website

A high-converting landing page for LeadSync - The #1 AI-powered lead management platform.

## 🚀 Features

- **Modern Design**: Dark glass-morphism aesthetic with LeadSync's purple/cyan gradient branding
- **Animated Hero**: Rotating job titles with smooth transitions
- **ROI Calculator**: Interactive calculator showing cost savings vs industry average
- **Comparison Section**: Side-by-side metrics highlighting LeadSync advantages
- **Feature Showcase**: 6 key features with detailed descriptions
- **Social Proof**: Testimonials section
- **Pricing Plans**: Three tiers (Starter, Pro, Enterprise)
- **FAQ Accordion**: Common questions with expandable answers
- **Fully Responsive**: Mobile-first design
- **Smooth Animations**: Framer Motion for scroll animations

## 🎯 Key Differentiators Highlighted

1. **Better AI**: Claude 4 vs standard AI models
2. **Lower Cost**: $77-197/mo vs industry average of $297/mo
3. **Higher Conversion**: 45-55% vs 30-40%
4. **Website Co-Pilot**: Intelligent website scraping (unique feature)
5. **Unlimited Capacity**: No lead limits

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Lucide React**: Beautiful icons

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to adjust the purple/cyan gradient:

```typescript
colors: {
  primary: {
    purple: '#8B5CF6',
    cyan: '#06B6D4',
  },
}
```

### Content
All content is in `src/app/page.tsx`. Update:
- Hero stats (Leads Handled, Leads Converted)
- Rotating job titles
- Feature descriptions
- Testimonials
- Pricing tiers
- FAQ items

### Metrics
Adjust comparison numbers in the Comparison component to match your actual data.

## 📱 Sections

1. **Navigation**: Sticky header with smooth scroll links
2. **Hero**: Animated headline with CTA
3. **Trust Badges**: Company logos placeholder
4. **Comparison**: 3-column comparison grid
5. **ROI Calculator**: Interactive savings calculator
6. **Features**: 6 feature cards with icons
7. **Testimonials**: Customer reviews
8. **Pricing**: 3-tier pricing table
9. **FAQ**: Expandable questions
10. **CTA**: Final conversion section
11. **Footer**: Links and legal

## 🎯 Conversion Optimizations

- Multiple CTAs throughout ("Build My FREE AI Agent")
- ROI calculator shows immediate value
- Side-by-side industry comparisons
- Social proof with testimonials
- 14-day free trial messaging
- "No credit card required" trust signals

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build the static site:
```bash
npm run build
```

Deploy the `.next` folder to any static hosting platform.

## 📊 Analytics Integration

Add analytics in `src/app/layout.tsx`:

```typescript
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />

// Or your preferred analytics tool
```

## 🔗 Integration Points

Ready to connect:
- Lead capture forms → Your backend/CRM
- Login button → Your app URL
- Pricing CTAs → Your checkout/signup flow
- Contact forms → Your email/support system

## 📝 Next Steps

1. **Add Real Images**: Replace placeholder mockups with actual LeadSync screenshots
2. **Connect Forms**: Wire up CTAs to your signup/contact backend
3. **Add Analytics**: Track conversions and optimize
4. **SEO Optimization**: Add meta tags, sitemap, robots.txt
5. **A/B Testing**: Test different headlines and CTAs

## 🎨 Design Notes

LeadSync design system:
- Dark background (#0a0a0f)
- Glass-morphism effects
- Purple to cyan gradient accents
- Large, bold typography
- Ample whitespace
- Smooth scroll animations
- AI Strategy Builder and Co-Pilot as key visual focal points

## 📞 Support

For questions about this website template, reach out to your development team.

---

Built with ❤️ for LeadSync
