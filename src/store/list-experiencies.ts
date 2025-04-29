import { atom } from "nanostores";

type Skill = {
  name: string;
  icon: string;
};

type Duration = {
  start: string;
  end: string;
};

export type ListExperience = {
  company: string;
  description: string;
  role: string;
  skills: Skill[];
  duration: Duration;
  companyUrl: string;
};

export const listExperience = atom<ListExperience[]>([
  {
    company: "Sainapsis",
    role: "Desarrollador FullStack",
    description:
      "cupiditate laboriosam corrupti beatae quae quaerat, dolores in. Explicabo fugit dolore ducimus, laborum asperiores temporibus beatae 0",
    skills: [
      { name: "vue", icon: "logos:vue" },
      { name: "tailwind", icon: "logos:tailwindcss-icon" },
      { name: "typescript", icon: "logos:typescript-icon" },
    ],
    duration: {
      start: "2024-04",
      end: "2025-01",
    },
    companyUrl: "https://www.sainapsis.com",
  },
  {
    company: "Proyecto 1",
    description:
      "cupiditate laboriosam corrupti beatae quae quaerat, dolores in. Explicabo fugit dolore ducimus, laborum asperiores temporibus beatae 1",
    role: "Desarrollador FullStack",
    skills: [
      { name: "vue", icon: "logos:vue" },
      { name: "tailwind", icon: "logos:tailwindcss-icon" },
      { name: "typescript", icon: "logos:typescript-icon" },
    ],
    duration: {
      start: "2024-04",
      end: "2025-01",
    },
    companyUrl: "https://www.sainapsis.com",
  },
]);
