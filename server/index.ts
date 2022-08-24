import express, { Request, Response } from "express";
import next from "next";
import cookieParser from "cookie-parser";

import { STORAGE_THEME_KEY } from "../lib/cookie";

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });

const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();

    const server = express();

    server.use(cookieParser(process.env.COOKIE_SECRET));

    server.use("/", express.static(`${process.cwd()}/public`));

    server.all("*", (req: Request, res: Response) => {
      // const context = {};

      // const theme = req.cookies[STORAGE_THEME_KEY];

      // context.theme = theme ? JSON.parse(theme) : "light";

      return handle(req, res);
    });

    server.listen(port, (err?: any) => {
      if (err) {
        throw err;
      }

      console.log(`> Ready on localhost:${port}`);
    });
  } catch (e) {
    console.error(e);

    process.exit(1);
  }
})();
