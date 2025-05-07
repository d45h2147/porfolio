// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  server: {
    host: true, // o '0.0.0.0' para más control
    // port: 3000, // Cambia el puerto si lo necesitas
  },
  integrations: [
    vue(),
    icon({
      include: {
        mdi: ["*"],
        // "streamline-emojis": ["*"],
        // "simple-icons": ["*"],
        // "tabler-icons": ["*"],
        logos: ["*"],
        lucide: ["*"],
        "material-icon-theme": ["*"],
      },
    }),
  ],
});
