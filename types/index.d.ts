import { User } from "@prisma/client";
import type { Icon } from "lucide-react";

import { Icons } from "@/components/shared/icons";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  login: string,
  links: {
    twitter: string;
    github: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  badge?: number;
  disabled?: boolean;
  external?: boolean;
  authorizeOnly?: UserRole;
  icon?: keyof typeof Icons;
};

export type MainNavItem = NavItem;

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type SidebarNavItem = {
  title: string;
  items: NavItem[];
  authorizeOnly?: UserRole;
  icon?: keyof typeof Icons;
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

// subcriptions
export type SubscriptionPlan = {
  planId: string;
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    usd: {
      monthly: number;
      yearly: number;
    },
    inr: {
      monthly: number;
      yearly: number;
    },
  };
  currency: string;
  razorPayIds: {
    usd: {
      monthly: string | null;
      yearly: string | null;
    },
    inr: {
      monthly: string | null;
      yearly: string | null;
    }
  }
};

// compare plans
export type ColumnType = string | boolean | null;
export type PlansRow = { feature: string; tooltip?: string } & {
  [key in (typeof plansColumns)[number]]: ColumnType;
};

// landing sections
export type InfoList = {
  icon: keyof typeof Icons;
  title: string;
  description: string;
};

export type InfoLdg = {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
};

export type FeatureLdg = {
  title: string;
  description: string;
  link: string;
  icon: string;
};

export type TestimonialType = {
  name: string;
  job: string;
  image: string;
  review: string;
};

export type GitHubRepository = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};


export type Dashboard = {
  repos: number;
  generated: number;
  published: number;
  triggers: number;
};

export type GitHubBranch = {
  name: string;
  protected: boolean;
};