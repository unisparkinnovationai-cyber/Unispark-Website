import { Industry } from '@/lib/strapi'

interface IndustryCardProps {
  industry: Industry
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {industry.image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={industry.image.url} 
            alt={industry.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          {industry.image&& (
            <div className="mr-3">
              <img 
                src={industry.image.url} 
                alt={industry.name}
                className="w-8 h-8 object-contain"
              />
            </div>
          )}
          <h3 className="text-xl font-semibold text-gray-900">{industry.name}</h3>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{industry.description}</p>
        
        </div>
      </div>
  )
}