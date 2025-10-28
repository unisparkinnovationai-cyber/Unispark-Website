'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Users, TrendingUp } from 'lucide-react'
import { Industry } from '@/lib/strapi'

interface IndustryCardProps {
  industry: Industry
  index?: number
}

export default function IndustryCard({ industry, index = 0 }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/industries/${industry.slug}`}>
        <div className="card-professional hover-lift overflow-hidden h-full">
          {/* Industry Image */}
          {industry.image && (
            <div className="relative overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={industry.image.url} 
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              {/* Industry Icon */}
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-600" />
                </div>
              </div>
            </div>
          )}
          
          <div className="p-6">
            {/* Industry Name */}
            <div className="flex items-center mb-4">
              <Building2 className="w-5 h-5 text-primary-600 mr-2" />
              <h3 className="text-heading-4 font-semibold text-text-primary group-hover:text-primary-600 transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
            
            {/* Description */}
            <p className="text-body text-text-secondary mb-6 line-clamp-3 leading-relaxed">
              {industry.description}
            </p>
            
            {/* Services Count */}
            {industry.services && industry.services.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center text-sm text-text-muted">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span>{industry.services.length} specialized services</span>
                </div>
              </div>
            )}
            
            {/* CTA */}
            <div className="mt-auto">
              <div className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300 group-hover:translate-x-1">
                Explore Solutions
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
          
          {/* Hover Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  )
}