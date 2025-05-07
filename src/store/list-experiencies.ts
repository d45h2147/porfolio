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
  achievements: string[];
  skills: Skill[];
  duration: Duration;
  companyUrl: string;
};

export const listExperience = atom<ListExperience[]>([
  {
    company: "Sainapsis Inc",
    role: "Desarrollador FullStack",
    description: `
      Diseñé y desarrollé soluciones de software end-to-end orientadas a la escalabilidad, mantenibilidad y automatización inteligente,
      contribuyendo directamente al fortalecimiento de la infraestructura técnica de la empresa.
      Implementé funcionalidades con inteligencia artificial para potenciar la innovación del producto final.
    `,
    achievements: [
      "Desarrollé un task manager inteligente que detectaba automáticamente tareas dentro de mensajes de clientes, integrando frontend, backend y diseño de base de datos, con una arquitectura hexagonal agnóstica a LLMs.",
      "Fui pionero en la adopción de esta arquitectura dentro de la empresa, creando proyectos base reutilizables para futuras funcionalidades de IA.",
      "Implementé hard-sync en la app móvil, usando Zod para validar datos y garantizar sincronización confiable incluso offline.",
      "Diseñé microservicios modulares y escalables aplicando principios SOLID que facilitaron el desarrollo de nuevas funcionalidades sin comprometer estabilidad.",
      "Establecí buenas prácticas técnicas adoptadas por otros equipos, mejorando la calidad y consistencia del código",
    ],
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "React Native", icon: "logos:react" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Typescript", icon: "logos:typescript-icon" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Zod", icon: "logos:zod" },
      { name: "SQLite", icon: "logos:sqlite" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Python", icon: "logos:python" },
      { name: "FastApi", icon: "logos:fastapi-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "OpenAI", icon: "logos:openai-icon" },
      { name: "LLM", icon: "mdi:chip-arrow-down" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Open Search", icon: "logos:aws-open-search" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Go", icon: "logos:go" },
      { name: "Hexagonal Architecture", icon: "mdi:hexagon-slice-6" },
      { name: "Principles SOLID", icon: "logos:solid" },
      { name: "RAG (Retrieval-Augmented Generation)", icon: "mdi:storage" },
    ],
    duration: {
      start: "2024-04",
      end: "2025-02",
    },
    companyUrl: "https://www.sainapsis.com",
  },
  {
    company: "Vanilla Byte",
    role: "CTO",
    description: `En Sainapsis, me encargue de desarrollar soluciones completas, desde el frontend hasta el backend, asegurando aplicaciones robustas y escalables.`,
    achievements: [
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
    description: `
      En Sainapsis, me encargue de desarrollar soluciones completas, desde el frontend hasta el backend, 
      asegurando aplicaciones robustas y escalables.
    `,
    achievements: [
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
    achievements: [
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
    achievements: [
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
