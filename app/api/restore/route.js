// app/api/restore/route.js
import { restoreImage } from "@/lib/replicate";

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  const imageUrl = body.imageUrl;

  if (!imageUrl) {
    return new Response(JSON.stringify({ error: "Missing imageUrl" }), { status: 400 });
  }

  try {
    const restoredUrl = await restoreImage(imageUrl);
    return new Response(JSON.stringify({ restoredUrl }), { status: 200 });
  } catch (error) {
    console.error('Restore API error:', error);
    return new Response(JSON.stringify({ error: "Failed to restore image", details: error?.message || error }), { status: 500 });
  }
}
