import Link from 'next/link'
import { BlogPost } from '@/lib/strapi'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {post.featuredImage && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.featuredImage.url} 
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        {post.categories && (
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
            {post.categories}
          </span>
        )}
        
        <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">By {post.author}</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            Read More →
          </Link>
        </div>
        
        {post.isFeatured && (
          <div className="mt-3">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
