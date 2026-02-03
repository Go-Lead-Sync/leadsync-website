'use client';

import { useState } from 'react';
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

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              LeadSync
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#comparison" className="text-gray-300 hover:text-white transition">Why LeadSync</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
            <a href="#results" className="text-gray-300 hover:text-white transition">Results</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition">FAQ</a>
            <button className="px-6 py-2 bg-gradient-primary rounded-lg font-semibold hover:opacity-90 transition">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f] border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#features" className="block py-2 text-gray-300">Features</a>
            <a href="#comparison" className="block py-2 text-gray-300">Why LeadSync</a>
            <a href="#pricing" className="block py-2 text-gray-300">Pricing</a>
            <a href="#results" className="block py-2 text-gray-300">Results</a>
            <a href="#faq" className="block py-2 text-gray-300">FAQ</a>
            <button className="w-full px-6 py-2 bg-gradient-primary rounded-lg font-semibold mt-2">
              Login
            </button>
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

  useState(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  });

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

          <button className="px-8 py-4 bg-gradient-primary rounded-lg text-lg font-semibold hover:opacity-90 transition transform hover:scale-105">
            Build My FREE AI Agent
          </button>
          
          <p className="text-gray-400 mt-4">14 days free, then plans start at $77 / month</p>

          {/* Trust Badges */}
          <div className="mt-16">
            <p className="text-gray-400 mb-6">Trusted by 8,000+ companies worldwide</p>
            <div className="flex justify-center gap-8 items-center flex-wrap opacity-50">
              {/* Add company logos here */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Comparison Section
function Comparison() {
  return (
    <section id="comparison" className="py-20 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#151520]">
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
            className="glass-effect rounded-2xl p-8"
          >
            <div className="text-6xl mb-4">01.</div>
            <h3 className="text-2xl font-bold mb-6">Increase conversions</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm mb-2">Industry average:</div>
                <div className="text-3xl font-bold text-red-400">30-40%</div>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm mb-2">LeadSync average:</div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">45-55%</div>
              </div>
            </div>
          </motion.div>

          {/* Reduce Expenses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="text-6xl mb-4">02.</div>
            <h3 className="text-2xl font-bold mb-6">Reduce expenses</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm mb-2">Industry average:</div>
                <div className="text-3xl font-bold text-red-400">$297/month</div>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm mb-2">LeadSync costs:</div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">$77/month</div>
              </div>
            </div>
          </motion.div>

          {/* Maximize Capacity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="text-6xl mb-4">03.</div>
            <h3 className="text-2xl font-bold mb-6">Maximize capacity</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm mb-2">Traditional capacity:</div>
                <div className="text-3xl font-bold text-gray-400">1,000/leads per day</div>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm mb-2">LeadSync capacity:</div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">Unlimited</div>
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
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Calculate Your ROI with LeadSync</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <label className="block text-gray-400 mb-2">Monthly Leads</label>
              <input
                type="number"
                value={leads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2">Average Deal Value</label>
              <input
                type="number"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
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
            <button className="px-8 py-4 bg-gradient-primary rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-105">
              Build My FREE AI Agent
            </button>
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
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Advanced AI Conversations',
      description: 'Powered by Claude 4, delivering human-like interactions that qualify and nurture leads 24/7.',
      points: [
        'Context-aware responses',
        'Natural conversation flow',
        'Handles objections intelligently'
      ]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Smart Calendar Integration',
      description: 'Seamlessly books appointments directly through conversational AI with real-time availability.',
      points: [
        'Real-time calendar sync',
        'Automated reminders',
        'Zero friction booking'
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Channel Support',
      description: 'Connect with leads across SMS, WhatsApp, Instagram, and Facebook Messenger.',
      points: [
        'Every channel connected',
        'Direct GHL integration',
        'Unified inbox'
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Get actionable insights and real-time data to optimize your conversion rates.',
      points: [
        'Conversion tracking',
        'A/B split testing',
        'Revenue analytics'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Website Co-Pilot',
      description: 'Intelligent website scraping to understand your business and answer customer questions.',
      points: [
        'Automatic content analysis',
        'Product knowledge',
        'Custom responses'
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
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
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-[#151520] to-[#0a0a0f]">
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
              className="glass-effect rounded-2xl p-8 hover:border-purple-500/50 transition"
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
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
      image: '👩‍💼',
      text: 'LeadSync has completely transformed how we handle leads. The AI is incredibly smart and our conversion rates have doubled.'
    },
    {
      name: 'Michael Chen',
      role: 'CEO @TechConsulting',
      image: '👨‍💼',
      text: 'We were paying over $300/mo on other tools with mediocre results. LeadSync cut our costs in half and doubled our conversions. The AI conversations are remarkably natural.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director @ScaleUp',
      image: '👩',
      text: 'Best investment we made this year. Setup was quick and the ROI came within the first month. Highly recommend!'
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
              className="glass-effect rounded-2xl p-8"
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
function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#151520]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">Choose the plan that fits your business</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <div className="text-5xl font-bold mb-6">
              $77<span className="text-2xl text-gray-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>1 Sub-Account</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>5 AI Agents</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Basic Analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Email Support</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition">
              Start Free Trial
            </button>
          </motion.div>

          {/* Pro - Most Popular */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-2xl p-8 border-2 border-purple-500 relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-primary px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="text-5xl font-bold mb-6">
              $197<span className="text-2xl text-gray-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Unlimited Sub-Accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Unlimited AI Agents</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Advanced Analytics & A/B Testing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Priority Support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Website Co-Pilot</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-gradient-primary rounded-lg font-semibold hover:opacity-90 transition">
              Start Free Trial
            </button>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <div className="text-5xl font-bold mb-6">
              Custom
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Done-For-You Setup</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Dedicated Account Manager</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Custom Integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>White Label Options</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition">
              Contact Sales
            </button>
          </motion.div>
        </div>
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
      answer: 'LeadSync combines Claude AI for human-like conversations with our AI Strategy Builder, which automatically creates and manages your automation workflows. Our Website Co-Pilot learns your business instantly without manual setup, and pricing starts at just $77/month — a fraction of what most comparable platforms charge.'
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
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start. Experience the difference yourself before committing.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
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
              className="glass-effect rounded-xl overflow-hidden"
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
    <section className="py-20 px-4 bg-gradient-to-b from-[#151520] to-[#0a0a0f]">
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
        <button className="px-8 py-4 bg-gradient-primary rounded-lg text-lg font-semibold hover:opacity-90 transition transform hover:scale-105">
          Start Your Free 14-Day Trial
        </button>
        <p className="text-gray-400 mt-4">No credit card required • Cancel anytime</p>
      </motion.div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-4">
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
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 LeadSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Comparison />
      <ROICalculator />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
