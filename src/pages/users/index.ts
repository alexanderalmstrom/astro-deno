import type { APIRoute } from "astro";
import kv from "../../lib/kv.ts";

export const GET: APIRoute = async ({ params, request }) => {
  const users = await kv.list({
    prefix: ["users"],
  });

  const usersMap = new Map<string, { value: unknown; versionstamp: string }>();

  for await (const user of users) {
    const key = user.key.join(":");

    usersMap.set(key, {
      value: user.value,
      versionstamp: user.versionstamp,
    });
  }

  return new Response(
    JSON.stringify([...usersMap]),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
