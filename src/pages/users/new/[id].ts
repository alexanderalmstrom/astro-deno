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

  if (user.value) {
    return new Response(
      JSON.stringify({
        error: "User already exists",
      }),
      {
        status: 400,
      },
    );
  }

  const newUser = await kv.set(["users", id], id);

  if (!newUser.versionstamp) {
    return new Response(
      JSON.stringify({
        error: "User could not be created",
      }),
      {
        status: 404,
      },
    );
  }

  return new Response(
    JSON.stringify({
      message: "User created",
      user: newUser,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
