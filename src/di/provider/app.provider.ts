import { ProviderRegistry } from "../../sharedkernel";
import * as express from "express";
import { AuthRouter } from "../../adapter/router";

export const AppProvider: ProviderRegistry[] = [
  {
    token: "Express",
    useValue: express(),
  },
  {
    token: "AppRouters",
    useValue: [new AuthRouter()],
  },
];
