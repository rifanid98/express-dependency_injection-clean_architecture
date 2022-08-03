import { ProviderRegistry } from "../../utils";
import * as express from "express";
import { AuthRouter } from "../../interface/extl/v1/router";

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
