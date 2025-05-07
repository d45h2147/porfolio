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
    company: "Vanillabyte",
    role: "Fundador y CTO",
    description: `
      Desde 2024 lidero Vanillabyte, una iniciativa de desarrollo de software en la que gestiono proyectos
      tecnológicos end-to-end para clientes empresariales. Combino dirección técnica con ejecución práctica,
      desde diseño en Figma hasta desarrollo de soluciones funcionales.
    `,
    achievements: [
      "Desarrollé una landing page profesional para una empresa del sector Automobilistico, optimizada para velocidad, SEO y captación de clientes.",
      "Diseñé y construí un design system completo en Angular, desde su estructura visual en Figma hasta componentes reutilizables funcionales, adaptados a los requerimientos de futuras integraciones.",
      "Gestioné todas las etapas de desarrollo en ambos casos: levantamiento de requerimientos, arquitectura, implementación, QA y despliegue.",
    ],
    skills: [
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "Vue.JS 3", icon: "logos:vue" },
      { name: "React", icon: "logos:react" },
      { name: "React Native", icon: "logos:react" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Pinia", icon: "logos:pinia" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Zod", icon: "logos:zod" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Python", icon: "logos:python" },
      { name: "FastApi", icon: "logos:fastapi-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "OpenAI", icon: "logos:openai-icon" },
      { name: "LLM", icon: "mdi:chip-arrow-down" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Bash", icon: "logos:bash-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
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
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Zod", icon: "logos:zod" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Python", icon: "logos:python" },
      { name: "FastApi", icon: "logos:fastapi-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "OpenAI", icon: "logos:openai-icon" },
      { name: "LLM", icon: "mdi:chip-arrow-down" },
      { name: "SQLite", icon: "logos:sqlite" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Open Search", icon: "logos:aws-open-search" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Go", icon: "logos:go" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Bash", icon: "logos:bash-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "ZenHub", icon: "logos:zenhub-icon" },
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
    company: "Alfa Eye",
    role: "Desarrollador FullStack",
    description: `
      Lideré el desarrollo de soluciones digitales estratégicas para ALFAEYE,
      gestionando el ciclo completo de proyectos: desde el levantamiento de requerimientos hasta el despliegue en producción.
      Coordiné la integración entre equipos, asegurando la entrega de productos robustos,
      escalables y alineados con los objetivos del negocio.
    `,
    achievements: [
      "Diseñé y desarrollé desde cero la plataforma principal de ALFAEYE, llevando el proyecto desde requerimientos hasta producción y convirtiéndolo en un producto clave para la operación interna y de clientes.",
      "Logré reducir los tiempos de entrega y errores en despliegues mediante la implementación de pipelines estables y entornos Docker seguros y versionados.",
      "Optimizé la comunicación entre backend y frontend mediante una arquitectura clara y desacoplada, mejorando el rendimiento y reduciendo errores de integración en un 40%.",
      "Estandaricé estructuras de bases de datos flexibles y escalables, facilitando futuras integraciones con nuevos módulos y funcionalidades.",
      // "Consolidé buenas prácticas de integración continua y despliegue, mejorando la resiliencia del sistema en entornos reales.",
      "Consolidé procesos de desarrollo que aumentaron la estabilidad del producto en producción, reduciendo incidencias técnicas post-lanzamiento en un 70%.",
    ],
    skills: [
      { name: "Vue.JS 3", icon: "logos:vue" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "HighCharts", icon: "logos:highcharts" },
      { name: "PrimeVue", icon: "mdi:file-compare" },
      { name: "Pinia", icon: "logos:pinia" },
      { name: "Python", icon: "logos:python" },
      { name: "Flask", icon: "logos:flask" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Sentry", icon: "vscode-icons:file-type-sentry" },
      { name: "JSON", icon: "mdi:code-json" },
      { name: "Azure", icon: "logos:microsoft-azure" },
      { name: "AWS", icon: "logos:aws" },
      { name: "SQL Server", icon: "logos:microsoft-icon" },
      { name: "SQL", icon: "vscode-icons:file-type-sql" },
      { name: "SP/SQL", icon: "vscode-icons:file-type-sql" },
      { name: "CI/CD", icon: "mdi:chemical-weapon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Nginx", icon: "logos:nginx" },
      { name: "Principles SOLID", icon: "logos:solid" },
      { name: "Microservicios", icon: "mdi:local-area-network" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "GitLab", icon: "logos:gitlab" },
      { name: "Bash", icon: "logos:bash-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
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
    description: `
      Lideré el desarrollo de microservicios y el diseño de interfaces modernas,
      contribuyendo al crecimiento tecnológico de la empresa.
      Combiné backend robusto con frontend enfocado en experiencia de usuario,
      entregando soluciones escalables, funcionales y visualmente consistentes.
    `,
    achievements: [
      "Desarrollé un endpoint dinámico capaz de renderizar imágenes a partir de datos y configuraciones personalizadas (colores, etiquetas, tipo de gráfico), utilizando Flask, Highcharts y Docker. La solución sigue en uso como herramienta clave en la generación automática de reportes visuales, adaptándose a múltiples casos de uso sin requerir cambios de código.",
      "Desarrollé microservicios escalables en Python que mejoraron la capacidad de respuesta del sistema ante cargas crecientes y nuevas funcionalidades del negocio.",
      "Diseñé y desplegué interfaces con Vue.js que mejoraron la experiencia de usuario, combinando funcionalidad y estética en plataformas internas clave.",
      "Transformé la interfaz de usuario mediante la integración de Vuetify, logrando mayor coherencia visual y reduciendo los errores de navegación en entornos productivos.",
      "Introduje buenas prácticas de desarrollo frontend y patrones de diseño que facilitaron el mantenimiento y evolución de la interfaz.",
    ],
    skills: [
      { name: "Vue.JS 2", icon: "logos:vue" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "Vuex", icon: "logos:pinia" },
      { name: "HighCharts", icon: "logos:highcharts" },
      { name: "VuetifyJS", icon: "logos:vuetifyjs" },
      { name: "Vite Test", icon: "logos:vitest" },
      { name: "Python Test", icon: "vscode-icons:file-type-pytest" },
      { name: "Python", icon: "logos:python" },
      { name: "Flask", icon: "logos:flask" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Sentry", icon: "vscode-icons:file-type-sentry" },
      { name: "JSON", icon: "mdi:code-json" },
      { name: "MySQL", icon: "vscode-icons:file-type-mysql" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "SQL Server", icon: "logos:microsoft-icon" },
      { name: "PL/SQL", icon: "vscode-icons:file-type-sql" },
      { name: "SQL", icon: "vscode-icons:file-type-sql" },
      { name: "Nginx", icon: "logos:nginx" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "GitLab", icon: "logos:gitlab" },
      { name: "Bash", icon: "logos:bash-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Principles SOLID", icon: "logos:solid" },
      { name: "Microservicios", icon: "mdi:local-area-network" },
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
    description: `
      Fui contratado tras finalizar mis prácticas, convirtiéndome en el primer aprendiz en ser incorporado por mérito propio,
      gracias a mi capacidad para resolver problemas y adaptarme rápidamente.
      Durante este periodo, contribuí activamente al desarrollo de soluciones internas,
      optimizando bases de datos y mejorando la experiencia de usuario en los sistemas existentes.
    `,
    achievements: [
      "Diseñé y optimicé estructuras de bases de datos en PostgreSQL, mejorando significativamente la velocidad de consulta y el uso eficiente del almacenamiento.",
      "Desarrollé interfaces con Vue.js 2 (CDN) que facilitaban el desacoplamiento de funcionalidades y mejoraban la mantenibilidad del frontend.",
      "Automatizé procesos de generación de reportes a través de vistas especializadas, reduciendo tiempos de respuesta y mejorando la presentación de datos clave.",
      "Participé en la creación y mejora de procedimientos de almacenamiento de datos, aumentando la integridad y seguridad de la información.",
      "Destacado por mi rápida adaptación y resolución de problemas, pasando de aprendiz a desarrollador contratado en menos de un año",
    ],
    skills: [
      { name: "Vue.JS 2", icon: "logos:vue" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML 5", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "VuetifyJS", icon: "logos:vuetifyjs" },
      { name: "Flask", icon: "logos:flask" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "PL/SQL", icon: "vscode-icons:file-type-sql" },
      { name: "SQL", icon: "vscode-icons:file-type-sql" },
      { name: "Bash", icon: "logos:bash-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Documentación", icon: "mdi:file-document" },
      { name: "Subversion", icon: "logos:subversion" },
      { name: "Jira", icon: "logos:jira" },
    ],
    duration: {
      start: "2024-04",
      end: "2025-01",
    },
    companyUrl: "https://www.sainapsis.com",
  },
]);
