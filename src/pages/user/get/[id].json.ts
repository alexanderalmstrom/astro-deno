import type { APIRoute } from "astro";
import kv from "../../../lib/kv.ts";

export const GET: APIRoute = async ({ params, request }) => {
  const id = params.id;

  if (!id) {
    return new Response(
      JSON.stringify({
        error: "No user id provided",
      }),
      {
        status: 400,
      },
    );
  }

  const user = await kv.get(["users", id]);

  if (!user.value) {
    return new Response(
      JSON.stringify({
        error: "User not found",
      }),
      {
        status: 404,
      },
    );
  }

  return new Response(
    JSON.stringify(user),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
