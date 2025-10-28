'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Building2, User } from 'lucide-react'
import { Testimonial } from '@/lib/strapi'

interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="card-professional hover-lift h-full relative">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-10">
          <Quote className="w-8 h-8 text-primary-600" />
        </div>
        
        <div className="p-8">
          {/* Rating */}
          <div className="flex items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${
                  i < testimonial.rating 
                    ? 'text-accent-500 fill-current' 
                    : 'text-secondary-300'
                }`} 
              />
            ))}
            <span className="ml-2 text-sm text-text-muted">
              ({testimonial.rating}/5)
            </span>
          </div>
          
          {/* Testimonial Content */}
          <blockquote className="text-body text-text-secondary mb-8 leading-relaxed relative">
            <Quote className="w-6 h-6 text-primary-200 absolute -top-2 -left-2" />
            <span className="pl-4">"{testimonial.content}"</span>
          </blockquote>
          
          {/* Author Info */}
          <div className="flex items-center">
            {testimonial.photo && (
              <div className="relative mr-4">
                <img 
                  src={testimonial.photo.url} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-100"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-white" />
                </div>
              </div>
            )}
            
            <div className="flex-1">
              <h4 className="font-semibold text-text-primary mb-1">
                {testimonial.name}
              </h4>
              <div className="flex items-center text-sm text-text-muted mb-1">
                <Building2 className="w-4 h-4 mr-1" />
                <span>{testimonial.position}</span>
              </div>
              <p className="text-sm font-medium text-primary-600">
                {testimonial.company}
              </p>
            </div>
          </div>
        </div>
        
        {/* Hover Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none" />
      </div>
    </motion.div>
  )
}
