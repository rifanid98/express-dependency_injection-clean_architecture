import { Router } from "express";
import { AuthControllerImpl } from "../auth/index";
import { autoInjectable, inject, registry, singleton } from "tsyringe";
import { AuthHandlerProvider } from "../../../../di/provider/auth/auth-router.provider";
import { AppRouter } from "./router.config";

@singleton()
@autoInjectable()
@registry(AuthHandlerProvider)
export class AuthRouter extends AppRouter {
  constructor(
    @inject("Router") public router?: Router,
    private controller?: AuthControllerImpl
  ) {
    super();
    this.name = "auth";
    this.routes();
  }

  public routes() {
    this.router.all("/signin", (req, res) => this.controller.signin(req, res));
    this.router.all("/signup", (req, res) => this.controller.signup(req, res));
  }
}
