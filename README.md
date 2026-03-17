# Quick Start

This repository is a **break-proof personal portfolio** for GitHub Pages. You only edit **one file**: `student-data.js`. The HTML structure stays locked so you can’t accidentally break the layout.

---

## 1) Fork This Repository

1. Click **Fork** (top‑right) and choose your account.
2. You now have your **own copy** of the site.

---

## 2) Edit Your Info in `student-data.js`

1. Open **`student-data.js`** and click the **pencil (✏️)** to edit.
2. Fill in:
   - `name`: your full name
   - `bio`: a short bio (2–5 sentences)
   - `lastUpdated` (optional): e.g., "March 10, 2026" (or leave blank to use file-modified date)
   - `portfolio`: update each item:
     - `title`: project title
     - `description`: short description
     - `link`: external link for the project (if any)
     - `type`: **"iframe"** (interactive web map) **or** **"image"** (static map)
     - `src`:
       - If `type` is **"iframe"**, paste the **embed URL** of your web map.
       - If `type` is **"image"**, use a path to an uploaded image in `images/`.
3. Click **Commit changes**.

> **Tip for embeds:** On ArcGIS Online, Mapbox, Google Maps, etc., use **Share → Embed** to copy the correct iframe URL.

---

## 3) Upload Static Map Images (If Using Images)

1. Click the **`images/`** folder.
2. **Add file → Upload files**.
3. Upload your `.png`, `.jpg`, or `.webp` images.
4. In `student-data.js`, set `src` to the uploaded filename, e.g. `images/my-map.png`.

A placeholder file **`images/placeholder-map.svg`** is provided.

---

## 4) Publish With GitHub Pages

1. Go to **Settings → Pages**.
2. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Click **Save**. After ~1 minute, GitHub shows the live site URL.

---

## 5) Troubleshooting

- **Nothing shows / broken layout?** Make sure you only edited `student-data.js`.
- **Image not loading?** Confirm the file is in `images/` and the path matches exactly (case-sensitive).
- **Embed not loading?** Some platforms require special **embed URLs** or do not allow embedding. Use their **Share → Embed** option.
- **Want more or fewer items?** Add or remove entries in the `portfolio` array in `student-data.js`.

---

## How It Works

- `index.html` loads your data from `student-data.js` and renders the page using vanilla JavaScript.
- You don’t need any build tools. This is a static site that works on **GitHub Pages**.

---

**Credit:** Page tools provided by the **Geospatial Research Lab**.
