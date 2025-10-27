import { getBlogPosts, getBlogPostBySlug } from '@/lib/strapi'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts()
  
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          {post.featuredImage && (
            <img 
              src={post.featuredImage.url} 
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
            />
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            {post.categories && (
              <>
                <span>•</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {post.categories}
                </span>
              </>
            )}
          </div>
          
          {post.isFeatured && (
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
              ⭐ Featured Article
            </span>
          )}
        </div>
        
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        
        {post.tags && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.split(',').map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Enjoyed This Article?</h3>
          <p className="text-gray-600 mb-6">
            Stay updated with more insights like this by subscribing to our newsletter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Read More Articles
            </a>
            <a 
              href="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${post.title} - UniSpark Innovation Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.author],
    },
  }
}
