interface JsonWebToken {
    sign(payload: any): string;
    verify(payload: any): boolean;
}
export declare class Jwt implements JsonWebToken {
    sign(payload: any): string;
    verify(payload: any): boolean;
}
export declare class JwtImpl extends Jwt {
    sign(payload: any): string;
    verify(payload: any): boolean;
}
export {};
