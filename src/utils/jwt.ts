import { singleton } from "tsyringe";
import { Jwt } from "../core/port/utils/jwt.utils";

@singleton()
export class JwtImpl implements Jwt {
  sign(payload: any): string {
    return "";
  }

  verify(payload: any): boolean {
    return false;
  }
}
