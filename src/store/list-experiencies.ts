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
  logros: string[];
  skills: Skill[];
  duration: Duration;
  companyUrl: string;
};

export const listExperience = atom<ListExperience[]>([
  {
    company: "Vanilla Byte",
    role: "CTO",
    description: `En Sainapsis, me encargue de desarrollar soluciones completas, desde el frontend hasta el backend, asegurando aplicaciones robustas y escalables.`,
    logros: [
      "En el frontend, integro servicios en aplicaciones nativas y web, desarrollando la lógica necesaria para sincronizar datos con bases de datos locales y creando componentes personalizados y vistas funcionales basadas en los diseños UX/UI propuestos en Figma.",
      "En el backend, diseño y desarrollo microservicios escalables y flexibles utilizando AWS Lambda y AWS ECS, trabajando con arquitecturas como hexagonal, monorepo y monolíticas. Además, implemento funcionalidades de inteligencia artificial mediante RAG (Retrieval-Augmented Generation), utilizando consultas a LLMs para atender necesidades específicas del negocio.",
      "Mis herramientas principales incluyen Python, FastAPI, Boto3, y AWS Powertools, con un enfoque constante en la calidad, eficiencia y escalabilidad del desarrollo.",
    ],
    skills: [
      { name: "vue", icon: "logos:vue" },
      { name: "tailwind", icon: "logos:tailwindcss-icon" },
      { name: "typescript", icon: "logos:typescript-icon" },
      { name: "python", icon: "logos:python" },
    ],
    duration: {
      start: "2024-04",
      end: "2025-02",
    },
    companyUrl: "https://www.sainapsis.com",
  },
  {
    company: "Sainapsis Inc",
    role: "Desarrollador FullStack",
    description: `En Sainapsis, me encargue de desarrollar soluciones completas, desde el frontend hasta el backend, asegurando aplicaciones robustas y escalables.`,
    logros: [
      "En el frontend, integro servicios en aplicaciones nativas y web, desarrollando la lógica necesaria para sincronizar datos con bases de datos locales y creando componentes personalizados y vistas funcionales basadas en los diseños UX/UI propuestos en Figma.",
      "En el backend, diseño y desarrollo microservicios escalables y flexibles utilizando AWS Lambda y AWS ECS, trabajando con arquitecturas como hexagonal, monorepo y monolíticas. Además, implemento funcionalidades de inteligencia artificial mediante RAG (Retrieval-Augmented Generation), utilizando consultas a LLMs para atender necesidades específicas del negocio.",
      "Mis herramientas principales incluyen Python, FastAPI, Boto3, y AWS Powertools, con un enfoque constante en la calidad, eficiencia y escalabilidad del desarrollo.",
    ],
    skills: [
      { name: "vue", icon: "logos:vue" },
      { name: "tailwind", icon: "logos:tailwindcss-icon" },
      { name: "typescript", icon: "logos:typescript-icon" },
      { name: "python", icon: "logos:python" },
    ],
    duration: {
      start: "2024-04",
      end: "2025-02",
    },
    companyUrl: "https://www.sainapsis.com",
  },
  {
    company: "Alfa Eye",
    role: "Desarrollador FullStack",
    description: `En Sainapsis, me encargue de desarrollar soluciones completas, desde el frontend hasta el backend, asegurando aplicaciones robustas y escalables.`,
    logros: [
      "En el frontend, integro servicios en aplicaciones nativas y web, desarrollando la lógica necesaria para sincronizar datos con bases de datos locales y creando componentes personalizados y vistas funcionales basadas en los diseños UX/UI propuestos en Figma.",
      "En el backend, diseño y desarrollo microservicios escalables y flexibles utilizando AWS Lambda y AWS ECS, trabajando con arquitecturas como hexagonal, monorepo y monolíticas. Además, implemento funcionalidades de inteligencia artificial mediante RAG (Retrieval-Augmented Generation), utilizando consultas a LLMs para atender necesidades específicas del negocio.",
      "Mis herramientas principales incluyen Python, FastAPI, Boto3, y AWS Powertools, con un enfoque constante en la calidad, eficiencia y escalabilidad del desarrollo.",
    ],
    skills: [
      { name: "vue", icon: "logos:vue" },
      { name: "tailwind", icon: "logos:tailwindcss-icon" },
      { name: "typescript", icon: "logos:typescript-icon" },
      { name: "python", icon: "logos:python" },
    ],
    duration: {
      start: "2024-04",
      end: "2025-02",
    },
    companyUrl: "https://www.sainapsis.com",
  },
  {
    company: "Energia Solar ESWindows",
    role: "Ingeniero de desarrollo de software",
    description: `En Sainapsis, me encargue de desarrollar soluciones completas, desde el frontend hasta el backend, asegurando aplicaciones robustas y escalables.`,
    logros: [
      "En el frontend, integro servicios en aplicaciones nativas y web, desarrollando la lógica necesaria para sincronizar datos con bases de datos locales y creando componentes personalizados y vistas funcionales basadas en los diseños UX/UI propuestos en Figma.",
      "En el backend, diseño y desarrollo microservicios escalables y flexibles utilizando AWS Lambda y AWS ECS, trabajando con arquitecturas como hexagonal, monorepo y monolíticas. Además, implemento funcionalidades de inteligencia artificial mediante RAG (Retrieval-Augmented Generation), utilizando consultas a LLMs para atender necesidades específicas del negocio.",
      "Mis herramientas principales incluyen Python, FastAPI, Boto3, y AWS Powertools, con un enfoque constante en la calidad, eficiencia y escalabilidad del desarrollo.",
    ],
    skills: [
      { name: "vue", icon: "logos:vue" },
      { name: "tailwind", icon: "logos:tailwindcss-icon" },
      { name: "typescript", icon: "logos:typescript-icon" },
      { name: "python", icon: "logos:python" },
    ],
    duration: {
      start: "2024-04",
      end: "2025-02",
    },
    companyUrl: "https://www.sainapsis.com",
  },
  {
    company: "Construseñales",
    role: "Desarrollador junior",
    description:
      "cupiditate laboriosam corrupti beatae quae quaerat, dolores in. Explicabo fugit dolore ducimus, laborum asperiores temporibus beatae 1",
    logros: [
      "En el frontend, integro servicios en aplicaciones nativas y web, desarrollando la lógica necesaria para sincronizar datos con bases de datos locales y creando componentes personalizados y vistas funcionales basadas en los diseños UX/UI propuestos en Figma.",
      "En el backend, diseño y desarrollo microservicios escalables y flexibles utilizando AWS Lambda y AWS ECS, trabajando con arquitecturas como hexagonal, monorepo y monolíticas. Además, implemento funcionalidades de inteligencia artificial mediante RAG (Retrieval-Augmented Generation), utilizando consultas a LLMs para atender necesidades específicas del negocio.",
      "Mis herramientas principales incluyen Python, FastAPI, Boto3, y AWS Powertools, con un enfoque constante en la calidad, eficiencia y escalabilidad del desarrollo.",
    ],
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
