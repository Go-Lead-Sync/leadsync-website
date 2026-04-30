'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  MessageSquare, 
  Calendar, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe, 
  Settings,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const SIGNUP_URL = 'https://app.goleadsyncs.com/signup';

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 panel-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              LeadSync
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]">Features</a>
            <a href="#comparison" className="text-gray-300 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]">Why LeadSync</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]">Pricing</a>
            <a href="#results" className="text-gray-300 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]">Results</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]">FAQ</a>
            <a
              href="https://app.goleadsyncs.com/"
              className="px-6 py-2 bg-gradient-primary rounded-[9px] shadow-glow-primary font-semibold hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
            >
              Login
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden panel-effect border-t border-hairline">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a onClick={closeMenu} href="#features" className="block py-2 text-gray-300">Features</a>
            <a onClick={closeMenu} href="#comparison" className="block py-2 text-gray-300">Why LeadSync</a>
            <a onClick={closeMenu} href="#pricing" className="block py-2 text-gray-300">Pricing</a>
            <a onClick={closeMenu} href="#results" className="block py-2 text-gray-300">Results</a>
            <a onClick={closeMenu} href="#faq" className="block py-2 text-gray-300">FAQ</a>
            <a
              href="https://app.goleadsyncs.com/"
              className="block w-full px-6 py-2 bg-gradient-primary rounded-[9px] shadow-glow-primary font-semibold mt-2 text-center"
              onClick={closeMenu}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Agencies', 'Coaches', 'Consultants', 'Events', 'Medical Practices', 'Real Estate', 'Law Firms', 'SaaS Companies', 'Financial Advisors', 'Home Services'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Stats Bar */}
        <div className="flex justify-center gap-8 mb-12 text-sm">
          <div>
            <div className="text-2xl font-bold text-white">2,500,000+</div>
            <div className="text-gray-400">Leads Handled</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">350,000+</div>
            <div className="text-gray-400">Leads Converted</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            The #1 AI Lead Manager for
          </h1>
          <div className="h-20 mb-8">
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              {roles[currentRole]}
            </motion.h2>
          </div>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Qualify instantly, fill your calendar, close more clients & never chase leads again.
          </p>

          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary rounded-[9px] shadow-glow-primary text-lg font-semibold hover:opacity-90 transition transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
          >
            Get My Lead-Qualifying Agent
          </a>
          
          <p className="text-gray-400 mt-4">14 days free, then plans start at $97 / month</p>
          <p className="text-gray-500 mt-2 text-sm">Takes 2 minutes &bull; No credit card &bull; Cancel anytime before day 14</p>

          {/* Trust Badges */}
          <div className="mt-16">
            <p className="text-gray-400 mb-6">Trusted by 8,000+ companies worldwide</p>
            <div className="flex justify-center gap-4 items-center flex-wrap">
              {['Agencies', 'Coaches', 'SaaS', 'Real Estate', 'Home Services'].map((label) => (
                <div key={label} className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10">
                  {label}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 items-center flex-wrap mt-6 opacity-60">
              {['Client One', 'Client Two', 'Client Three', 'Client Four', 'Client Five'].map((label) => (
                <div key={label} className="px-6 py-3 rounded-[9px] bg-white/5 text-gray-400 text-sm border border-white/10">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// How It Works
function HowItWorks() {
  const steps = [
    {
      title: 'Connect Your CRM',
      description: 'Plug into GoHighLevel in minutes and sync your leads automatically.'
    },
    {
      title: 'Train Your AI',
      description: 'Answer a few questions and your agent learns your offers and tone.'
    },
    {
      title: 'Book More Calls',
      description: 'Leads are qualified and booked automatically, 24/7.'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How LeadSync Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="glass-effect rounded-[14px] p-6">
              <div className="text-sm text-gray-400 mb-2">Step {index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Comparison Section
function Comparison() {
  return (
    <section id="comparison" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Outperforms Traditional Solutions
          </h2>
          <p className="text-xl text-gray-400">We will:</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Increase Conversions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-[14px] p-8"
          >
            <div className="text-6xl mb-4">01.</div>
            <h3 className="text-2xl font-bold mb-6">Increase conversions</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm mb-2">Industry average:</div>
                <div className="text-3xl font-bold text-red-400">2-5%</div>
              </div>

              <div>
                <div className="text-gray-400 text-sm mb-2">LeadSync average:</div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">35-55%</div>
              </div>
            </div>
          </motion.div>

          {/* Reduce Expenses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-[14px] p-8"
          >
            <div className="text-6xl mb-4">02.</div>
            <h3 className="text-2xl font-bold mb-6">Reduce expenses</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm mb-2">Industry average:</div>
                <div className="text-3xl font-bold text-red-400">$499/month</div>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm mb-2">LeadSync costs:</div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">From $97/month</div>
              </div>
            </div>
          </motion.div>

          {/* Maximize Capacity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-[14px] p-8"
          >
            <div className="text-6xl mb-4">03.</div>
            <h3 className="text-2xl font-bold mb-6">Maximize capacity</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm mb-2">Per SDR:</div>
                <div className="text-3xl font-bold text-gray-400">50-100 leads/day</div>
              </div>

              <div>
                <div className="text-gray-400 text-sm mb-2">LeadSync capacity:</div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">Unlimited, 24/7</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ROI Calculator
function ROICalculator() {
  const [leads, setLeads] = useState(500);
  const [dealValue, setDealValue] = useState(5000);

  const traditionalConversion = 0.30;
  const leadsyncConversion = 0.50;
  const traditionalCost = 297;
  const leadsyncCost = 77;

  const traditionalBookings = Math.floor(leads * traditionalConversion);
  const leadsyncBookings = Math.floor(leads * leadsyncConversion);
  const extraBookings = leadsyncBookings - traditionalBookings;
  
  const annualSavings = (traditionalCost - leadsyncCost) * 12;
  const extraRevenue = extraBookings * dealValue;

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-[20px] p-8 md:p-12"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Calculate Your ROI with LeadSync</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <label className="block text-gray-400 mb-2">Monthly Leads</label>
              <input
                type="number"
                value={leads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-[9px] px-4 py-3 text-white"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2">Average Deal Value</label>
              <input
                type="number"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-[9px] px-4 py-3 text-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-gray-400 mb-2">Annual Savings</div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ${annualSavings.toLocaleString('en-US')}
              </div>
              <div className="text-sm text-gray-400 mt-1">saved per year</div>
            </div>
            
            <div className="text-center">
              <div className="text-gray-400 mb-2">Extra Bookings/Month</div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                +{extraBookings}
              </div>
              <div className="text-sm text-gray-400 mt-1">more bookings</div>
            </div>
            
            <div className="text-center">
              <div className="text-gray-400 mb-2">Additional Revenue/Month</div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ${extraRevenue.toLocaleString('en-US')}
              </div>
              <div className="text-sm text-gray-400 mt-1">extra revenue</div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Save ${annualSavings.toLocaleString('en-US')}/year?</h3>
            <p className="text-gray-400 mb-6">Start your 14-day free trial and see the results for yourself</p>
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary rounded-[9px] shadow-glow-primary font-semibold hover:opacity-90 transition transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
            >
              Get My Lead-Qualifying Agent
            </a>
            <p className="text-gray-500 mt-3 text-sm">No credit card &bull; Cancel anytime before day 14</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" aria-hidden="true" />,
      title: 'Advanced AI Conversations',
      description: 'Powered by Claude 4, delivering human-like interactions that qualify and nurture leads 24/7.',
      points: [
        'Context-aware responses',
        'Natural conversation flow',
        'Handles objections intelligently'
      ]
    },
    {
      icon: <Calendar className="w-8 h-8" aria-hidden="true" />,
      title: 'Smart Calendar Integration',
      description: 'Seamlessly books appointments directly through conversational AI with real-time availability.',
      points: [
        'Real-time calendar sync',
        'Automated reminders',
        'Zero friction booking'
      ]
    },
    {
      icon: <Globe className="w-8 h-8" aria-hidden="true" />,
      title: 'Multi-Channel Support',
      description: 'Connect with leads across SMS, WhatsApp, Instagram, and Facebook Messenger.',
      points: [
        'Every channel connected',
        'Direct GHL integration',
        'Unified inbox'
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" aria-hidden="true" />,
      title: 'Advanced Analytics',
      description: 'Get actionable insights and real-time data to optimize your conversion rates.',
      points: [
        'Conversion tracking',
        'A/B split testing',
        'Revenue analytics'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" aria-hidden="true" />,
      title: 'Website Co-Pilot',
      description: 'Intelligent website scraping to understand your business and answer customer questions.',
      points: [
        'Automatic content analysis',
        'Product knowledge',
        'Custom responses'
      ]
    },
    {
      icon: <Settings className="w-8 h-8" aria-hidden="true" />,
      title: 'Custom Automation',
      description: 'Create custom workflows that update your CRM, add tags, and trigger actions automatically.',
      points: [
        'Workflow automation',
        'CRM updates',
        'Event triggers'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to Close More Deals
          </h2>
          <p className="text-xl text-gray-400">Powerful features that actually work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-[14px] p-8 hover:border-primary/40 transition"
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-[9px] flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Founder @GrowthAgency',
      image: 'SJ',
      text: 'We saw a 32% lift in qualified calls within 21 days. The AI handles objections better than any rep we trained.'
    },
    {
      name: 'Michael Chen',
      role: 'CEO @TechConsulting',
      image: 'MC',
      text: 'We were paying over $300/mo on other tools with mediocre results. LeadSync cut our costs in half and doubled our conversions. The AI conversations are remarkably natural.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director @ScaleUp',
      image: 'ER',
      text: 'We went from 18% to 44% lead-to-call in 4 weeks. Setup took under 10 minutes and the ROI was immediate.'
    }
  ];

  return (
    <section id="results" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-[14px] p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
const ZAR_RATE = 18.20;

type PricingPlan = {
  name: string;
  monthly: number;
  annual: number;
  featured?: boolean;
  badge?: string;
  limits: string[];
  features: string[];
  setupFee?: number;
  paystackMonthly: string;
  paystackAnnual: string;
  paystackSetup?: string;
  cta: string;
  ctaStyle: 'primary' | 'secondary';
};

const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    monthly: 97,
    annual: 81,
    limits: ['1 sub-account', '2 AI agents', '3 users per sub-account'],
    features: [
      'Full Flow Editor',
      'Knowledge base training',
      'AI Co-Pilot Builder',
      'Test Playground',
      'Basic analytics',
      'GHL integration',
    ],
    paystackMonthly: 'https://paystack.shop/pay/oy8wqg73g6',
    paystackAnnual: 'https://paystack.shop/pay/f9a3mdep1i',
    cta: 'Start Free Trial',
    ctaStyle: 'secondary',
  },
  {
    name: 'Pro',
    monthly: 297,
    annual: 248,
    featured: true,
    badge: 'Most popular',
    limits: ['5 sub-accounts', 'Unlimited AI agents', '10 users per sub-account'],
    features: [
      'Everything in Starter',
      'WhatsApp support',
      'Smart routing',
      'Advanced analytics',
      'Priority support',
    ],
    paystackMonthly: 'https://paystack.shop/pay/epykrgar98',
    paystackAnnual: 'https://paystack.shop/pay/bw2gq9va7o',
    cta: 'Start Free Trial',
    ctaStyle: 'primary',
  },
  {
    name: 'Launch Sync Unlimited',
    monthly: 497,
    annual: 415,
    limits: [
      'Unlimited Sub Accounts',
      'Unlimited AI agents',
      'Unlimited Users per sub-account',
    ],
    features: [
      'Everything in Pro',
      'Done-for-you agent building',
      'We build & launch your agent',
    ],
    setupFee: 997,
    paystackMonthly: 'https://paystack.shop/pay/q-u9-3nn30',
    paystackAnnual: 'https://paystack.shop/pay/0oz34zdhop',
    paystackSetup: 'https://paystack.shop/pay/5q0-ux5e-j',
    cta: 'Get Launch Sync',
    ctaStyle: 'secondary',
  },
];

function formatZAR(usd: number) {
  return `~R${(usd * ZAR_RATE).toLocaleString('en-ZA', { maximumFractionDigits: 0 })}`;
}

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">Choose the plan that fits your business</p>

          {/* 30-day money-back guarantee */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
              style={{ backgroundColor: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.3)', color: '#34d399' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              30-Day Money-Back Guarantee
            </span>
          </div>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium transition ${!annual ? 'text-white' : 'text-gray-400'}`}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual(!annual)}
            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
            style={{ backgroundColor: annual ? '#7C3AED' : 'rgba(255,255,255,0.2)' }}
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                annual ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium transition ${annual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            <span
              className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: '#EDE9FE', color: '#5B21B6' }}
            >
              Save 17%
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const price = annual ? plan.annual : plan.monthly;
            const yearlyTotal = plan.annual * 12;
            const yearlySavings = (plan.monthly - plan.annual) * 12;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-effect rounded-[14px] p-8 relative flex flex-col ${
                  plan.featured ? 'border-2 border-primary shadow-glow' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-gradient-primary shadow-glow-primary text-white">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-3 text-white">{plan.name}</h3>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-[26px] font-bold text-white">${price}</span>
                  <span className="text-sm text-gray-400 ml-1">/mo</span>
                </div>
                <div className="text-[12px] text-gray-500 mb-1">{formatZAR(price)}/mo at R{ZAR_RATE.toFixed(2)}/USD</div>
                {annual ? (
                  <div className="text-[11px] mb-6" style={{ color: '#c084fc' }}>
                    Billed ${yearlyTotal.toLocaleString()}/yr, save ${yearlySavings.toLocaleString()}/yr
                  </div>
                ) : (
                  <div className="text-[11px] mb-6" style={{ color: '#c084fc' }}>
                    Switch to annual to save ${yearlySavings.toLocaleString()}/yr
                  </div>
                )}

                {/* Limits */}
                <div className="mb-5">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">Limits</div>
                  <ul className="space-y-2">
                    {plan.limits.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-200">
                        <span aria-hidden="true" className="flex-shrink-0 mt-0.5 text-primary">&#10022;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mb-5" />

                {/* Features */}
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">Features</div>
                  <ul className="space-y-2">
                    {plan.features.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-200">
                        <span aria-hidden="true" className="flex-shrink-0 mt-0.5 text-primary">&#10022;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA pinned to bottom */}
                <div className="mt-auto">
                  <a
                    href={annual ? plan.paystackAnnual : plan.paystackMonthly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full px-6 py-3 rounded-[9px] font-semibold transition text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] ${
                      plan.ctaStyle === 'primary'
                        ? 'bg-gradient-primary shadow-glow-primary hover:opacity-90'
                        : 'bg-white/10 hover:bg-white/20 border border-hairline'
                    }`}
                  >
                    {plan.cta}
                  </a>

                  {plan.setupFee && (
                    <div className="mt-4 text-center">
                      <a
                        href={plan.paystackSetup}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-[11px] font-medium px-3 py-1 rounded-full hover:opacity-80 transition"
                        style={{ backgroundColor: 'rgba(237, 233, 254, 0.1)', color: '#c4b5fd' }}
                      >
                        One-time setup fee: ${plan.setupFee}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          {annual
            ? 'Annual plans billed once per year. Best value, save ~17%. 14-day free trial. Cancel anytime before day 14.'
            : 'Monthly billing, cancel anytime. 14-day free trial, no credit card required. Prices in USD; ZAR shown for reference at R18.20/USD.'}
        </p>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What makes LeadSync different from other tools?',
      answer: 'LeadSync combines Claude AI for human-like conversations with our AI Strategy Builder, which automatically creates and manages your automation workflows. Our Website Co-Pilot learns your business instantly without manual setup, and pricing starts at just $97/month, a fraction of what most comparable platforms charge.'
    },
    {
      question: 'How fast can I set up LeadSync?',
      answer: 'Most users are up and running in under 10 minutes. Simply connect your GoHighLevel account, configure your AI agents with our intuitive builder, and you\'re ready to start converting leads.'
    },
    {
      question: 'What CRMs do you integrate with?',
      answer: 'We currently offer native GoHighLevel integration with more CRM integrations launching soon. Our GHL integration is deeper than competitors, offering two-way sync and advanced automation capabilities.'
    },
    {
      question: 'Can I customize the AI conversations?',
      answer: 'Absolutely! You have full control over your AI agents\' personality, qualification questions, objection handling, and booking flow. Our strategy builder makes customization simple while our AI ensures natural conversations.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer email support on all plans, priority support on Pro, and dedicated account managers for Enterprise. Our team typically responds within hours, not days.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start. Cancel anytime before day 14.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <section id="faq" className="py-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Questions? We've Got Answers.</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-effect rounded-[14px] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-20 px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Lead Management?
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Join 8,000+ companies using LeadSync to close more deals
        </p>
        <button className="px-8 py-4 bg-gradient-primary rounded-[9px] shadow-glow-primary text-lg font-semibold hover:opacity-90 transition transform hover:scale-105">
          Start Your Free 14-Day Trial
        </button>
        <p className="text-gray-400 mt-4">No credit card required &bull; Cancel anytime before day 14</p>
      </motion.div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-hairline py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              LeadSync
            </div>
            <p className="text-gray-400 text-sm">
              The most advanced AI-powered lead management platform for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#results" className="hover:text-white transition">Results</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://www.linkedin.com/company/getleadsync" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="mailto:hello@goleadsyncs.com" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-hairline pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 LeadSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Comparison />
      <ROICalculator />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-40 md:hidden px-4">
        <a
          href={SIGNUP_URL}
          className="block w-full text-center px-6 py-3 bg-gradient-primary rounded-[9px] shadow-glow-primary font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
        >
          Get My Lead-Qualifying Agent
        </a>
      </div>
    </main>
  );
}





