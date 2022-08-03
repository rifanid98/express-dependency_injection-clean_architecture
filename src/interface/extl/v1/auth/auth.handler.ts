import { GlobalResponse, Response as HttpResponse } from "../../../../utils";
import { singleton } from "tsyringe";
import { Request, Response } from "express";

interface AuthHandlerInterface {
  signup(req: Request, res: Response): GlobalResponse;
  signin(req: Request, res: Response): GlobalResponse;
  authenticator(req: Request, res: Response): GlobalResponse;
  authenticate(req: Request, res: Response): GlobalResponse;
}

export class AuthHandler implements AuthHandlerInterface {
  authenticate(req: Request, res: Response): GlobalResponse {
    return res.send(HttpResponse.success());
  }

  authenticator(req: Request, res: Response): GlobalResponse {
    return res.send(HttpResponse.success());
  }

  signin(req: Request, res: Response): GlobalResponse {
    return res.send(HttpResponse.success());
  }

  signup(req: Request, res: Response): GlobalResponse {
    return res.send(HttpResponse.success());
  }
}

@singleton()
export class AuthHandlerImpl extends AuthHandler {
  authenticate(req: Request, res: Response): GlobalResponse {
    return res.send(HttpResponse.success());
  }

  authenticator(req: Request, res: Response): GlobalResponse {
    return res.send(HttpResponse.success());
  }

  signin(req: Request, res: Response): GlobalResponse {
    return res.send(HttpResponse.success());
  }

  signup(req: Request, res: Response): GlobalResponse {
    return res.send(HttpResponse.success());
  }
}
