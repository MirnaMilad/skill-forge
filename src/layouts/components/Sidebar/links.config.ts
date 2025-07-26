import { type NavLinkItem } from "./links.model";

export const ROUTES = {
  dashboard: "/dashboard",
  profile: "/profile",
  projects: "/projects",
  messages: "/messages",
  editProfile: "/profile/edit",
};

export const links: readonly NavLinkItem[] = [
  { to: ROUTES.dashboard, label: "Dashboard" },
  { to: ROUTES.profile, label: "Profile" },
  { to: ROUTES.projects, label: "Projects" },
  { to: ROUTES.messages, label: "Messages" },
  { to: ROUTES.editProfile, label: "Edit Profile" },
];
