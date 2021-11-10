import "reflect-metadata";
import { autoInjectable, inject, registry } from "tsyringe";

import * as express from "express";
import { Application, Express } from "express";
import * as cors from "cors";
import * as helmet from "helmet";
import * as cookieParser from "cookie-parser";
import * as compression from "compression";
import { config as dotenv } from "dotenv";
import { AppRouter } from "./adapter/router";
import { AppProvider } from "./di/provider/app.provider";

@autoInjectable()
@registry(AppProvider)
class App {
  constructor(
    @inject("Express") public app?: Express,
    @inject("AppRouters") private routes?: AppRouter[]
  ) {
    this.plugins();
    this.setupRoutes();
    dotenv();
  }

  /**
   * Plugins
   */
  protected plugins(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(helmet());
    this.app.use(compression());
    // if (process.env.TEST === "false") {
    //   this.app.use(Morgan.custom());
    // }
  }

  /**
   * Routes
   */
  protected setupRoutes(): void {
    this.routes.map((route) => {
      this.app.use(`/${route.name}`, route.router);
    });
  }
}

const port: string = process.env.PORT || "3000";
const app: Application = new App().app;
app.listen(port, function () {
  console.log(`Server running on port: ${port}`);
});
