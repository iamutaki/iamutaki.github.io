import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "IAMutaki",
  DESCRIPTION: "Personal website, blog, and projects by Ibnul Mutaki.",
  AUTHOR: "Ibnul Mutaki",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Companies I have worked with.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials — to add Medium, GitLab, etc., first add the icon to public/social.svg
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "ibnuul@gmail.com",
    HREF: "mailto:ibnuul@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "iamutaki",
    HREF: "https://github.com/iamutaki"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "ibnul-mutaki",
    HREF: "https://www.linkedin.com/in/ibnul-mutaki/",
  },
]
