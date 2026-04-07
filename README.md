# 🚀 Alfath Roziq Widhayaka — Personal Portfolio

A **modern, premium, and responsive** personal portfolio website built with React.js, TypeScript, Vite, and Tailwind CSS.

## ✨ Features

- ⚡ **Lightning-fast** — Vite build tooling
- 🎨 **Premium dark UI** — Glassmorphism, gradient accents, animated elements
- 📱 **Fully responsive** — Mobile, tablet, and desktop
- 🎭 **Smooth animations** — Framer Motion scroll reveals, hover effects
- 🧭 **Smart navbar** — Active section detection, mobile menu
- 📝 **Contact form** — Validation + ready for EmailJS integration
- 🔍 **SEO ready** — Proper meta tags, Open Graph
- 🗂️ **Centralized data** — Edit one file to update all content

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── BackToTop.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Organizations.tsx
│       ├── Achievements.tsx
│       └── Contact.tsx
├── data/
│   └── portfolio.ts      ← ✏️ Edit your content here
├── hooks/
│   ├── useActiveSection.ts
│   └── useScrollAnimation.ts
├── utils/
│   └── scroll.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## ✏️ Customizing Your Content

**All content is centralized in one file:** `src/data/portfolio.ts`

Edit this file to update:
- Personal information (name, role, bio, contact, links)
- Skills by category
- Projects (title, description, tech stack, links)
- Organizations & community involvement
- Achievements & certifications

## 📧 Setting Up Contact Form (EmailJS)

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create an email service and template
3. Update `src/components/sections/Contact.tsx`:
   ```tsx
   import emailjs from '@emailjs/browser';
   
   // Replace the setTimeout simulation with:
   emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     { name: form.name, email: form.email, message: form.message },
     'YOUR_PUBLIC_KEY'
   ).then(() => setStatus('success'));
   ```

## 🚀 Deploying to GitHub Pages

### Step 1: Update `vite.config.ts`

Replace `base: './'` with your repo name:
```ts
base: '/your-repo-name/',
```

### Step 2: Install gh-pages

```bash
npm install -D gh-pages
```

### Step 3: Add scripts to `package.json`

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 4: Deploy

```bash
npm run deploy
```

Your site will be live at: `https://your-username.github.io/your-repo-name/`

## 🚀 Deploying to Vercel / Netlify

Simply connect your GitHub repository — both platforms auto-detect Vite projects.
No additional configuration required.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| React.js 19 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| React Icons | Extended Icons |

## 📄 License

MIT License — free to use and customize.

---

Built with ❤️ by Alfath Roziq Widhayaka
