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
```
