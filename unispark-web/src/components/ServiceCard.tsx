'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, CheckCircle } from 'lucide-react'
import { Service } from '@/lib/strapi'

interface ServiceCardProps {
  service: Service
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="card-professional hover-lift h-full">
        <div className="p-8">
          {/* Icon */}
          {service.icon && (
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={service.icon.url} 
                  alt={service.title}
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
            </div>
          )}
          
          {/* Featured Badge */}
          {service.isFeatured && (
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-100 text-accent-800">
                <Star className="w-4 h-4 mr-1 fill-current" />
                Featured Service
              </span>
            </div>
          )}
          
          {/* Title */}
          <h3 className="text-heading-4 font-semibold mb-4 text-text-primary group-hover:text-primary-600 transition-colors duration-300">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-body text-text-secondary mb-6 line-clamp-3 leading-relaxed">
            {service.shortDescription}
          </p>
          
          {/* Pricing */}
          {service.pricing && (
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-primary-600">
                  ${service.pricing.toLocaleString()}
                </span>
                <span className="text-text-muted ml-2">starting from</span>
              </div>
            </div>
          )}
          
          {/* Features Preview */}
          {service.features && (
            <div className="mb-6">
              <div className="flex items-center text-sm text-text-muted mb-2">
                <CheckCircle className="w-4 h-4 text-success-500 mr-2" />
                <span>Key features included</span>
              </div>
            </div>
          )}
          
          {/* CTA Button */}
          <div className="mt-auto">
            <Link 
              href={`/services/${service.slug}`}
              className="inline-flex items-center justify-center w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 group-hover:shadow-lg focus-ring"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        
        {/* Hover Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none" />
      </div>
    </motion.div>
  )
}
