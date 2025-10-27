const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

async function strapiFetch(endpoint: string, options: RequestInit = {}) {
  const url = `${STRAPI_URL}/api${endpoint}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })
  
  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status}`)
  }
  
  return response.json()
}


export interface Service {
  id: number
  title: string
  description: string
  shortDescription: string
  features: string
  pricing: number | null
  slug: string
  isFeatured: boolean
  icon?: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface BlogPost {
  id: number
  title: string
  content: string
  excerpt: string
  slug: string
  author: string
  categories: string
  tags: string
  isFeatured: boolean
  featuredImage?: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface TeamMember {
  id: number
  name: string
  position: string
  bio: string
  photo?: any
  email: string
  linkedin: string
  twitter: string
  order: number
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Testimonial {
  id: number
  name: string
  company: string
  content: string
  rating: number
  position: string
  photo?: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Industry {
  id: number
  name: string
  description: string
  image?: any
  slug: string
  services?: Service[]
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await strapiFetch('/services?populate=*')
    return response.data || []
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const response = await strapiFetch(`/services?filters[slug][$eq]=${slug}&populate=*`)
    return response.data?.[0] || null
  } catch (error) {
    console.error('Error fetching service by slug:', error)
    return null
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await strapiFetch('/blog-posts?populate=*&sort[0]=createdAt:desc')
    return response.data || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await strapiFetch(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`)
    return response.data?.[0] || null
  } catch (error) {
    console.error('Error fetching blog post by slug:', error)
    return null
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await strapiFetch('/team-members?populate=*&sort[0]=order:asc')
    return response.data || []
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await strapiFetch('/testimonials?populate=*')
    return response.data || []
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getIndustries(): Promise<Industry[]> {
  try {
    const response = await strapiFetch('/industries?populate=*')
    return response.data || []
  } catch (error) {
    console.error('Error fetching industries:', error)
    return []
  }
}

export async function getIndustryBySlug(slug: string): Promise<Industry | null> {
  try {
    const response = await strapiFetch(`/industries?filters[slug][$eq]=${slug}&populate=*`)
    return response.data?.[0] || null
  } catch (error) {
    console.error('Error fetching industry by slug:', error)
    return null
  }
}
