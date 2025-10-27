import { getTeamMembers, getTestimonials } from '@/lib/strapi'
import TeamCard from '@/components/TeamCard'
import TestimonialCard from '@/components/TestimonialCard'

export default async function AboutPage() {
  const [teamMembers, testimonials] = await Promise.all([
    getTeamMembers(),
    getTestimonials()
  ])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About UniSpark Innovation</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering businesses through innovative technology solutions and digital transformation
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Founded with a vision to bridge the gap between traditional business operations and cutting-edge technology, 
                UniSpark Innovation has been at the forefront of digital transformation for over a decade. Our journey began 
                when we recognized that many businesses were struggling to keep pace with rapidly evolving technology landscapes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, we are proud to be a trusted partner for organizations across various industries, helping them 
                modernize their IT infrastructure, enhance security postures, and leverage cloud technologies to drive 
                innovation and growth.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our commitment to excellence, combined with our deep technical expertise and customer-centric approach, 
                has enabled us to deliver transformative solutions that create lasting value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and secure digital futures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading catalyst for digital transformation, enabling businesses to thrive in the technology-driven future.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Excellence, integrity, innovation, and customer success are the core values that guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The experts behind our success, dedicated to delivering exceptional results for our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions
          </p>
          <a 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: 'About Us - UniSpark Innovation',
  description: 'Learn about UniSpark Innovation, our mission, values, and the expert team behind our technology solutions.',
}
