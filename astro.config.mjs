// @ts-check
import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: deno(),
  vite: {
    // @ts-ignore - https://github.com/tailwindlabs/tailwindcss/discussions/15768
    plugins: [tailwindcss()],
  },
});
