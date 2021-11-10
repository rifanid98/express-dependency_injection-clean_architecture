import { GlobalResponse } from "../../sharedkernel";
import { Request, Response } from "express";
interface AuthHandlerInterface {
    signup(req: Request, res: Response): GlobalResponse;
    signin(req: Request, res: Response): GlobalResponse;
    authenticator(req: Request, res: Response): GlobalResponse;
    authenticate(req: Request, res: Response): GlobalResponse;
}
export declare class AuthHandler implements AuthHandlerInterface {
    authenticate(req: Request, res: Response): GlobalResponse;
    authenticator(req: Request, res: Response): GlobalResponse;
    signin(req: Request, res: Response): GlobalResponse;
    signup(req: Request, res: Response): GlobalResponse;
}
export declare class AuthHandlerImpl extends AuthHandler {
    authenticate(req: Request, res: Response): GlobalResponse;
    authenticator(req: Request, res: Response): GlobalResponse;
    signin(req: Request, res: Response): GlobalResponse;
    signup(req: Request, res: Response): GlobalResponse;
}
export {};
