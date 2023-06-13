export type ExpressRequestLike = Record<string | number | symbol, never>;
export type ExpressNextFunctionLike = () => void;
export type ExpressResponseLike<T, R> = {
  render: (template: T) => Promise<void>;
  end: () => void;
} & R;

export type RendererOptions = {
  timeout?: number;
};

export default <HTMLTemplate, ResponseStream>(
  renderToStream: (
    res: ExpressResponseLike<HTMLTemplate, ResponseStream>,
    template: HTMLTemplate,
  ) => Promise<void>,
  { timeout = 1500 }: RendererOptions = {},
) =>
(
  _req: ExpressRequestLike,
  res: ExpressResponseLike<HTMLTemplate, ResponseStream>,
  next: ExpressNextFunctionLike,
) => {
  res.render = async (
    template: HTMLTemplate,
  ) => {
    try {
      await Promise.race([
        new Promise((_resolve, reject) => {
          setTimeout(reject, timeout);
        }),
        await renderToStream(res, template),
      ]);
    } catch (e) {
      console.log("rendering failed: ", e.message);
      console.log(e.stack);
    } finally {
      res.end();
    }
  };

  return next();
};
