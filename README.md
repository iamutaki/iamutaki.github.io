# iamutaki.github.io

Static personal site. No build step — plain HTML and CSS.

## Structure

```
index.html       homepage
work/index.html  work page
css/style.css    pierre-style theme
fonts/           Berkeley Mono
```

## Local preview

```bash
python3 -m http.server 4321
```

Open http://localhost:4321

## Deploy

Push to `main` — GitHub Actions deploys the repo root to GitHub Pages.
