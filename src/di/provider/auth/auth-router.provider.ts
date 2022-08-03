import { AuthHandler, AuthHandlerImpl } from "../../../interface/handler";
import { Router } from "express";
import { ProviderRegistry } from "../../../utils";

export const AuthHandlerProvider: ProviderRegistry[] = [
  {
    token: AuthHandler,
    useClass: AuthHandlerImpl,
  },
  {
    token: "Router",
    useValue: Router(),
  },
];
