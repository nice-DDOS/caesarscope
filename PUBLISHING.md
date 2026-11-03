# Publish CaesarScope — GitHub / Netlify / GitHub Pages

**Account used for this prepared guide:** [nice-DDOS](https://github.com/nice-DDOS) (confirm this is the desired account when publishing).  
**Important:** The repository `caesarscope` has **not** been created or published by this package. The following URLs are examples of the expected shape, **not verified live links**.

## Part 1 — Create your public GitHub repository

1. Go to [github.com/new](https://github.com/new), signed in as the account that should own the project.
2. Enter repository name **`caesarscope`**, visibility **Public** and click **Create repository**.
3. From your PC, **extract `CaesarScope-GitHub-Ready.zip`**.
4. On the repository page, select **Add file → Upload files** (or use the displayed *uploading an existing file* link).
5. Drag the **files and folders inside** the extracted project directory (not the ZIP file itself):

   ```text
   index.html
   app.js
   style.css
   README.md
   LICENSE
   _headers
   .nojekyll
   .gitignore
   SECURITY_AUDIT.md
   PUBLISHING.md
   assets/
   matlab/
   ```

   Browser-based upload may skip hidden dotfiles; if needed, add `.nojekyll` manually. **`index.html` must be at the repository root.**
6. Commit to the `main` branch.

**Alternative using Git from a terminal (after creating the empty GitHub repository):**

```bash
git init
git add .
git commit -m "Initial release: CaesarScope attack lab"
git branch -M main
git remote add origin https://github.com/nice-DDOS/caesarscope.git
git push -u origin main
```

These commands expect Git to be installed, authentication to be configured, and this folder to be the current directory. If the repository already has a README, merge histories instead of blindly overwriting files.

## Part 2 — Choose a live website URL

**Option A: GitHub Pages (easy, free for public repos)**

- Repository **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: /(root) → Save**.
- GitHub displays the live website under **Visit site** after it deploys.
- Expected URL pattern: `https://nice-DDOS.github.io/caesarscope/` — **not live until GitHub Pages is enabled and deployed**.

**Option B: Netlify (also works with this static project)**

- Open [app.netlify.com](https://app.netlify.com/) → **Add new project → Import an existing project → GitHub** → authorize/select `caesarscope`.
- Leave **Build command** empty and set **Publish directory** to `.` (the repository root).
- Publish. Netlify supplies a `*.netlify.app` URL after successful deployment and redeploys on future pushes to the connected branch.
- The included `_headers` adds browser security headers on Netlify. GitHub Pages does **not** process that file as response headers, but the HTML meta CSP still applies.

**For a first project I recommend GitHub Pages** so the same GitHub repository has a live link at no additional hosting setup. You can also publish to Netlify.

## Part 3 — Make it visible on your GitHub profile

- Open the repository page, click the gear near **About** and use:

  - Description: `Bilingual Caesar Cipher attack lab | Brute Force, Key Recovery & Interactive Challenges`
  - Website: the **actual** live website URL once published
  - Topics: `cybersecurity`, `cryptanalysis`, `caesar-cipher`, `brute-force`, `javascript`, `matlab`, `education`

- On your GitHub profile select **Customize your pins**, select `caesarscope`, and save the pinned repositories.
- The **README** contains screenshots, a description, instructions and a link to the security audit.

## Part 4 — Quick post-deploy security checks

- Confirm the live page uses **HTTPS** and loads on desktop and phone.
- Verify both languages, Caesar attack with `KHOOR ZRUOG`, creation of a classroom challenge and copying/opening its shared link.
- Browser developer tools → **Console / Network**: check for JS/CSP errors or unwanted outbound requests.
- For Netlify, inspect response headers for CSP, X-Content-Type-Options, Referrer-Policy and framing restrictions.
- Do not treat prepublication local code review as a penetration test of the live provider. Avoid using real passwords, personal data or secrets in Caesar ciphertext or challenge links.
