'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Users, Award, Shield, Globe, ChevronRight } from 'lucide-react'
import { getServices, getBlogPosts, getTestimonials, getIndustries } from '@/lib/strapi'
import ServiceCard from '@/components/ServiceCard'
import BlogCard from '@/components/BlogCard'
import TestimonialCard from '@/components/TestimonialCard'
import IndustryCard from '@/components/IndustryCard'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [services, setServices] = useState<any[]>([])
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [industries, setIndustries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesData, blogData, testimonialsData, industriesData] = await Promise.all([
          getServices(),
          getBlogPosts(),
          getTestimonials(),
          getIndustries()
        ])
        setServices(servicesData)
        setBlogPosts(blogData)
        setTestimonials(testimonialsData)
        setIndustries(industriesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const featuredServices = services.filter(service => service.isFeatured)
  const featuredPosts = blogPosts.filter(post => post.isFeatured)

  const stats = [
    { icon: Users, value: '500+', label: 'Projects Completed', color: 'text-primary-600' },
    { icon: Award, value: '50+', label: 'Happy Clients', color: 'text-accent-500' },
    { icon: Shield, value: '24/7', label: 'Support Available', color: 'text-success-500' },
    { icon: Globe, value: '99.9%', label: 'Uptime Guarantee', color: 'text-primary-600' }
  ]

  const features = [
    'Expert IT Consulting',
    '24/7 Technical Support',
    'Scalable Cloud Solutions',
    'Advanced Security Measures',
    'Cost-Effective Solutions',
    'Proven Track Record'
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Randstad Style */}
      <section className="relative bg-gradient-primary text-white overflow-hidden">
        {/* Background Pattern (CSS-based to avoid JSX parsing issues) */}
        <div className="absolute inset-0 opacity-10 bg-dot-pattern" />
        
        <div className="container-professional relative z-10">
          <div className="py-24 lg:py-32 min-h-[480px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl lg:text-6xl font-bold leading-tight"
                  >
                    Transform Your Business with
                    <span className="block text-accent-400">Innovative IT Solutions</span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl text-white/90 leading-relaxed max-w-2xl"
                  >
                    We deliver cutting-edge technology solutions that drive growth, enhance security, 
                    and accelerate your digital transformation journey.
                  </motion.p>
                </div>

                {/* Features List */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:shadow-lg"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-300"
                  >
                    Explore Services
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Content - Stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-professional">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Our Featured Services
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to accelerate your digital transformation 
              and drive business growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
            >
              View All Services
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-professional">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Specialized solutions tailored to meet the unique challenges and requirements 
              of different industry sectors
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-professional">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our satisfied clients who have 
              transformed their businesses with our solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-professional">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, best practices, and innovations in technology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 3).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
            >
              Read More Articles
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container-professional">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our innovative IT solutions can help you achieve your business goals 
              and drive sustainable growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:shadow-lg"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}