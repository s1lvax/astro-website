import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Cesario Silva",
  DESCRIPTION: "Welcome to my website. Here's a little about me.",
  AUTHOR: "Cesario Silva",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

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
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "silva@cfsilva.com",
    HREF: "mailto:silva@cfsilva.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "s1lvax",
    HREF: "https://github.com/s1lvax",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "My LinkedIn Profile",
    HREF: "https://www.linkedin.com/in/cesario-silva-0b40a31ab/",
  },
];
