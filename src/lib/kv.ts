import { KV_ACCESS_TOKEN, KV_UUID } from "astro:env/server";

const KV_URL = `https://api.deno.com/databases/${KV_UUID}/connect`;

if (import.meta.env.DEV) {
  Deno.env.set(
    "DENO_KV_ACCESS_TOKEN",
    KV_ACCESS_TOKEN,
  );
}

const kv = await Deno.openKv(
  import.meta.env.DEV ? KV_URL : undefined,
);

export default kv;
