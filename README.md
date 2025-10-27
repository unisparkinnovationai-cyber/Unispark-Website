# UniSpark Website - Next.js + Strapi

A modern website replica of unisparkinnovation.com built with Next.js frontend and Strapi CMS backend.

## 🏗️ Project Structure

```
unispark-website/
├── unispark-web/          # Next.js frontend
├── unispark-cms/          # Strapi CMS backend
├── docker-compose.yml     # Development setup
└── README.md
```

## 🚀 Quick Start

### Development Setup

1. **Start Strapi CMS (Development):**
```bash
cd unispark-cms
docker-compose up
```
Access: http://localhost:1337/admin

2. **Start Next.js Frontend:**
```bash
cd unispark-web
npm run dev
```
Access: http://localhost:3000

### Production Setup

1. **Set up environment variables:**
```bash
cd unispark-cms
cp env.example .env
# Edit .env with your production values
```

2. **Start production services:**
```bash
cd unispark-cms
docker-compose -f docker-compose.prod.yml up -d
```

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Backend:** Strapi v5, Node.js 20
- **Database:** SQLite (dev), PostgreSQL (prod)
- **Containerization:** Docker & Docker Compose

## 📋 Features

- ✅ Responsive design
- ✅ Content management system
- ✅ Blog functionality
- ✅ Contact forms
- ✅ SEO optimization
- ✅ Docker deployment
- ✅ Database migration support

## 🔧 Development

### Adding Content Types in Strapi

1. Go to http://localhost:1337/admin
2. Navigate to Content-Type Builder
3. Create new content types:
   - Services
   - Industries
   - Products
   - Blog Posts
   - Team Members
   - Testimonials

### Database Migration (SQLite → PostgreSQL)

```bash
# Export from SQLite
cd unispark-cms
npm run strapi export -- --file backup.json

# Import to PostgreSQL (production)
npm run strapi import -- --file backup.json
```

## 🚀 Deployment

### Option 1: Docker (Recommended)
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Option 2: Vercel + Railway
- Frontend: Deploy to Vercel
- Backend: Deploy to Railway

## 📝 Environment Variables

### Development (.env)
```
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
NODE_ENV=development
```

### Production (.env)
```
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=unispark_cms
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=your_secure_password
```

## 🔒 Security

- Change default admin credentials
- Use strong passwords for production
- Enable SSL in production
- Regular security updates

## 📞 Support

For issues or questions, please check the documentation or create an issue.
