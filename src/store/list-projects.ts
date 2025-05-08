import { atom } from "nanostores";

type Stack = {
  name: string;
  color: string;
  icon: string;
};

export type ListProject = {
  name: string;
  description: string;
  images: string[];
  tags: string[];
  stack: Stack[];
  urlRepo: string;
  urlDeploy: string;
  date: string;
  author: string;
  level: "beginner" | "intermediate" | "advanced";
  featured: boolean;
};

export const listProject = atom<ListProject[]>([
  {
    name: "Generador de Gráficas Dinámicas con Highcharts",
    description:
      "Endpoint backend que genera imágenes de gráficas personalizadas a partir de datos y configuraciones enviadas por el cliente. La solución permite automatizar reportes visuales y sigue siendo utilizada activamente en entornos productivos.",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"], // aquí puedes subir capturas reales si las tienes
    tags: ["backend", "automatización", "reporte visual"],
    stack: [
      { name: "python", color: "blue", icon: "logos:python" },
      { name: "flask", color: "orange", icon: "logos:flask" },
      { name: "docker", color: "blue", icon: "logos:docker-icon" },
      { name: "highcharts", color: "red", icon: "logos:highcharts" },
    ],
    urlRepo: "https://github.com/darensh/grafica-endpoint", // reemplaza con el enlace real si es público
    urlDeploy: "", // puedes dejarlo vacío si es privado o en entorno cerrado
    date: "2022-10-01",
    author: "Daren Sh",
    level: "advanced",
    featured: true,
  },
  {
    name: "Proyecto 1",
    description:
      "cupiditate laboriosam corrupti beatae quae quaerat, dolores in. Explicabo fugit dolore ducimus, laborum asperiores temporibus beatae 1",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: ["opensource", "license MIT"],
    // tags: [],
    stack: [
      { name: "vue", color: "blue", icon: "logos:vue" },
      { name: "tailwind", color: "blue", icon: "logos:tailwindcss-icon" },
      { name: "typescript", color: "blue", icon: "logos:typescript-icon" },
    ],
    urlRepo: "https://github.com/darensh/proyecto1",
    urlDeploy: "https://www.google.com",
    date: "2024-02-11",
    author: "Daren Sh",
    level: "beginner",
    featured: false,
  },
  {
    name: "Detección de Placas Vehiculares con CropperJS",
    description:
      "Aplicación web que permite seleccionar regiones de imágenes con CropperJS para detectar y aislar placas de vehículos. El sistema procesa la imagen recortada para identificar y extraer la matrícula, siendo útil como paso previo a reconocimiento de texto (OCR) o análisis de tráfico.",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"], // sustituye con capturas reales si puedes
    tags: ["image processing", "UI interactivity", "detección visual"],
    stack: [
      { name: "vue", color: "blue", icon: "logos:vue" },
      { name: "cropperjs", color: "green", icon: "mdi:crop" },
      { name: "typescript", color: "blue", icon: "logos:typescript-icon" },
      { name: "tailwind", color: "blue", icon: "logos:tailwindcss-icon" }
    ],
    urlRepo: "https://github.com/darensh/placa-cropper", // ajusta según tu repositorio
    urlDeploy: "https://placa-cropper.vercel.app", // o el que uses para demo online
    date: "2024-04-10",
    author: "Daren Sh",
    level: "intermediate",
    featured: true,
  },
  {
    name: "Proyecto 2",
    description:
      "cupiditate laboriosam corrupti beatae quae quaerat, dolores in. Explicabo fugit dolore ducimus, laborum asperiores temporibus beatae 2",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: ["Proyecto personal", "opensource", "license MIT"],
    // tags: [],
    stack: [
      { name: "react", color: "blue", icon: "logos:react" },
      { name: "tailwind", color: "blue", icon: "logos:tailwindcss-icon" },
      { name: "typescript", color: "blue", icon: "logos:typescript-icon" },
    ],
    urlRepo: "https://github.com/darensh/proyecto2",
    urlDeploy: "https://www.google.com",
    date: "2024-03-01",
    author: "Daren Sh",
    level: "beginner",
    featured: false,
  },
  {
    name: "Proyecto 3",
    description:
      "cupiditate laboriosam corrupti beatae quae quaerat, dolores in. Explicabo fugit dolore ducimus, laborum asperiores temporibus beatae 3",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: ["Privado", "license Apache 2.0"],
    // tags: [],
    stack: [
      { name: "python", color: "blue", icon: "logos:python" },
      { name: "FastApi", color: "blue", icon: "logos:fastapi-icon" },
      { name: "postgresql", color: "blue", icon: "logos:postgresql" },
    ],
    urlRepo: "https://github.com/darensh/proyecto3",
    urlDeploy: "https://www.google.com",
    date: "2024-04-01",
    author: "Daren Sh",
    level: "beginner",
    featured: false,
  },
  {
    name: "Proyecto 4",
    description:
      "cupiditate laboriosam corrupti beatae quae quaerat, dolores in. Explicabo fugit dolore ducimus, laborum asperiores temporibus beatae 4",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: ["LLM", "opensource", "license MIT"],
    // tags: [],
    stack: [
      { name: "OpenAI", color: "blue", icon: "logos:openai-icon" },
      { name: "FastApi", color: "blue", icon: "logos:fastapi-icon" },
      { name: "PostgreSQL", color: "blue", icon: "logos:postgresql" },
    ],
    urlRepo: "https://github.com/darensh/proyecto4",
    urlDeploy: "https://www.google.com",
    date: "2024-05-01",
    author: "Daren Sh",
    level: "beginner",
    featured: false,
  },
  {
    name: "Proyecto 5",
    description:
      "cupiditate laboriosam corrupti beatae quae quaerat, dolores in. Explicabo fugit dolore ducimus, laborum asperiores temporibus beatae 5",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: ["LLM", "opensource", "license MIT"],
    // tags: [],
    stack: [
      { name: "Java", color: "blue", icon: "logos:java" },
      { name: "Spring Boot", color: "blue", icon: "logos:spring-icon" },
      { name: "PostgreSQL", color: "blue", icon: "logos:postgresql" },
    ],
    urlRepo: "https://github.com/darensh/proyecto5",
    urlDeploy: "https://www.google.com",
    date: "2024-06-01",
    author: "Daren Sh",
    level: "beginner",
    featured: false,
  },
  {
    name: "Proyecto 6",
    description:
      "cupiditate laboriosam corrupti beatae quae quaerat, dolores in. Explicabo fugit dolore ducimus, laborum asperiores temporibus beatae 6",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: ["tag1", "tag2"],
    // tags: [],
    stack: [
      { name: "Go", color: "blue", icon: "logos:go" },
      { name: "Nginx", color: "blue", icon: "logos:nginx" },
      { name: "PostgreSQL", color: "blue", icon: "logos:postgresql" },
    ],
    urlRepo: "https://github.com/darensh/proyecto6",
    urlDeploy: "https://www.google.com",
    date: "2024-07-01",
    author: "Daren Sh",
    level: "beginner",
    featured: false,
  },
  {
    name: "Proyecto 7",
    description:
      "cupiditate laboriosam corrupti beatae quae quaerat, dolores in. Explicabo fugit dolore ducimus, laborum asperiores temporibus beatae 7",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: ["tag1", "tag2", "tag3", "tag4"],
    // tags: [],
    stack: [
      { name: "C", color: "blue", icon: "logos:c" },
      { name: "Docker", color: "blue", icon: "logos:docker-icon" },
      { name: "Kubernetes", color: "blue", icon: "logos:kubernetes" },
    ],
    urlRepo: "https://github.com/darensh/proyecto7",
    urlDeploy: "https://www.google.com",
    date: "2024-08-01",
    author: "Daren Sh",
    level: "beginner",
    featured: false,
  },
]);

export const getFeaturedProject = (limit: number = 3) => {
  const projects = listProject.get();
  return projects.filter((p) => p.featured);
};

export const getAllTags = () =>
  new Set(
    listProject
      .get()
      .map((project) => project.tags)
      .flat(),
  );

export const getAllSkills = () =>
  new Set(
    listProject
      .get()
      .map((project) => project.stack.map((skill) => skill.name))
      .flat(),
  );

export const extractTags = (project: ListProject) => [...new Set(project.tags)];

export const extractSkills = (project: ListProject) => [
  ...new Set(project.stack.map((skill) => skill.name)),
];
