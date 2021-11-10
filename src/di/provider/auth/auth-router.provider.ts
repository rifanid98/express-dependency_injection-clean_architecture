import { AuthHandler, AuthHandlerImpl } from "../../../adapter/handler";
import { Router } from "express";
import { ProviderRegistry } from "sharedkernel";

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
