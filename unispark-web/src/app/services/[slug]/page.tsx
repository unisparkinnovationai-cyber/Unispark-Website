import { getServices, getServiceBySlug } from '@/lib/strapi'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServiceDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          {service.icon && (
            <img 
              src={service.icon.url} 
              alt={service.title}
              className="w-16 h-16 object-contain mb-6"
            />
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{service.shortDescription}</p>
          
          {service.isFeatured && (
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
              ⭐ Featured Service
            </span>
          )}
        </div>
        
        <div className="prose max-w-none mb-12">
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
            {service.description}
          </div>
        </div>
        
        {service.features && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <ul className="space-y-3">
              {service.features.split('\n').map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{feature.replace('• ', '')}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {service.pricing && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Investment</h3>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-blue-600">
                ${service.pricing.toLocaleString()}
              </span>
              <span className="text-gray-600 ml-2">starting from</span>
            </div>
            <p className="text-gray-600 mt-2">
              Contact us for a detailed quote tailored to your specific requirements
            </p>
          </div>
        )}
        
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6">
            Let's discuss how this service can benefit your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a 
              href="/services"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} - UniSpark Innovation`,
    description: service.shortDescription,
  }
}
