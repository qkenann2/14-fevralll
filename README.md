# Personal Website — GitHub Pages

This repository contains a static personal website ready to publish with GitHub Pages.

Quick publish steps (repo is public, branch `main`):

1. Commit and push your local changes to the `main` branch:

```powershell
git add .
git commit -m "Publish personal website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

2. Enable GitHub Pages on GitHub:
- Go to Settings → Pages
- Under Source choose `main` branch and folder `/ (root)`
- Save and note the published URL (https://<your-username>.github.io/<your-repo>/)

3. (Optional) Custom domain:
- If you have a domain, create a file named `CNAME` with your domain on a single line (e.g., `www.example.com`) and push it to the repo root.
- Configure your DNS records as described in GitHub Pages docs.

Notes:
- A file named `.nojekyll` is included to disable Jekyll processing so files and folders starting with underscores are served as-is.
- If you need me to create the `CNAME` file, tell me your domain and I will add it.
# Personal Portfolio Website

A clean, static personal portfolio website built with HTML, CSS, and JavaScript.

## Folder Structure

```
personal-website/
├── index.html              # Home page (entry point)
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # Main JavaScript file
├── assets/
│   └── images/            # Profile picture, project screenshots, icons
├── projects/              # Individual project pages (optional)
│   ├── project1.html
│   └── project2.html
├── README.md              # Project documentation
└── .gitignore             # Git ignore file
```

## File Descriptions

- **index.html** - Main landing page with navigation, hero section, about, projects, and contact
- **css/style.css** - Global styling, layout, colors, and responsive design
- **js/script.js** - Interactive features like smooth scrolling, form validation, animations
- **assets/images/** - Store all images (profile pic, project screenshots, icons)
- **projects/** - Optional subfolder for detailed project pages
- **README.md** - Documentation for GitHub Pages and future developers

## Deployment

1. Push your code to GitHub
2. In repository settings, enable GitHub Pages
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/personal-website`

## Development Tips

- Keep CSS organized and mobile-first
- Use semantic HTML5 elements
- Optimize images for web
- Test across different browsers
- Keep JavaScript files modular and documented
