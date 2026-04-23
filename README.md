# Karan Shah — Portfolio Website

Personal portfolio site for Karan Shah, Subsea Controls and Automation Engineer.

## Files

```
index.html   — Main page (all content)
style.css    — Stylesheet (dark editorial theme, teal accent)
main.js      — Scroll animations, nav behavior, mobile menu
README.md    — This file
```

## How to Upload to GitHub Pages

### Option A — Simple GitHub Pages (recommended)

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name it `karan-shah` or `portfolio` or `yourusername.github.io`
   - Set visibility to **Public**
   - Click **Create repository**

2. **Upload the files**
   - Click **uploading an existing file** on the repo page
   - Drag and drop all four files: `index.html`, `style.css`, `main.js`, `README.md`
   - Click **Commit changes**

3. **Enable GitHub Pages**
   - Go to **Settings → Pages**
   - Under **Source**, select `Deploy from a branch`
   - Branch: `main`, folder: `/ (root)`
   - Click **Save**

4. **Your site will be live at:**
   - `https://yourusername.github.io/repository-name/`
   - (If the repo is named `yourusername.github.io`, the URL is just `https://yourusername.github.io`)

### Option B — Using Git CLI

```bash
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo
# Copy index.html, style.css, main.js into this folder
git add .
git commit -m "Add portfolio site"
git push origin main
```

Then follow step 3 above to enable GitHub Pages.

---

## Customisation

- **Update contact info**: Edit the Contact section in `index.html`
- **Change accent colour**: Edit `--accent` in `style.css` (default: `#00c2a8`)
- **Add a profile photo**: Add an `<img>` tag in the Hero section
- **Add a custom domain**: In GitHub Pages settings, enter your domain under "Custom domain"

---

Built with plain HTML, CSS, and JavaScript — no build tools required.
