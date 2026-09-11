# My Apprenticeship Learning Hub

A simple GitHub Pages website inspired by the structure of an off-the-job learning hub.

## Files

- `index.html` — page structure and content
- `style.css` — layout, typography and responsive design
- `script.js` — resource data, search and category filtering

## Personalising it

### 1. Change the title
Open `index.html` and change:

- `MY APPRENTICESHIP`
- `Off-the-job learning hub`
- `My apprenticeship learning hub`

### 2. Change the branding
The example uses a generic `MY ACADEMY` text logo. Replace it with your own name/logo if you have one.

### 3. Add your resources
Open `script.js`. Each resource looks like this:

```js
{
  title: "Your resource title",
  category: "technical",
  description: "A short description.",
  activity: "Something practical to try.",
  evidence: "What you could keep as evidence.",
  link: "https://example.com"
}
```

Available categories:

- `technical`
- `workplace`
- `projects`
- `professional`

### 4. Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css` and `script.js`.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save.
7. GitHub will provide your website address.

## Important

The layout is deliberately similar in overall structure to the reference page, but the branding, copy and example resources are original placeholders. Replace them with your own apprenticeship content and branding.
