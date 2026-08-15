# Chandu Venna DevOps Portfolio

Static personal portfolio for Chandu Venna, focused on DevOps, SRE, cloud infrastructure, Kubernetes, CI/CD, observability, and production engineering.

## Technology Stack

- Astro
- TypeScript
- Tailwind CSS
- Lucide icons
- Static deployment target: Cloudflare Pages

## Features

- Resume-backed professional copy
- Dark-first DevOps/SRE visual identity
- AWS, Azure, Terraform, Kubernetes, CI/CD, GitOps, monitoring, and incident response sections
- Dedicated project case-study pages
- SEO metadata, sitemap, robots.txt, JSON-LD Person schema
- Accessible responsive navigation and focus states
- Downloadable resume at `/resume.pdf`
- GitHub Actions build validation

## Project Structure

```text
src/
  components/
  data/
  layouts/
  pages/
  styles/
public/
  images/
  resume.pdf
  favicon.svg
  og-image.svg
  robots.txt
.github/workflows/ci.yml
astro.config.mjs
tailwind.config.mjs
tsconfig.json
package.json
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Cloudflare Pages Deployment

- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `SITE_URL=https://your-domain.com`

## Custom Domain Setup

1. Create a Cloudflare Pages project connected to the GitHub repository.
2. Set the build command to `npm run build` and output directory to `dist`.
3. Add the purchased domain in the Cloudflare Pages custom domains tab.
4. Follow Cloudflare's DNS instructions for the generated CNAME or apex setup.
5. Update `SITE_URL` to the final HTTPS domain and redeploy.

## GitHub Setup

```bash
git init
git add .
git commit -m "Build DevOps portfolio"
git branch -M main
git remote add origin https://github.com/chandu341/devops-portfolio.git
git push -u origin main
```

## Post-Deployment Verification

```bash
curl -I https://your-domain.com
curl https://your-domain.com/robots.txt
curl https://your-domain.com/sitemap-index.xml
```

Also verify:

- Resume download opens
- GitHub and LinkedIn links work
- Project pages render
- Mobile navigation works
- Lighthouse Performance, Accessibility, Best Practices, and SEO are 90+

## Security

No secrets, API keys, tokens, private keys, or backend services are required. The default contact path is email and professional profile links.

## Future Roadmap

- Add real engineering notes after drafting original articles
- Add more project repository links when public repos are available
- Add Cloudflare Web Analytics
- Expand case studies with diagrams from validated architecture details
- Add SRE incident write-ups when they can be safely shared
