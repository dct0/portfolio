import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { astroImageTools } from "astro-imagetools";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  prefetch: true,
  adapter: vercel(),
  integrations: [astroImageTools, react(), tailwind({
    applyBaseStyles: false
  }), sitemap(), icon()]
});