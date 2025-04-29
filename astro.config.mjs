// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
    host: true, // o '0.0.0.0' para más control
    // port: 3000, // Cambia el puerto si lo necesitas
  },
  integrations: [
    tailwind(),
    vue(),
    icon({
      include: {
        mdi: ["*"],
        // "streamline-emojis": ["*"],
        // "simple-icons": ["*"],
        // "tabler-icons": ["*"],
        logos: ["*"],
        lucide: ["*"],
      },
    }),
  ],
});
