import express from 'express'
import {html, renderToStream } from '@voks/voks'
import voksExpress from "../../dist/mod.js"

const app = express();
app.use(
  voksExpress(renderToStream, { timeout: 50 }),
);

app.get("/", (_req, res) => {
  const message = "Hello, World!";

  res.render(
    html`<!DOCTYPE html>
  <html>
    <head>
      <title>Deno Express App for testing VoksExpress</title>
    </head>
    <body>
      <h1>${message}</h1>
    </body>
  </html> `
  );
});

const server = app.listen(() => {
  console.log("server started at", `http://localhost:${server.address().port}`);
});
