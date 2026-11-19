# Adheesha — Personal Portfolio Website

A clean, responsive portfolio website for **Adheesha Imada Kulasekara**, featuring real-world software projects, game development work, technical skills, and leadership experience.

## Features

- Responsive layout for desktop, tablets, and phones
- Light / dark theme switcher
- Interactive project filters (All / Web / Games / Python)
- Educat live demo and original team repository link
- Jaffna Rugby Club live website (without sharing private source code)
- GitHub project links and LinkedIn contact CTA
- Accessible navigation and reduced-motion support
- No framework, backend, database, paid services, or build required

## Running the website locally

Because this website uses JavaScript modules, **serve it from a local web server** instead of double-clicking `index.html`.

### Option A — Python

Open the project folder in VS Code, open Terminal, and run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser. On some Windows installations use `py -m http.server 8000`.

### Option B — VS Code Live Server

Install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

## Customize the website

| File | Purpose |
| --- | --- |
| `index.html` | Hero, About, Skills, Contact, and semantic page layout |
| `assets/data.js` | **Edit project names, descriptions, links, and your public email here** |
| `assets/main.js` | Project rendering, filters, theme and mobile menu |
| `assets/styles.css` | Design, colors, typography, and responsive layout |
| `favicon.svg` | Site icon |
| `og-cover.svg` | Social-sharing graphic (SVG) |

### Adding your email

`assets/data.js` contains `email: ''` — leave blank to hide the email button. Replace with a professional contact address only when you want it to be public:

```js
email: 'your-professional-email@example.com',
```

### Adding screenshots

The existing project graphics are **abstract concept illustrations**, not screenshots of your actual projects. Replace them with genuine screenshots you have permission to publish, especially for Educat and the club website. Do not publish personal information from admin panels, client data, access tokens, or private repository contents.

### Updating your CV

The site intentionally does not include a fake résumé/CV download. Once your CV is ready, add it to an `assets/` folder and link to it from `index.html`.

## Publish to GitHub and Vercel

1. On GitHub, create a **new public repository** called `portfolio-website` in your `AdheeshaImada` account. Do not use your special profile README repository.
2. Upload **all files and the `assets/` folder** from this project to the repository root. Alternatively, use Git commands below.
3. Open [vercel.com/new](https://vercel.com/new) and connect GitHub.
4. Import `portfolio-website`.
5. If Vercel asks for framework, choose **Other**. Leave build command blank and use the repository root (`.`) as the output directory for a plain static website. (If this changes in Vercel's UI, choose the equivalent static project settings.)
6. Deploy. Copy the published URL and add it to your GitHub profile and LinkedIn.

With Git installed:

```bash
git init
git add .
git commit -m "Create personal developer portfolio"
git branch -M main
git remote add origin https://github.com/AdheeshaImada/portfolio-website.git
git push -u origin main
```

Run these inside the portfolio project directory **after** creating an empty GitHub repository. Authentication may require your credential manager, browser, or a personal access token; never put access tokens in committed files.

### Alternative: GitHub Pages

You can also host this zero-build static site with GitHub Pages by selecting **Settings → Pages → Deploy from a branch → main / root**. The resulting address is normally `https://AdheeshaImada.github.io/portfolio-website/`.

## Before sharing with recruiters

- [ ] Read and edit every project description for accuracy
- [ ] Confirm Educat is publicly viewable (a free preview may occasionally be inaccessible)
- [ ] Replace conceptual project artwork with approved real screenshots if available
- [ ] Add a professional email only if you want it public
- [ ] Verify all links and mobile layout
- [ ] Add actual CV only when finalized
- [ ] Get permission before sharing private club/client materials

## Notes

- Educat is described as a **client-commissioned team project**, with Adheesha responsible for the **entire administrative side**. The client plans to use it in the future; the site does **not** claim it is already in active client production use.
- The Jaffna Rugby Club site is described as an **independently developed** live project. Its original code remains in a **private club-owned repository**.
- Cybersecurity is presented as an **interest**, not as employment or certification.

© 2026 Adheesha Imada Kulasekara.

### Social sharing image

The included `og-cover.svg` is a starting graphic. After your site has its permanent domain, replace the `og:image` meta value in `index.html` with an **absolute HTTPS URL** to a compatible social preview image (preferably PNG, 1200 × 630 pixels). This is optional for the initial deployment.
