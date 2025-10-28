'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail, Award, Users } from 'lucide-react'
import { TeamMember } from '@/lib/strapi'

interface TeamCardProps {
  member: TeamMember
  index?: number
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="card-professional hover-lift text-center h-full">
        {/* Photo */}
        {member.photo && (
          <div className="relative overflow-hidden">
            <div className="aspect-square">
              <img 
                src={member.photo.url} 
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Social Links Overlay */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex space-x-4">
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                )}
                {member.twitter && (
                  <a 
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                )}
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="p-6">
          {/* Name */}
          <h3 className="text-heading-4 font-semibold mb-2 text-text-primary group-hover:text-primary-600 transition-colors duration-300">
            {member.name}
          </h3>
          
          {/* Position */}
          <div className="flex items-center justify-center mb-4">
            <Award className="w-4 h-4 text-primary-500 mr-2" />
            <p className="text-primary-600 font-medium">{member.position}</p>
          </div>
          
          {/* Bio */}
          <p className="text-body text-text-secondary mb-6 line-clamp-3 leading-relaxed">
            {member.bio}
          </p>
          
          {/* Contact Info */}
          {member.email && (
            <div className="mt-auto">
              <a 
                href={`mailto:${member.email}`}
                className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </div>
          )}
        </div>
        
        {/* Hover Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none" />
      </div>
    </motion.div>
  )
}
