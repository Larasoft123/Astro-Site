// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // Add any custom config hee
  env: {
    schema: {
      API_URL: envField.string({ context: "server", access: "public" }),
    },
  },

  adapter: vercel(),
});