const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || ''

// Safe fetch wrapper: never throws, always returns a predictable shape
async function strapiFetch(endpoint: string, options: RequestInit = {}) {
  try {
    if (!STRAPI_URL) {
      // CMS not configured/running; return empty payload
      return { data: [] }
    }
    const url = `${STRAPI_URL}/api${endpoint}`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      // Treat non-200 as empty to avoid console noise during local dev
      return { data: [] }
    }

    return response.json()
  } catch (_err) {
    // Network or runtime failure – return empty to allow UI to render with mocks
    return { data: [] }
  }
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
    if (response.data && response.data.length) return response.data
  } catch (error) {
    console.error('Error fetching services:', error)
  }
  // Return mock data when Strapi is not available or returns empty
  return [
      {
        id: 1,
        title: 'IT Infrastructure Setup',
        description: 'Complete infrastructure solutions for modern businesses',
        shortDescription: 'Design, implement, and maintain robust IT infrastructure that scales with your business needs.',
        features: 'Network Design, Server Setup, Security Implementation, Monitoring',
        pricing: 5000,
        slug: 'it-infrastructure-setup',
        isFeatured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Cloud Migration Services',
        description: 'Seamless cloud transitions for enhanced scalability',
        shortDescription: 'Migrate your applications and data to the cloud with minimal downtime and maximum security.',
        features: 'AWS Migration, Azure Setup, Data Migration, Security',
        pricing: 8000,
        slug: 'cloud-migration-services',
        isFeatured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      {
        id: 3,
        title: 'Network Security Solutions',
        description: 'Advanced security solutions to protect your business',
        shortDescription: 'Comprehensive security solutions including firewalls, monitoring, and threat detection.',
        features: 'Firewall Setup, Threat Detection, Security Monitoring, Compliance',
        pricing: 6000,
        slug: 'network-security-solutions',
        isFeatured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      }
    ]
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
    if (response.data && response.data.length) return response.data
  } catch (error) {
    console.error('Error fetching blog posts:', error)
  }
  return [
      {
        id: 1,
        title: 'The Future of Cloud Computing in 2024',
        content: 'Comprehensive guide to cloud computing trends...',
        excerpt: 'Explore the latest trends and innovations in cloud computing that are shaping the future of business technology.',
        slug: 'future-cloud-computing-2024',
        author: 'Sarah Johnson',
        categories: 'Technology',
        tags: 'cloud, technology, innovation',
        isFeatured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Cybersecurity Best Practices for Small Businesses',
        content: 'Essential cybersecurity strategies...',
        excerpt: 'Learn the fundamental cybersecurity practices every small business should implement to protect their digital assets.',
        slug: 'cybersecurity-small-business',
        author: 'Michael Chen',
        categories: 'Security',
        tags: 'security, small business, best practices',
        isFeatured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      {
        id: 3,
        title: 'Digital Transformation: A Complete Guide',
        content: 'Step-by-step digital transformation...',
        excerpt: 'A comprehensive guide to digital transformation strategies that help businesses modernize and stay competitive.',
        slug: 'digital-transformation-guide',
        author: 'Emily Rodriguez',
        categories: 'Business',
        tags: 'digital transformation, business strategy',
        isFeatured: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      }
    ]
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
    if (response.data && response.data.length) return response.data
  } catch (error) {
    console.error('Error fetching testimonials:', error)
  }
  return [
      {
        id: 1,
        name: 'Jennifer Martinez',
        company: 'TechCorp Solutions',
        content: 'UniSpark transformed our IT infrastructure completely. Their expertise in cloud migration saved us months of work and significantly improved our system performance.',
        rating: 5,
        position: 'CTO',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      {
        id: 2,
        name: 'David Thompson',
        company: 'InnovateLabs',
        content: 'The cybersecurity solutions provided by UniSpark are top-notch. We feel confident knowing our data is protected by industry-leading security measures.',
        rating: 5,
        position: 'CEO',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      {
        id: 3,
        name: 'Lisa Wang',
        company: 'Global Dynamics',
        content: 'Professional, reliable, and innovative. UniSpark helped us modernize our entire IT stack and the results speak for themselves.',
        rating: 5,
        position: 'IT Director',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      {
        id: 4,
        name: 'Robert Kim',
        company: 'FutureTech Inc',
        content: 'Outstanding service and support. The team at UniSpark goes above and beyond to ensure our technology needs are met.',
        rating: 5,
        position: 'VP of Operations',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      }
    ]
}

export async function getIndustries(): Promise<Industry[]> {
  try {
    const response = await strapiFetch('/industries?populate=*')
    if (response.data && response.data.length) return response.data
  } catch (error) {
    console.error('Error fetching industries:', error)
  }
  return [
      {
        id: 1,
        name: 'Healthcare',
        description: 'HIPAA-compliant IT solutions for healthcare organizations, ensuring patient data security and regulatory compliance.',
        slug: 'healthcare',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      {
        id: 2,
        name: 'Finance',
        description: 'Secure financial technology solutions designed for banks, credit unions, and financial services companies.',
        slug: 'finance',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      {
        id: 3,
        name: 'Manufacturing',
        description: 'Industrial automation and IoT solutions that optimize manufacturing processes and improve operational efficiency.',
        slug: 'manufacturing',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      },
      {
        id: 4,
        name: 'Education',
        description: 'Educational technology solutions that enhance learning experiences and streamline administrative processes.',
        slug: 'education',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      }
    ]
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
