import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import million from "million/compiler";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [million.vite({ mode: "react", server: true, auto: true })],
  },
});
