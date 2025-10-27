import { Testimonial } from '@/lib/strapi'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>
      
      <blockquote className="text-gray-700 italic mb-6">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center">
        {testimonial.photo && (
          <img 
            src={testimonial.photo.url} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.position}</p>
          <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}
