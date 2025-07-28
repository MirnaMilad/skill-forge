import { type RouteMeta } from "./ContentLayout.model";

export const routeTitles: Record<string, RouteMeta> = {
  "/profile": {
    title: "My Profile",
  },
  "/projects": {
    title: "Find Projects",
    action: {
      buttonLabel: "Add Project",
      to: "/projects/add",
    },
  },
  "/projects/add": {
    title: "Add New Project",
  },
  "/users": {
    title: "User List",
    action: {
      buttonLabel: "Add User",
      to: "/users/add",
    },
  },
  "/users/add": {
    title: "Add New User",
  },
  "/settings": {
    title: "Settings",
  },
};
