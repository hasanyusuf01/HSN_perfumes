# HSN Perfumes — Website Guide

A luxury perfume catalog website with WhatsApp ordering and a no-code admin panel.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Local Development Setup](#local-development-setup)
4. [Deployment to Cloudflare Pages](#deployment-to-cloudflare-pages)
5. [Setting Up the Admin CMS](#setting-up-the-admin-cms)
6. [Admin Usage Guide](#admin-usage-guide)
7. [Updating Your WhatsApp Number](#updating-your-whatsapp-number)
8. [Adding Products (Code Method)](#adding-products-code-method)
9. [Customizing Brand Colors](#customizing-brand-colors)
10. [FAQ](#faq)

---

## Tech Stack

| Layer       | Technology                     |
|-------------|-------------------------------|
| Framework   | Astro 4 (static site)          |
| Styling     | Tailwind CSS                   |
| Admin CMS   | Decap CMS (`/admin` panel)     |
| Hosting     | Cloudflare Pages               |
| Ordering    | WhatsApp click-to-chat links   |
| Content     | Markdown files in `/src/content/products/` |

---

## Project Structure

```
hsn-perfumes/
├── public/
│   ├── admin/
│   │   ├── index.html        ← CMS entry point
│   │   └── config.yml        ← CMS schema definition
│   ├── images/
│   │   └── products/         ← Product images go here
│   ├── _headers              ← Cloudflare security headers
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts         ← Content collection schema
│   │   ├── products/         ← Product .md files
│   │   └── settings/
│   │       └── brand.json    ← Brand settings (name, WhatsApp, etc.)
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── ProductCard.astro
│   ├── layouts/
│   │   └── Layout.astro      ← Main page wrapper
│   └── pages/
│       ├── index.astro       ← Homepage
│       ├── shop.astro        ← Collection page
│       ├── about.astro       ← About page
│       ├── contact.astro     ← Contact page
│       ├── 404.astro         ← Not Found page
│       └── products/
│           └── [slug].astro  ← Dynamic product detail page
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Local Development Setup

### Prerequisites
- Node.js 18 or higher → https://nodejs.org
- A GitHub account

### Steps

```bash
# 1. Clone your repository
git clone https://github.com/YOUR_USERNAME/hsn-perfumes.git
cd hsn-perfumes

# 2. Install dependencies
npm install

# 3. Start local server
npm run dev
```

Your site will be running at `http://localhost:4321`

To build for production:
```bash
npm run build
```

---

## Deployment to Cloudflare Pages

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial HSN Perfumes site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hsn-perfumes.git
git push -u origin main
```

### Step 2 — Create Cloudflare Pages Project

1. Go to https://dash.cloudflare.com
2. Click **Workers & Pages** → **Create Application** → **Pages**
3. Click **Connect to Git**
4. Select your GitHub repository
5. Configure build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

### Step 3 — Configure Automatic Deploys

Once connected, every `git push` to `main` automatically rebuilds and deploys the site.

### Step 4 — Add Custom Domain (Optional)

1. In your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `hsnperfumes.com`)
4. Follow DNS configuration instructions

---

## Setting Up the Admin CMS

Decap CMS uses **Netlify Identity** or **Git Gateway** for authentication. For Cloudflare Pages, we use the Git Gateway method via Netlify (free tier is sufficient).

### Step 1 — Enable Netlify Identity (One-time Setup)

1. Go to https://app.netlify.com
2. Create a free account and click **Add new site** → **Import existing project**
3. Connect to your same GitHub repo
4. After deploy, go to **Site settings** → **Identity** → **Enable Identity**
5. Under **Registration preferences**, set to **Invite only**
6. Under **Services** → **Git Gateway**, click **Enable Git Gateway**

### Step 2 — Update config.yml

Open `public/admin/config.yml` and ensure the backend section reads:

```yaml
backend:
  name: git-gateway
  branch: main
```

### Step 3 — Invite Yourself as Admin

1. In Netlify → **Identity** tab → **Invite users**
2. Enter your email address
3. Check your email and accept the invite

### Step 4 — Access the CMS

Visit: `https://your-site.pages.dev/admin`

Log in with the email and password you set via the invite.

> **Note:** The CMS login works via Netlify Identity even though the site is hosted on Cloudflare Pages. This is the standard pattern for static site CMS auth.

---

## Admin Usage Guide

### Adding a New Product

1. Go to `/admin` on your site
2. Click **Products** in the left sidebar
3. Click **New Product**
4. Fill in all fields:
   - **Product Name**: Full name (e.g., "Oud Royale")
   - **URL Slug**: Auto-generated lowercase URL (e.g., "oud-royale")
   - **SKU**: Your product code (e.g., HSN-007)
   - **Price**: Number in ₹ (e.g., 3500)
   - **Category**: Select from dropdown
   - **Featured**: Toggle ON to show on homepage featured section
   - **Best Seller**: Toggle ON for best seller badge
   - **Short Description**: One sentence for the product card
   - **Full Description**: Rich text for the product detail page
   - **Fragrance Notes**: Add each line as "Top: Saffron, Cardamom"
   - **Available Sizes**: Add each size (e.g., "50ml", "100ml")
   - **Main Image**: Upload product image
   - **In Stock**: Toggle to control availability
5. Click **Save** (saves as draft) or **Publish** (makes it live)

### Editing an Existing Product

1. Go to `/admin`
2. Click **Products**
3. Find and click the product to edit
4. Make your changes
5. Click **Publish** to save changes live

### Changing Prices

1. Open the product
2. Update the **Price** field
3. Click **Publish** → site rebuilds within 2–3 minutes

### Updating Brand Settings

1. Go to `/admin`
2. Click **⚙️ Site Settings**
3. Click **Brand & Contact Settings**
4. Update your WhatsApp number, hero text, etc.
5. Click **Publish**

---

## Updating Your WhatsApp Number

**Method 1 — Via CMS (Recommended)**
1. Go to `/admin` → **Site Settings** → **Brand & Contact Settings**
2. Update **WhatsApp Number** (format: `919876543210` — include country code, no `+`)
3. Publish

**Method 2 — Direct File Edit**
Edit `src/content/settings/brand.json`:
```json
{
  "whatsapp_number": "919876543210"
}
```

---

## Adding Products (Code Method)

Create a new `.md` file in `src/content/products/`:

```markdown
---
name: "Your Perfume Name"
slug: "your-perfume-name"
sku: "HSN-007"
price: 3500
category: "Oud"
featured: false
best_seller: false
short_description: "A one-line description for the product card."
fragrance_notes:
  - "Top: Bergamot, Saffron"
  - "Heart: Oud, Rose"
  - "Base: Sandalwood, Musk"
sizes:
  - "50ml"
  - "100ml"
main_image: "/images/products/your-image.jpg"
gallery: []
in_stock: true
---

Full product description goes here in Markdown format.

You can use **bold text**, write multiple paragraphs, and format however you like.
```

Then add your product image to `public/images/products/`.

---

## Customizing Brand Colors

Open `tailwind.config.mjs` and edit the `colors` section:

```js
colors: {
  obsidian: '#0f0f0f',   // Dark background
  cream:    '#f7f1e8',   // Main text color
  gold:     '#d4af37',   // Primary accent / buttons
  charcoal: '#2c2c2c',   // Card backgrounds
}
```

---

## WhatsApp Message Template

When a customer clicks **Buy on WhatsApp**, they see this pre-filled message:

```
Hello HSN Perfumes, I want to order this product:

Product: Oud Royale
Price: ₹4500
Size: 100ml
Product Code: HSN-001
Product URL: https://hsnperfumes.com/products/oud-royale

Please confirm availability.
```

The size updates automatically when the customer selects a different size option.

---

## FAQ

**Q: How do I add product images?**
A: Via the CMS image upload, or place files in `public/images/products/` and reference them as `/images/products/filename.jpg`.

**Q: How long does deployment take after a CMS publish?**
A: Cloudflare Pages typically rebuilds and deploys within 2–4 minutes.

**Q: Can I add more pages?**
A: Yes. Create a new `.astro` file in `src/pages/`. For example, `src/pages/faq.astro` becomes `/faq`.

**Q: How do I add a new fragrance category?**
A: Edit the `options` list in `public/admin/config.yml` under the category field, then also add it to the categories array in `src/pages/shop.astro`.

**Q: What image format should I use for products?**
A: WebP or JPEG work best. Recommended size: 800×1000px (portrait). Keep file size under 200KB for fast loading.

**Q: Can multiple admins use the CMS?**
A: Yes — just invite more email addresses via Netlify Identity.

---

## Support

For technical help, contact your developer or refer to:
- Astro Docs: https://docs.astro.build
- Decap CMS Docs: https://decapcms.org/docs
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages
- Tailwind CSS Docs: https://tailwindcss.com/docs
