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
};

export const listProject = atom<ListProject[]>([
  {
    name: "Proyecto 0",
    description:
      "cupiditate laboriosam corrupti beatae quae quaerat, dolores in. Explicabo fugit dolore ducimus, laborum asperiores temporibus beatae 0",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: ["opensource", "license MIT"],
    // tags: [],
    stack: [
      { name: "vue", color: "blue", icon: "logos:vue" },
      { name: "tailwind", color: "blue", icon: "logos:tailwindcss-icon" },
      { name: "typescript", color: "blue", icon: "logos:typescript-icon" },
    ],
    urlRepo: "https://github.com/darensh/proyecto0",
    urlDeploy: "https://www.google.com",
    date: "2024-01-01",
    author: "Daren Sh",
    level: "beginner",
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
      { name: "fastapi", color: "blue", icon: "logos:fastapi-icon" },
      { name: "postgresql", color: "blue", icon: "logos:postgresql" },
    ],
    urlRepo: "https://github.com/darensh/proyecto3",
    urlDeploy: "https://www.google.com",
    date: "2024-04-01",
    author: "Daren Sh",
    level: "beginner",
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
      { name: "FastAPI", color: "blue", icon: "logos:fastapi-icon" },
      { name: "PostgreSQL", color: "blue", icon: "logos:postgresql" },
    ],
    urlRepo: "https://github.com/darensh/proyecto4",
    urlDeploy: "https://www.google.com",
    date: "2024-05-01",
    author: "Daren Sh",
    level: "beginner",
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
  },
]);

export const getLastestProject = (limit: number = 3) => {
  const projects = listProject.get();
  return projects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
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
