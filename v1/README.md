
# Student Portfolio – Instructions

Welcome! This repository contains a **simple one‑page portfolio website** that you can personalize and publish for free using **GitHub Pages**.

You will edit **one file**: `index.html`  
…and optionally add your own static map images inside the `images/` folder.

Follow the steps below to personalize your site.

---

## 1. Fork This Repository

1. Click the **Fork** button in the top‑right of GitHub.  
2. Choose your own GitHub account.  
3. After forking, you’ll have your **own copy** of the site.

---

## 2. Open the Site File for Editing

1. In your forked repository, click **`index.html`**.  
2. Click the **pencil icon (✏️)** in the top-right to edit the file in your browser.

You will see the full HTML code, but you only need to edit a few clearly marked sections.

---

## 3. Replace the Page Title With Your Name

Look for this line near the top of the page:

```html
<h1>[Student Name]</h1>
```

Replace the text inside the `<h1>` tag with **your name**, for example:

```html
<h1>Jordan Smith</h1>
```

This updates the large title at the top of your site.

---

## 4. Replace the Bio Text With Your Own

Scroll to the **About Me** section and look for:

```html
<p>
  Replace this text with a brief bio...
</p>
```

Delete the placeholder text and type a short bio (2–5 sentences).

---

## 5. Update Your Portfolio Items

Your site includes **three portfolio items**.  
Each item has:

- a **title**
- a **short description**
- a **project link**
- **either** an interactive **iframe web map**  
  **or** a **static image** of a map

### A. Update the Title

Look for:

```html
<h3>Portfolio Item 1 Title</h3>
```

Replace with your project title, for example:

```html
<h3>Bike Network Accessibility Map</h3>
```

### B. Update the Description

Right below the title, replace the placeholder paragraph with your own project description.

### C. Update the “View Project” Link

Find the link:

```html
<a class="portfolio-link" href="https://example.com" ...>
```

Replace the `href` with your project’s URL.

---

## 6. Choose How to Show Your Map  
### (Interactive iframe **OR** static image)

Every portfolio item includes **both** options.  
You will use **one** and delete or comment out the other.

---

### Option 1 — Interactive Web Map (iframe)

If your project is a web map, keep the iframe:

```html
<div class="media-wrapper">
  <iframe src="https://example.com" ...></iframe>
</div>
```

Replace `https://example.com` with your **embed URL** from your mapping platform.

> Tip: On Mapbox, ArcGIS Online, Google Maps, and similar tools, look for a  
> **Share → Embed map** option to get the correct iframe link.

---

### Option 2 — Static Map Image

If your project is a static map instead of an interactive one:

1. **Upload your image**  
   - Click the **images/** folder  
   - Click **Add file → Upload files**  
   - Upload your `.png`, `.jpg`, or `.webp` image  
2. **Find the commented-out image block**:

```html
<!--
<div class="media-wrapper">
  <img src="images/placeholder-map.svg"
       alt="Static map for Portfolio Item 1"
       class="static-map-image">
</div>
-->
```

3. **Uncomment it** by deleting the `<!--` and `-->` so it becomes:

```html
<div class="media-wrapper">
  <img src="images/my-map.png"
       alt="Static map for Portfolio Item 1"
       class="static-map-image">
</div>
```

4. Replace `my-map.png` with the filename you uploaded.  
5. **Delete or comment out the iframe** block above it.

Only one display option should remain in each portfolio item.

---

## 7. Save Your Changes

1. Scroll to the bottom of the GitHub editor.  
2. Enter a short commit message like:  
   **“Updated my portfolio info”**  
3. Click **Commit changes**.

---

## 8. Publish Your Site With GitHub Pages

1. Go to **Settings** in your repository.  
2. Click **Pages** on the left.  
3. Under “Build and deployment,” choose:
   - **Source: `Deploy from a branch`**
   - **Branch: `main`**
   - **Folder: `/ (root)`**
4. Click **Save**.

After about a minute, GitHub Pages will provide a link to your published portfolio:

```
https://yourusername.github.io/your-repo-name/
```

Share that link as your final project!

---

## 9. (Optional) Update the Footer Date

At the bottom of `index.html`, you’ll see:

```html
Last updated: <span>March 10, 2026</span>
```

You may update this to today’s date.

---

## Troubleshooting

If part of your page “disappears,” the most common cause is:

- an accidentally **unclosed HTML comment** (`<!-- ...`)  
- deleting only part of the iframe or image block  
- a **mismatched `<div>`**  
- referencing an image file name that doesn’t exist in the `images/` folder

If you need help, reach out and we can fix it together.

---

Enjoy building your portfolio!
