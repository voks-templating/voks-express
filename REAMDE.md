## Usage

### deno

```ts
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
```
