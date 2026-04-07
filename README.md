# Alfath Roziq Widhayaka — Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

Live: [alfathroziqq.github.io/portofolio-alfath](https://alfathroziqq.github.io/portofolio-alfath/)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js 19 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Lucide React + React Icons | Icons |
| EmailJS | Contact Form |

## Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer, BackToTop
│   └── sections/       # Hero, About, Skills, Projects, Organizations, Achievements, Contact
├── config/
│   └── emailjs.ts      # EmailJS credentials
├── data/
│   └── portfolio.ts    # All content lives here — edit this file
├── hooks/
└── utils/
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run deploy    # deploy to GitHub Pages
```

## Updating Your Content

Everything — name, bio, skills, projects, experience, contact links — is in one file:

```
src/data/portfolio.ts
```

Edit that file and your changes will reflect across all sections automatically.

## Contact Form (EmailJS)

Credentials are stored in `src/config/emailjs.ts`. To reconfigure:

1. Go to [emailjs.com](https://emailjs.com) and open your account
2. Update the `serviceId`, `templateId`, and `publicKey` values in the config file

## Deployment

The site is deployed to GitHub Pages via the `gh-pages` branch.

To redeploy after making changes:

```bash
git add .
git commit -m "your message"
git push
npm run deploy
```

---

Built by Alfath Roziq Widhayaka
