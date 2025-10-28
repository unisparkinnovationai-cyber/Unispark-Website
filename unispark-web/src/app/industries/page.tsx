import { getIndustries } from '@/lib/strapi'
import IndustryCard from '@/components/IndustryCard'

export default async function IndustriesPage() {
  const industries = await getIndustries()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Specialized solutions tailored to the needs of your sector
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {industries.map((industry, index) => (
          <IndustryCard key={industry.id} industry={industry} index={index} />
        ))}
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Industries - UniSpark Innovation',
  description: 'Explore the industries we serve with tailored IT solutions.',
}


