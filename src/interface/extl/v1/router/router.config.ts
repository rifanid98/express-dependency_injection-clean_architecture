import express from "express";

export interface RouterInterface {
  router?: express.Router;
  name?: string;
  routes(): void;
}

export class AppRouter implements RouterInterface {
  router?: express.Router;
  name?: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  routes(): void {}
}
