import { getBlogPosts } from '@/lib/strapi'
import BlogCard from '@/components/BlogCard'

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest insights, trends, and best practices in technology and digital transformation
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Blog - UniSpark Innovation',
  description: 'Latest insights, trends, and best practices in technology, digital transformation, and IT infrastructure.',
}
