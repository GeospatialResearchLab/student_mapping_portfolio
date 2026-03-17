// ================================
// Edit ONLY this file
// Put your information in the fields below
// ================================

window.studentData = {
  // Your name (shown in the header)
  name: "Your Name Here",

  // Short bio text (2–5 sentences). Appears under "About Me".
  bio: "Write a short bio here. Include your interests, major, and mapping focus.",

  // Optional: Short header sentence. If omitted, a default intro is shown.
  // headerIntro: "Welcome! Explore my projects below.",

  // Optional: Set a custom last updated date, e.g., "March 10, 2026".
  // If omitted, the page will use the file's last modified date.
  lastUpdated: "",

  // Portfolio items: add, remove, or edit items in this array.
  // For each item, choose type: "iframe" (interactive web map) OR "image" (static map).
  // For iframes, set src to the EMBED URL from your mapping platform.
  // For images, upload your image to the images/ folder and set src to that path.
  portfolio: [
    {
      title: "Project 1 Title",
      description: "Short description of project 1.",
      link: "https://example.com",
      type: "iframe",
      src: "https://example.com" // replace with your embed URL
    },
    {
      title: "Project 2 Title",
      description: "Short description of project 2.",
      link: "https://example.com",
      type: "image",
      src: "images/pexels-pixabay-50577.jpg" // replace with your uploaded image path
    },
    {
      title: "Project 3 Title",
      description: "Short description of project 3.",
      link: "https://example.com",
      type: "iframe",
      src: "https://example.com"
    }
  ]
};
