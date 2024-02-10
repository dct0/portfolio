import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  prefetch: true,
  adapter: vercel(),
  integrations: [
    astroImageTools,
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    icon()
  ],
  site: "https://dct0.vercel.app"
});
