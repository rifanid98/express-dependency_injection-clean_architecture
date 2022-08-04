import { GlobalResponse, Response as HttpResponse } from "../../../../utils";
import { autoInjectable, injectable, registry, singleton } from "tsyringe";
import { Request, Response } from "express";
import { AuthControllerProvider } from "../../../../di/provider/auth/auth-controller.provider";
import { AuthService } from "../../../../core/port/service";
import { User } from "../../../../core/entity";

export class AuthController {
  async signin(req: Request, res: Response): Promise<GlobalResponse> {
    return res.send(HttpResponse.success());
  }

  async signup(req: Request, res: Response): Promise<GlobalResponse> {
    return res.send(HttpResponse.success());
  }
}

@singleton()
@autoInjectable()
@registry(AuthControllerProvider)
export class AuthControllerImpl implements AuthController {
  constructor(private service: AuthService) {}

  public async signin(req: Request, res: Response): Promise<GlobalResponse> {
    const user = new User();
    user.name = "Adnin Rifandi Sutanto Putra";
    user.password = "123456";

    const result = await this.service
      .signin(user)
      .catch((err) => console.log(err));

    return res.send(HttpResponse.success({ data: result }));
  }

  public async signup(req: Request, res: Response): Promise<GlobalResponse> {
    return res.send(HttpResponse.success());
  }
}
