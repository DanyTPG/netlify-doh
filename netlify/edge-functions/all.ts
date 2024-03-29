import { Context } from "https://edge.netlify.com";

export default async (req: Request, context: Context) => {
  const url = new URL(req.url);
  url.protocol = "https:";
  url.hostname = "1.1.1.1";
  url.port = "443";
  return await fetch(url.href, {
    headers: req.headers,
    method: req.method,
    body: req.body,
  });
}
