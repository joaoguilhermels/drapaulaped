# GitHub Pages Deployment Guide

## Initial Setup

### 1. Repository Configuration

Ensure your repository is public or you have GitHub Pro/Team for private repos with Pages.

### 2. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy on push to `main` branch

### 3. Configure Base Path (if needed)

If deploying to `username.github.io/repository-name`:

1. Update `next.config.js`:
```javascript
basePath: '/drapaulaped',
assetPrefix: '/drapaulaped/',
```

2. Update `.env.example`:
```bash
NEXT_PUBLIC_SITE_URL=https://username.github.io/drapaulaped
```

If deploying to custom domain or `username.github.io` (root), no changes needed.

### 4. Custom Domain (Optional)

1. Go to **Settings** → **Pages** → **Custom domain**
2. Add your domain (e.g., `www.drapaulaped.com.br`)
3. Configure DNS with your provider:
   - Add CNAME record pointing to `username.github.io`
   - Or A records to GitHub Pages IPs

## Deployment Workflow

### Automatic Deployment

The workflow triggers automatically on:
- Push to `main` branch
- Manual trigger via Actions tab

### Manual Deployment

1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Branch Strategy

Recommended workflow:
1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit
3. Push and create Pull Request to `main`
4. CI workflow runs automatically on PR
5. After review and merge, deployment triggers automatically

## Environment Variables

GitHub Pages doesn't support runtime environment variables. All env vars must be prefixed with `NEXT_PUBLIC_` and will be embedded at build time.

### Setting Secrets

For sensitive build-time variables:
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add repository secrets
3. Reference in workflow: `${{ secrets.SECRET_NAME }}`

## Troubleshooting

### Build Fails

1. Check **Actions** tab for error logs
2. Common issues:
   - Missing dependencies: Run `npm install` locally
   - TypeScript errors: Run `npm run build` locally
   - Environment variables: Check `.env.example`

### 404 on Refresh

GitHub Pages serves static files. Next.js export handles this, but ensure:
- `trailingSlash: true` in `next.config.js`
- `.nojekyll` file exists in `/public`

### Images Not Loading

Ensure in `next.config.js`:
```javascript
images: {
  unoptimized: true,
}
```

### Wrong Base Path

Update `basePath` in `next.config.js` to match your deployment:
- Root domain: No basePath needed
- Subdirectory: Set to `/repository-name`

## Performance Optimization

The workflow includes:
- **Caching**: npm dependencies and Next.js cache
- **Static Generation**: Full SSG export
- **Asset Optimization**: Minified CSS/JS

## Monitoring

After deployment:
1. Check deployment status in **Actions** tab
2. Visit site URL to verify
3. Check browser console for errors
4. Test navigation and links

## Rollback

To rollback to previous version:
1. Go to **Actions** tab
2. Find successful previous deployment
3. Click **Re-run jobs**

Or:
1. Revert commit on `main` branch
2. Push to trigger new deployment
