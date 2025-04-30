import { atom } from "nanostores";

export type NavItem = {
  name: string;
  href: string;
  isActive: boolean;
};

export const navItems = atom<NavItem[]>([
  {
    name: "Home",
    href: "/",
    isActive: false,
  },
  // {
  //   name: "Experiencia",
  //   href: "/experience",
  //   isActive: false,
  // },
  {
    name: "Proyectos",
    href: "/projects",
    isActive: false,
  },
  {
    name: "Contacto",
    href: "/contact",
    isActive: false,
  },
]);
