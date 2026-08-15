# DevOps Portfolio - Production Deployment Guide

## 🎯 Deployment Target Architecture

```
                  USERS
                    ↓
         https://cloudwithchandu.site
                    ↓
              Cloudflare DNS
                    ↓
            Cloudflare Pages
                    ↓
             Static Astro Site
                    ↑
                  GitHub
                    ↑
               Local Git Repo
```

---

## ✅ Local Project Status

- **Build Status**: ✅ PASS (0 errors, 0 warnings)
- **Pages Generated**: 7 static routes
- **Production Domain**: cloudwithchandu.site
- **Canonical URL**: https://cloudwithchandu.site (apex domain)
- **WWW Redirect**: www.cloudwithchandu.site → cloudwithchandu.site
- **Git Repository**: Initialized with initial commit
- **Git Branch**: main
- **HTTPS**: Will be provisioned by Cloudflare

---

## 📋 STEP 1: Push Portfolio to GitHub

**You must complete this step in a browser/GitHub CLI**

### Option A: Using GitHub Web UI (Easiest)

1. Go to https://github.com/new
2. Create new repository:
   - Repository name: `devops-portfolio`
   - Description: "Professional DevOps & Cloud Engineering Portfolio"
   - Visibility: **Public** (recommended for portfolio)
   - Do NOT initialize with README (we have one)
   - Click "Create repository"

3. GitHub will show push instructions. Run these commands in PowerShell:

```powershell
cd d:\Devops-data\Devops-Projects\Devops-Portfolio

# Add GitHub remote
git remote add origin https://github.com/chandu341/devops-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

4. Verify at: https://github.com/chandu341/devops-portfolio

---

## 📋 STEP 2: Create Cloudflare Account

**You must complete this step in a browser**

1. Go to https://dash.cloudflare.com/sign-up
2. Sign up with your email or GitHub account
3. Verify your email
4. You'll be taken to the Cloudflare Dashboard

**Do NOT add a domain yet. We'll do that after Pages setup.**

---

## 📋 STEP 3: Create Cloudflare Pages Project

**In Cloudflare Dashboard**

1. Navigate to: **Workers & Pages** → **Pages**
2. Click "Create application" → "Pages" → "Connect to Git"
3. Authorize GitHub when prompted
4. Select repository: **chandu341 / devops-portfolio**
5. Click "Begin setup"

### Build Configuration

On the setup screen, configure:

| Setting | Value |
|---------|-------|
| Production branch | main |
| Build command | npm run build |
| Build output directory | dist |

**Environment Variables** (optional - not required for static site):
- If prompted, you can skip this. The project doesn't need env vars.

6. Click "Save and Deploy"

**Wait for the first build to complete** (2-5 minutes)

You'll see: **"Deployment successful"**

**Your site is now live at**: `https://devops-portfolio.pages.dev`

---

## 📋 STEP 4: Test the Pages.dev URL

**Verify in browser**:

Visit: https://devops-portfolio.pages.dev

Check:
- [ ] Homepage loads
- [ ] Projects page works
- [ ] Project detail pages work
- [ ] Experience section visible
- [ ] Skills section visible
- [ ] Resume link works
- [ ] GitHub link works
- [ ] LinkedIn link works
- [ ] Email link works
- [ ] 404 page works (try /nonexistent)
- [ ] No console errors (open DevTools)

---

## 📋 STEP 5: Add Domain to Cloudflare

**You must complete this step in a browser**

### 5.1 Add Domain to Cloudflare as a Zone

1. In Cloudflare Dashboard, go to: **Home**
2. Click "Add site"
3. Enter your domain: `cloudwithchandu.site`
4. Click "Add site"
5. Choose plan: **Free Plan** (recommended for portfolio)
6. Click "Continue"

### 5.2 Review Imported DNS Records

Cloudflare will scan your domain's current DNS records at GoDaddy.

**IMPORTANT**: Review these records. Common records include:
- A records (pointing to web server)
- MX records (for email)
- TXT records (email verification, etc.)

If you use email on this domain at GoDaddy, **DO NOT delete MX or TXT records**.

For a portfolio site with no email configured, you can keep the defaults.

Click "Continue" to import records.

### 5.3 Copy Cloudflare Nameservers

Cloudflare will display two nameservers, similar to:
```
abcd.ns.cloudflare.com
xyz.ns.cloudflare.com
```

**COPY THESE EXACTLY** - you'll need them at GoDaddy.

Click "Continue" (you'll configure GoDaddy next).

---

## 📋 STEP 6: Update GoDaddy Nameservers

**You must complete this step in GoDaddy account**

1. Go to https://godaddy.com (sign in if needed)
2. Navigate to: **My Products** → **Domains**
3. Find `cloudwithchandu.site` and click on it
4. Go to: **Domain Settings** → **Nameservers** → **Change**
5. Select: "I'll use my own nameservers"
6. Delete existing nameservers
7. Add the TWO Cloudflare nameservers:
   - Nameserver 1: `abcd.ns.cloudflare.com` (from Cloudflare)
   - Nameserver 2: `xyz.ns.cloudflare.com` (from Cloudflare)
8. Click "Save"

**Wait 15 minutes to 24 hours** for nameserver propagation.

---

## 📋 STEP 7: Verify Nameserver Change

Run these commands in PowerShell to verify DNS propagation:

```powershell
# Check nameservers
nslookup -type=ns cloudwithchandu.site 1.1.1.1

# Check DNS resolution
nslookup cloudwithchandu.site 1.1.1.1
```

You should see Cloudflare's nameservers in the response.

---

## 📋 STEP 8: Connect Custom Domain to Pages

**Back in Cloudflare Dashboard**

1. Go to: **Workers & Pages** → **Pages** → **devops-portfolio**
2. Go to: **Custom domains**
3. Click "Set up a domain"
4. Enter: `cloudwithchandu.site`
5. Click "Continue"
6. Cloudflare will verify the domain and DNS
7. Click "Activate domain"

**Also set up www redirect**:

1. In Custom domains, click "Add custom domain" again
2. Enter: `www.cloudwithchandu.site`
3. Cloudflare will prompt you to configure routing:
   - Choose: "Redirect to cloudwithchandu.site" (if available)
   - OR configure both, with www redirecting to apex

---

## 📋 STEP 9: Verify HTTPS

Test in browser:

```
https://cloudwithchandu.site
```

✅ You should see a green padlock (HTTPS working)

Also test:

```
http://cloudwithchandu.site
```

✅ Should redirect to HTTPS version

And:

```
https://www.cloudwithchandu.site
```

✅ Should redirect to `https://cloudwithchandu.site`

---

## 📋 STEP 10: Final Production Verification

### Desktop Verification

- [ ] Homepage: https://cloudwithchandu.site
- [ ] Projects page: https://cloudwithchandu.site/projects
- [ ] Project 1: https://cloudwithchandu.site/projects/eks-microservices-gitops-observability
- [ ] Project 2: https://cloudwithchandu.site/projects/terraform-aws-cloud-migration
- [ ] Project 3: https://cloudwithchandu.site/projects/aks-elastic-stack-monitoring
- [ ] Engineering notes: https://cloudwithchandu.site/engineering
- [ ] 404 test: https://cloudwithchandu.site/nonexistent
- [ ] Resume download: https://cloudwithchandu.site/resume.pdf
- [ ] GitHub link: https://github.com/chandu341
- [ ] LinkedIn link: https://www.linkedin.com/in/im-chanduvenna/
- [ ] Email link: mailto:chanduv4378@gmail.com

### Mobile Verification

Test at different screen sizes (use browser DevTools):
- [ ] 320px (small phone)
- [ ] 375px (iPhone)
- [ ] 430px (larger phone)
- [ ] 768px (tablet)
- [ ] 1024px (laptop)

Check:
- [ ] No horizontal scrolling
- [ ] Mobile menu works
- [ ] Text is readable
- [ ] Images load
- [ ] Buttons are clickable
- [ ] No layout breaks

### Browser Console

Open DevTools (F12) and check:
- [ ] No console errors
- [ ] No 404s for resources
- [ ] No warnings about missing assets

### Performance Check (Optional)

Run Lighthouse:
1. Open https://cloudwithchandu.site
2. Press F12 (DevTools)
3. Click "Lighthouse" tab
4. Click "Analyze page load"

Target scores:
- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

---

## 🚀 SEO & Metadata Verification

Test with these URLs:

```
https://cloudwithchandu.site/sitemap-index.xml
https://cloudwithchandu.site/robots.txt
https://cloudwithchandu.site/favicon.svg
```

All should return 200 status (not 404).

---

## 📱 Future Deployment Workflow

Once live, here's how to update the website:

### Quick Update Process (4 steps):

```powershell
# 1. Edit website locally and test
cd d:\Devops-data\Devops-Projects\Devops-Portfolio

# 2. Commit changes
git add .
git commit -m "Update project description"

# 3. Push to GitHub
git push origin main

# 4. Cloudflare automatically builds and deploys!
# (Check Cloudflare Pages dashboard for build status)
```

No manual Cloudflare uploads needed. Just push to GitHub, and Cloudflare handles the rest.

---

## 🔍 Verification Commands

Run these to verify your production setup:

```powershell
# Check DNS resolution
nslookup cloudwithchandu.site 1.1.1.1

# Check nameservers
nslookup -type=ns cloudwithchandu.site 1.1.1.1

# Test HTTPS
curl -I https://cloudwithchandu.site

# Test redirect
curl -I http://cloudwithchandu.site
curl -I https://www.cloudwithchandu.site

# Check sitemap
curl https://cloudwithchandu.site/sitemap-index.xml

# Check robots.txt
curl https://cloudwithchandu.site/robots.txt
```

---

## 📊 Production Architecture Summary

| Component | Configuration |
|-----------|----------------|
| **Domain** | cloudwithchandu.site (GoDaddy) |
| **Registrar** | GoDaddy (unchanged) |
| **DNS Provider** | Cloudflare |
| **Hosting** | Cloudflare Pages |
| **Repository** | GitHub (chandu341/devops-portfolio) |
| **Build Command** | npm run build |
| **Output** | dist/ (static) |
| **HTTPS** | Cloudflare (automatic) |
| **Canonical URL** | https://cloudwithchandu.site |
| **WWW** | Redirects to apex |
| **Auto-deploy** | Yes (on git push to main) |

---

## ⚠️ Important Notes

1. **No Secrets in Repo**: Check `git log` to verify no API keys/tokens were committed
2. **GitHub Visibility**: Repository is PUBLIC (appropriate for portfolio)
3. **Nameserver Propagation**: Can take up to 24 hours (usually faster)
4. **Cloudflare Free Plan**: Sufficient for this static portfolio
5. **Auto-Deployments**: Every `git push` to main automatically triggers Cloudflare build

---

## 📞 Troubleshooting

### Site shows Cloudflare error page

- Check Cloudflare zone is "Active" (Status shows green)
- Wait 24 hours for nameserver propagation
- Verify GoDaddy nameservers match Cloudflare's

### Pages build fails in Cloudflare

- Check build logs: Workers & Pages → Pages → devops-portfolio → Deployments
- Most common: Missing environment variable (verify npm run build works locally)
- Check git history for accidental changes

### Domain shows "Not Found"

- DNS not yet propagated (wait longer)
- Custom domain not connected to Pages project
- Nameservers not pointing to Cloudflare

### HTTPS certificate not issued

- Wait 5-10 minutes after custom domain setup
- Check Cloudflare SSL/TLS status
- Verify domain is in active zone

---

## ✅ Deployment Checklist

- [ ] Git repository initialized with main branch
- [ ] Code pushed to GitHub: https://github.com/chandu341/devops-portfolio
- [ ] Cloudflare account created
- [ ] Cloudflare Pages project created
- [ ] Build succeeds on Cloudflare (pages.dev URL works)
- [ ] Domain added to Cloudflare as zone
- [ ] GoDaddy nameservers updated to Cloudflare's
- [ ] Nameserver change propagated (verified with nslookup)
- [ ] Custom domain connected to Pages
- [ ] HTTPS working on cloudwithchandu.site
- [ ] WWW redirects to apex
- [ ] All pages load correctly
- [ ] Resume downloads successfully
- [ ] External links work
- [ ] No console errors
- [ ] Lighthouse scores ≥90
- [ ] Sitemap and robots.txt accessible

---

## 📋 Quick Reference: Commands to Run After Deployment

```powershell
# Check everything is working
nslookup cloudwithchandu.site
nslookup -type=ns cloudwithchandu.site
curl -I https://cloudwithchandu.site
curl -I https://www.cloudwithchandu.site
curl https://cloudwithchandu.site/sitemap-index.xml
```

All should succeed without errors.

---

**Portfolio is now ready for production deployment! 🚀**

Follow the steps above, and your site will be live at `https://cloudwithchandu.site`
