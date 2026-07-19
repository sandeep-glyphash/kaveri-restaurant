# Kaveri Restaurant - Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free)

### Step 1: Push to GitHub

1. Create a new repository on GitHub: https://github.com/new
   - Name it: `kaveri-restaurant`
   - Keep it Private or Public (your choice)
   - Don't initialize with README

2. Run these commands in your terminal:

```bash
# Add GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/kaveri-restaurant.git

# Push your code
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Sign Up" or "Log In" with your GitHub account
3. Click "Add New Project"
4. Import your `kaveri-restaurant` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait 2-3 minutes for deployment

**Your site will be live at:** `https://kaveri-restaurant.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `kaverierestaurant.com`)
4. Follow DNS configuration instructions

---

## Alternative: Deploy to Netlify

1. Build your project:
```bash
npm run build
```

2. Go to https://netlify.com
3. Drag and drop the `.next` folder
4. Or connect your GitHub repository

---

## Environment Variables

If you add any API keys or secrets later:

1. In Vercel: Settings → Environment Variables
2. Add your variables
3. Redeploy

---

## Automatic Deployments

Both Vercel and Netlify automatically redeploy when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update gallery"
git push

# Automatically deploys in 2-3 minutes!
```

---

## Production Build (Local Testing)

To test the production build locally:

```bash
npm run build
npm start
```

Visit http://localhost:3000 to see the production version

---

## What's Deployed

✅ All 3 outlet pages (Ashok Nagar, Kanke Road, Ratu Road)
✅ Dynamic location-based header and footer
✅ Stunning gallery page with lightbox
✅ Fully responsive design
✅ Premium animations and effects
✅ SEO optimized

---

## Next Steps After Deployment

1. **Monitor**: Check Vercel analytics for traffic
2. **Optimize**: Use Vercel Speed Insights
3. **Update**: Push changes via Git
4. **Scale**: Upgrade plan if needed (starts free!)

---

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

---

**Made with ❤️ for Kaveri Restaurant**
