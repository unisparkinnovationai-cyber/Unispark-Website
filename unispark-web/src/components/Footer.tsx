'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowRight,
  Shield,
  Award,
  Users,
  Globe
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'IT Infrastructure Setup', href: '/services/it-infrastructure-setup' },
    { name: 'Cloud Migration Services', href: '/services/cloud-migration-services' },
    { name: 'Network Security Solutions', href: '/services/network-security-solutions' },
    { name: 'Digital Transformation', href: '/services/digital-transformation' },
    { name: 'Managed IT Services', href: '/services/managed-it-services' },
    { name: 'Cybersecurity Consulting', href: '/services/cybersecurity-consulting' },
  ]

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Government', href: '/industries/government' },
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News & Press', href: '/news' },
    { name: 'Partners', href: '/partners' },
  ]

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'White Papers', href: '/resources/white-papers' },
    { name: 'Webinars', href: '/resources/webinars' },
    { name: 'Documentation', href: '/resources/documentation' },
    { name: 'Support Center', href: '/support' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: Award, value: '50+', label: 'Happy Clients' },
    { icon: Shield, value: '24/7', label: 'Support Available' },
    { icon: Globe, value: '99.9%', label: 'Uptime Guarantee' },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-primary py-16"
      >
        <div className="container-professional">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container-professional">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <span className="text-heading-4 font-bold text-white">
                  UniSpark Innovation
                </span>
              </Link>
              <p className="text-white/80 mb-6 leading-relaxed">
                Transforming businesses through innovative IT solutions and cutting-edge technology. 
                We deliver excellence in every project, ensuring your digital transformation journey 
                is seamless and successful.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href} 
                      className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-semibold text-white mb-6">Industries</h4>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry.name}>
                    <Link 
                      href={industry.href} 
                      className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Resources */}
            <div>
              <h4 className="font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3 mb-8">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link 
                      href={resource.href} 
                      className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-t border-white/10 py-8">
        <div className="container-professional">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-primary-400 mr-3 mt-1" />
              <div>
                <div className="text-white font-medium mb-1">Email</div>
                <a href="mailto:info@unisparkinnovation.com" className="text-white/80 hover:text-white transition-colors">
                  info@unisparkinnovation.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-primary-400 mr-3 mt-1" />
              <div>
                <div className="text-white font-medium mb-1">Phone</div>
                <a href="tel:+15551234567" className="text-white/80 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-primary-400 mr-3 mt-1" />
              <div>
                <div className="text-white font-medium mb-1">Address</div>
                <div className="text-white/80">
                  123 Tech Street<br />
                  Innovation City, IC 12345
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-primary-400 mr-3 mt-1" />
              <div>
                <div className="text-white font-medium mb-1">Business Hours</div>
                <div className="text-white/80">
                  Mon-Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container-professional">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} UniSpark Innovation. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
