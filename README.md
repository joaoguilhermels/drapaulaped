# Dra. Paula Ped - Website

Next.js project optimized for GitHub Pages deployment.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Docker** for containerized development
- **GitHub Actions** for automated deployment

## Project Structure

```
/app                 # Next.js App Router pages
/components          # Reusable React components
/lib                 # Utility functions and helpers
/public              # Static assets
/.github/workflows   # CI/CD pipelines
```

## Development Setup

### Using Docker (Recommended)

1. Build and start the development container:
```bash
docker-compose up --build
```

2. Access the application at http://localhost:3000

3. Stop the container:
```bash
docker-compose down
```

### Installing Dependencies (via Docker)

```bash
docker-compose run --rm nextjs npm install <package-name>
```

### Running Commands

```bash
# Development
docker-compose run --rm nextjs npm run dev

# Build
docker-compose run --rm nextjs npm run build

# Lint
docker-compose run --rm nextjs npm run lint
```

## GitHub Pages Deployment

### Initial Setup

1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. The workflow will deploy automatically on push to main branch

### Configuration

If deploying to a repository path (not root domain), update `next.config.js`:

```javascript
basePath: '/repository-name',
assetPrefix: '/repository-name/',
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## Path Aliases

Configured TypeScript path aliases:

- `@/components/*` → `/components/*`
- `@/lib/*` → `/lib/*`
- `@/styles/*` → `/styles/*`

## SEO Configuration

Metadata is configured in `app/layout.tsx`. Update the following:

- Title
- Description
- Keywords
- Open Graph tags

## Build Output

- Development: `npm run dev`
- Production build: `npm run build`
- Static export: Generated in `/out` directory
