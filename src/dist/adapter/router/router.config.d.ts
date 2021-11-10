import express from "express";
export interface RouterInterface {
    router?: express.Router;
    name?: string;
    routes(): void;
}
export declare class AppRouter implements RouterInterface {
    router?: express.Router;
    name?: string;
    routes(): void;
}
