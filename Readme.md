# InstaSave Navigator

InstaSave Navigator is a Chrome extension that lets you instantly jump to your **oldest saved Instagram post** using ultra-fast client-side scrolling.

Instagram does not provide a built-in way to navigate to the first saved post. This extension solves that problem in one click.

---

## Features

- Ultra-fast automatic scrolling through saved posts
- Automatically highlights the oldest saved post
- One-click usage from the Chrome toolbar
- Fully client-side (no APIs, no backend, no data collection)
- Clean dark-themed popup UI

---

## Tech Stack

- JavaScript (ES6)
- Chrome Extensions API (Manifest V3)
- DOM manipulation
- Infinite scroll boundary detection

---

## Installation & Usage (Step-by-Step)

Follow **all steps in order**.

### Step 1: Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/anakinskywalker0903/instasave-navigator.git
```

Or download the ZIP from GitHub and extract it.

### Step 2: Open Chrome Extensions Page

1. Open Google Chrome
2. In the address bar, go to:

```
chrome://extensions
```

### Step 3: Enable Developer Mode

1. On the top-right corner of the Extensions page
2. Turn ON the toggle for **Developer Mode**

### Step 4: Load the Extension

1. Click **Load unpacked**
2. Select the folder:

```
instasave-navigator
```

3. Click **Select Folder**

✅ The extension is now installed in Chrome.

### Step 5: Open Instagram

1. Go to:

```
https://www.instagram.com
```

2. Log in to your account if not already logged in

### Step 6: Open Saved Posts

Navigate to your saved posts:

```
https://www.instagram.com/saved
```

Wait for the page to fully load.

### Step 7: Use InstaSave Navigator

1. Click the **InstaSave Navigator** icon in the Chrome toolbar
2. Click **"Go to First Saved"**

#### What Happens Next

- The page automatically scrolls very fast
- Scrolling stops when no more posts load
- Your oldest saved post is highlighted

No manual scrolling is required.

---

## Important Notes

- Works only on Instagram Saved posts
- Page must be fully loaded before clicking the extension
- Scrolling speed is optimized for Instagram's lazy loading
- Tested on Chrome (desktop)

---

## Project Motivation

Instagram saved posts can grow into hundreds or thousands over time, but there is no way to jump to the oldest one.

This extension bridges that UX gap using safe, ethical DOM automation without using private APIs or violating platform rules.

---

## Resume Description

Developed a Chrome extension that enables instant navigation to the oldest saved Instagram post using high-speed DOM automation and infinite-scroll boundary detection.

---

## License

This project is intended for educational and personal productivity use.