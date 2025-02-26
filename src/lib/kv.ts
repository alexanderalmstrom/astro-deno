import { DENO_KV_ACCESS_TOKEN, KV_UUID } from "astro:env/server";

Deno.env.set(
  "DENO_KV_ACCESS_TOKEN",
  Deno.env.get("KV_ACCESS_TOKEN") ?? DENO_KV_ACCESS_TOKEN,
);

const kv = await Deno.openKv(
  `https://api.deno.com/databases/${KV_UUID}/connect`,
);

export default kv;
