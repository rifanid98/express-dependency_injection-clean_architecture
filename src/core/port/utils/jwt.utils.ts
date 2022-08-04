interface JwtInterface {
  sign(payload: any): string;
  verify(payload: any): boolean;
}

export class Jwt implements JwtInterface {
  sign(payload: any): string {
    return "";
  }

  verify(payload: any): boolean {
    return false;
  }
}
