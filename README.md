# Rahmas Biryani — Catering Landing Page

A simple, responsive, ready-to-publish catering website created from your supplied Rahmas Biryani logo, menu and promotional images.

## Features
- Premium black, gold and cream design; mobile, tablet and desktop friendly.
- Real Rahmas Biryani logo, mutton biryani imagery, menu poster and six event counter images.
- Sections for weddings/Nikkah, family events, parties and corporate events.
- Grand Nikkah menu and optional live counter services.
- Working phone, Google Maps search and WhatsApp enquiry links.
- Enquiry form pre-fills WhatsApp with name, number, event type, date, guests and location.
- Static website: no paid server, third-party libraries or deployment build step.

## How to publish on GitHub Pages

1. Extract the ZIP on your computer. You should see `index.html`, `styles.css`, `script.js`, `README.md` and an `assets` folder.
2. Sign in to https://github.com/ and create a **Public** repository named `rahmas-biryani` under your personal account or organization. **Do not overwrite any existing business website repository.**
3. Open your new repository, choose **Add file → Upload files**. Upload `index.html`, `styles.css`, `script.js` and the entire `assets` folder. Make sure `index.html` is in the repository root, not in a subfolder.
4. Commit the files to your default branch (`main`).
5. Navigate to **Settings → Pages** and select **Deploy from a branch**, then `main` and `/ (root)`. Select **Save**.
6. Wait for GitHub to finish deployment; open the public link shown in **Settings → Pages**.

If your repository owner is `rahmasdigital` and repo name is `rahmas-biryani`, the usual URL is:

`https://rahmasdigital.github.io/rahmas-biryani/`

Your exact URL depends on the owner and repository name you use.

## Customization

- **WhatsApp destination:** Edit `BUSINESS_WHATSAPP` in `script.js` and the `floating-whatsapp` link in `index.html`.
- **Contact number/address:** Edit the visible phone and address text in `index.html`.
- **Menu, counters and event categories:** Edit the corresponding content sections in `index.html`.
- **Colors and styling:** Edit the `:root` CSS variables in `styles.css`.
- **Photos:** Replace images in `assets` while keeping the same filenames, or update their paths in `index.html`.

## How leads work (important)

This is a **WhatsApp-based enquiry website**, not a backend/CRM system. When visitors complete the form, it opens WhatsApp with their enquiry prefilled. **They must tap Send** to deliver it. The website does **not** save leads in a database, automatically send messages, or email details. All images and text are included locally; Google Maps and WhatsApp require internet access.

For automated lead capture later, the form can be connected to a suitable form handler or backend service. Do not insert private credentials into JavaScript files published on GitHub.

## Run locally

Double-click `index.html` in your browser. For best testing, you can run a local static server from the extracted directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
