import { AuthHandler, AuthHandlerImpl } from "../../../interface/extl/v1/auth";
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
