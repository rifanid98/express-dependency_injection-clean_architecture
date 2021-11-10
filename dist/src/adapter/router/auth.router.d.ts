import { Router } from "express";
import { AuthHandlerImpl } from "../../adapter/handler";
import { AppRouter } from "../../adapter/router/router.config";
export declare class AuthRouter extends AppRouter {
    router?: Router;
    private handler?;
    constructor(router?: Router, handler?: AuthHandlerImpl);
    routes(): void;
}
