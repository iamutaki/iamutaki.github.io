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
gem install jekyll jekyll-sitemap jekyll-feed
jekyll serve --livereload
```

Open <http://localhost:4000>

## Deploy

Push to `main`: GitHub Pages builds and serves the repo root
(Settings → Pages → Deploy from a branch).
