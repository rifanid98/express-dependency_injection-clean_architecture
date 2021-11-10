import { singleton } from "tsyringe";

interface JsonWebToken {
  sign(payload: any): string;
  verify(payload: any): boolean;
}

export class Jwt implements JsonWebToken {
  sign(payload: any): string {
    return "";
  }

  verify(payload: any): boolean {
    return false;
  }
}

@singleton()
export class JwtImpl extends Jwt {
  sign(payload: any): string {
    return "";
  }

  verify(payload: any): boolean {
    return false;
  }
}
