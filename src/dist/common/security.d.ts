interface SecurityInterface {
    hash(value: string): Promise<string>;
    verify(plain: string, hashed: string): Promise<boolean>;
}
export declare class Security implements SecurityInterface {
    hash(value: string): Promise<string>;
    verify(plain: string, hashed: string): Promise<boolean>;
}
export declare class SecurityImpl extends Security {
    hash(value: string): Promise<string>;
    verify(plain: string, hashed: string): Promise<boolean>;
}
export {};
