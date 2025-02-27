// @ts-check
import { defineConfig, envField } from "astro/config";
import deno from "@deno/astro-adapter";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  vite: {
    // @ts-ignore - https://github.com/tailwindlabs/tailwindcss/discussions/15768
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      KV_UUID: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      KV_ACCESS_TOKEN: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
    },
  },
});
