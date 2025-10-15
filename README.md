# Samriddhi

Samriddhi MVP

## Typography

The interface uses a shared sans-serif stack that starts with **Inter** for Latin text
and gracefully falls back to **Mukta**, **Noto Sans Devanagari**, and **Hind** so that
Marathi content renders crisply alongside English labels. You can reuse the exact
stack anywhere on the site with CSS:

```css
body {
  font-family: "Inter", "Mukta", "Noto Sans Devanagari", "Hind", system-ui,
    -apple-system, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif;
}
```

This is defined once in `styles.css` as the `--font-sans` custom property, which is
applied to the `<body>` element across every page of the application.
