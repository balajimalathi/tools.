import { SidebarNavItem, SiteConfig } from "@/types";

 

export const siteConfig: SiteConfig = {
  name: "Tools.",
  description:
    "Utility Tools for Developers",
  url: process.env.NEXT_PUBLIC_APP_URL ?? '',
  ogImage: `/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/balajimalathi_",
    github: "https://github.com/balajimalathi",
  },
  login: "/login",
  mailSupport: "balaji.m@skndan.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Legal",
    items: [
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
      { title: "Refunds", href: "/refunds" },
      { title: "About Us", href: "/about" },
    ],
  },
  {
    title: "Links",
    items: [
      { title: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Roadmap", href: "/roadmap" },
      { title: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Setup", href: "/docs/setup" },
    ],
  },
];
