import { getIndustryBySlug, getIndustries } from '@/lib/strapi'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const industries = await getIndustries()
  return industries.map((i) => ({ slug: i.slug }))
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = await getIndustryBySlug(slug)
  if (!industry) notFound()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{industry.name}</h1>
        <p className="text-xl text-gray-600 mb-10">{industry.description}</p>

        {industry.services && industry.services.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Related Services</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              {industry.services.map((s) => (
                <li key={s.id}>{s.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = await getIndustryBySlug(slug)
  if (!industry) return { title: 'Industry Not Found' }
  return {
    title: `${industry.name} - UniSpark Innovation`,
    description: industry.description,
  }
}


