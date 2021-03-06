import { Router } from "express";
import { AuthHandlerImpl } from "../../adapter/handler";
import { autoInjectable, inject, registry, singleton } from "tsyringe";
import { AuthHandlerProvider } from "../../di/provider/auth/auth-router.provider";
import { AppRouter } from "../../adapter/router/router.config";

@singleton()
@autoInjectable()
@registry(AuthHandlerProvider)
export class AuthRouter extends AppRouter {
  constructor(
    @inject("Router") public router?: Router,
    private handler?: AuthHandlerImpl
  ) {
    super();
    this.name = "auth";
    this.routes();
  }

  public routes() {
    this.router.all("/signin", this.handler.signin);
    this.router.all("/signup", this.handler.signup);
    this.router.all("/authenticator", this.handler.authenticator);
    this.router.all("/authenticate", this.handler.authenticate);
  }
}
