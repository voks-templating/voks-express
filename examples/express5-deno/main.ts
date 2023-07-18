import express from "express";
import {
  html,
  type HTMLTemplate,
  renderToStream,
  type ResponseStream,
} from "voks";
import voksExpress from "../../mod.ts";

const app = express();
app.use(
  voksExpress<HTMLTemplate, ResponseStream>(renderToStream, { timeout: 50 }),
);

app.get("/", (_req: express.Request, res: express.Response) => {
  const message = "Hello, World!";
  res.set("Content-Type", "text/plain");
  res.render(
    html`<!DOCTYPE html>
  <html>
    <head>
      <title>Deno Express App for testing VoksExpress</title>
    </head>
    <body>
      <h1>${message}</h1>
    </body>
  </html>`,
  );
});

const server = app.listen(() => {
  console.log("server started at", `http://localhost:${server.address().port}`);
});
