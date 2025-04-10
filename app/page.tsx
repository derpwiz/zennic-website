'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FileUp, Clock, Shield, FileText, FileOutput, 
  TrendingUp, ChevronDown, ChevronUp, ArrowRight 
} from 'lucide-react';
import { 
  HERO_SECTION, 
  FEATURES, 
  SOCIAL_PROOF, 
  FAQ_ITEMS, 
  WAITLIST,
  SITE_CONFIG
} from './constants';

// Icon mapping for dynamic rendering
const iconMap = {
  FileUp,
  Clock,
  Shield,
  FileText,
  FileOutput,
  TrendingUp,
};

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Submit the form data to Buttondown via fetch
    fetch('https://buttondown.com/api/emails/embed-subscribe/zennic', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => {
      console.log('Submission response:', response);
      // Show success message
      setIsSubmitted(true);
      // Reset form
      setEmail('');
    })
    .catch(error => {
      console.error('Submission error:', error);
      // Could add error handling here
    });
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
                {HERO_SECTION.headline}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                {HERO_SECTION.subheader}
              </p>
              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center"
              >
                {HERO_SECTION.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* MacBook Mockup */}
              <div className="relative w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-2xl transform -rotate-1">
                <div className="absolute top-0 left-0 w-full h-6 bg-gray-300 dark:bg-gray-600 flex items-center px-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="mt-6 p-4 h-full bg-white dark:bg-gray-800">
                  <div className="h-full flex flex-col">
                    <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg mb-3">
                      <h3 className="text-sm font-medium text-primary-900 dark:text-primary-300">SEC Filing Summary</h3>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-3">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                        <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                        <div className="w-2/3 h-2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                        <div className="w-5/6 h-2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                        <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                        <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                        <div className="w-5/6 h-2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features for Financial Clarity
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              zennic transforms complex financial documents into actionable insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="bg-primary-50 dark:bg-primary-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="h-6 w-6 text-primary-600 dark:text-primary-400" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose zennic?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Save time and gain deeper insights with our innovative approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Boost Productivity
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 mt-1 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">Reduce analysis time by up to 80%</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 mt-1 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">Focus on insights, not data collection</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 mt-1 mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">Make faster, more informed decisions</p>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative aspect-video bg-gray-200 dark:bg-gray-600 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-600 border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Financial Professionals
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See what industry experts are saying about zennic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {SOCIAL_PROOF.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl font-bold text-primary-600 dark:text-primary-400">
                      {item.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{item.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about zennic
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-left font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {item.question}
                  {activeAccordion === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-b-lg">
                    <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-primary-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {WAITLIST.headline}
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                {WAITLIST.subheader}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
                <span className="inline-block px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white font-medium rounded-full text-sm mb-4">
                  {isSubmitted ? 'Thanks!' : 'Join Our Waitlist'}
                </span>
                
                {isSubmitted ? (
                  <div className="text-center py-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Thanks for subscribing!</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Please check your email to confirm your subscription.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary-600 dark:text-primary-400 underline text-sm"
                    >
                      Sign up another email
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="embeddable-buttondown-form"
                  >
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-300"
                      />
                    </div>
                    <input type="hidden" value="1" name="embed" />
                    <button
                      type="submit"
                      className="w-full btn-primary py-3 rounded-lg transition-all duration-300"
                    >
                      Subscribe
                    </button>
                    <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
                      <a href="https://buttondown.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                        Powered by Buttondown
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {SITE_CONFIG.copyright}
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
