export async function POST(req) {
  const body = await req.text();

  console.log("IPN Received:");
  console.log(body);

  return new Response("OK");
}