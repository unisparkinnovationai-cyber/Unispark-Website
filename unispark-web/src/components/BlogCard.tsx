'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Star } from 'lucide-react'
import { BlogPost } from '@/lib/strapi'

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="card-professional hover-lift overflow-hidden h-full">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative overflow-hidden">
            <div className="aspect-video">
              <img 
                src={post.featuredImage.url} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Category Badge */}
            {post.categories && (
              <div className="absolute top-4 left-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.categories}
                </span>
              </div>
            )}
            
            {/* Featured Badge */}
            {post.isFeatured && (
              <div className="absolute top-4 right-4">
                <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  Featured
                </span>
              </div>
            )}
          </div>
        )}
        
        <div className="p-6">
          {/* Meta Information */}
          <div className="flex items-center text-sm text-text-muted mb-4 space-x-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-heading-4 font-semibold mb-3 text-text-primary group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-body text-text-secondary mb-6 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Tags */}
          {post.tags && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {post.tags.split(',').slice(0, 3).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-md"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Read More Link */}
          <div className="mt-auto">
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300 group-hover:translate-x-1"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        
        {/* Hover Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none" />
      </div>
    </motion.article>
  )
}
