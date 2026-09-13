# iamutaki.github.io

Static personal site, built by GitHub Pages with Jekyll.

## Structure

```text
_layouts/default.html  shared <head> (fonts, CSS, analytics) + page skeleton
index.html             homepage (frontmatter + content)
work/index.html        work page (frontmatter + content)
_config.yml            site title/description, build excludes
css/style.css          pierre-style theme
fonts/                 Berkeley Mono
```

## Local preview

```bash
python3 -m http.server 4321
```

Open <http://localhost:4321>

## Deploy

Push to `main`: GitHub Pages builds and serves the repo root
(Settings → Pages → Deploy from a branch).
