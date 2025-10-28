'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'IT Infrastructure Setup', href: '/services/it-infrastructure-setup', description: 'Complete infrastructure solutions' },
    { name: 'Cloud Migration', href: '/services/cloud-migration-services', description: 'Seamless cloud transitions' },
    { name: 'Network Security', href: '/services/network-security-solutions', description: 'Advanced security solutions' },
    { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business modernization' },
  ]

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare', description: 'HIPAA compliant solutions' },
    { name: 'Finance', href: '/industries/finance', description: 'Financial sector expertise' },
    { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Industrial automation' },
    { name: 'Education', href: '/industries/education', description: 'Educational technology' },
  ]

  const MegaMenuDropdown = ({ items, title }: { items: any[], title: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.15 }}
      className="fixed left-0 right-0 top-16 bg-white shadow-professional-xl border-t border-border-light"
    >
      <div className="container-professional py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Link
                href={item.href}
                className="block p-3 rounded-lg hover:bg-secondary-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-text-primary mb-2 group-hover:text-primary-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-text-muted line-clamp-2">
                  {item.description}
                </p>
                <ArrowRight className="w-4 h-4 text-primary-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 relative ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-professional-lg' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="container-professional">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-heading-4 font-bold text-text-primary group-hover:text-primary-600 transition-colors">
              UniSpark Innovation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-body font-medium text-text-secondary hover:text-primary-600 transition-colors duration-200"
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className="text-body font-medium text-text-secondary hover:text-primary-600 transition-colors duration-200"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-body font-medium text-text-secondary hover:text-primary-600 transition-colors duration-200">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <MegaMenuDropdown items={services} title="Services" />
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-body font-medium text-text-secondary hover:text-primary-600 transition-colors duration-200">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <MegaMenuDropdown items={industries} title="Industries" />
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/blog" 
              className="text-body font-medium text-text-secondary hover:text-primary-600 transition-colors duration-200"
            >
              Blog
            </Link>

            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border-light"
            >
              <div className="py-4 space-y-4">
                <Link 
                  href="/" 
                  className="block text-body font-medium text-text-secondary hover:text-primary-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="block text-body font-medium text-text-secondary hover:text-primary-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                
                {/* Mobile Services */}
                <div className="space-y-2">
                  <div className="text-body font-medium text-text-primary">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block pl-4 text-sm text-text-muted hover:text-primary-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Industries */}
                <div className="space-y-2">
                  <div className="text-body font-medium text-text-primary">Industries</div>
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="block pl-4 text-sm text-text-muted hover:text-primary-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>

                <Link 
                  href="/blog" 
                  className="block text-body font-medium text-text-secondary hover:text-primary-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/contact" 
                  className="block btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
