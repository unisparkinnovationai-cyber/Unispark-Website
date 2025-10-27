import Link from 'next/link'
import { Service } from '@/lib/strapi'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      {service.icon && (
        <div className="mb-4">
          <img 
            src={service.icon.url} 
            alt={service.title}
            className="w-12 h-12 object-contain"
          />
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{service.shortDescription}</p>
      
      {service.pricing && (
        <div className="text-2xl font-bold text-blue-600 mb-4">
          ${service.pricing.toLocaleString()}
        </div>
      )}
      
      {service.isFeatured && (
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
          ⭐ Featured
        </span>
      )}
      
      <Link 
        href={`/services/${service.slug}`}
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
      >
        Learn More
      </Link>
    </div>
  )
}
