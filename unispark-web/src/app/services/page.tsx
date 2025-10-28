import { getServices } from '@/lib/strapi'
import ServiceCard from '@/components/ServiceCard'

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive IT solutions designed to transform your business and accelerate your digital journey
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Our Services - UniSpark Innovation',
  description: 'Comprehensive IT services including infrastructure setup, cloud migration, cybersecurity, and digital transformation solutions.',
}
