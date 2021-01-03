import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";

const PORT: string | number = process.env.PORT || 5000;

createConnection()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as Promise<void>)[route.method](route.route, (req: Request, res: Response, next: void) => {
        const result = new (route.controller as any)()[route.action](req, res, next); // eslint-disable-line
        if (result instanceof Promise) {
          result.then((result) => (result !== null && result !== undefined ? res.send(result) : undefined));
        } else if (result !== null && result !== undefined) {
          res.json(result);
        }
      });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(PORT, () => console.log(`Express server is running at http://localhost:${PORT}`));
  })
  .catch((error) => console.log(error));
