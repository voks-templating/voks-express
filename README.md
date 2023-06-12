![voks web elements](./docs/voks_express.svg)

## Release History

https://github.com/voks-templating/voks-express/releases

## Usage

### deno

```ts
import {
  html,
  type HTMLTemplate,
  renderToStream,
  type ResponseStream,
} from "voks";
import voksExpress from "https://deno.land/x/voks_express/mod.ts";

const app = express();

app.use(
  voksExpress<HTMLTemplate, ResponseStream>(renderToStream, { timeout: 50 }),
);

app.get("/", (_req: express.Request, res: express.Response) => {
  const message = "Hello, World!";

  res.render(html`<!DOCTYPE html>
    <html>
      <head>
        <title>Deno Express App for testing VoksExpress</title>
      </head>
      <body>
        <h1>${message}</h1>
      </body>
    </html>`);
});
```

## License

[Apache-2.0](./LICENSE)
