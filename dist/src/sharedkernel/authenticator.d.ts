import { GeneratedSecret, GenerateSecretOptions, TotpOptions, TotpVerifyOptions } from "speakeasy";
import { QRCodeSegment } from "qrcode";
interface AuthenticatorInterface {
    generateSecret(options?: GenerateSecretOptions): GeneratedSecret;
    generateTotpToken(totpOptions?: TotpOptions): string;
    generateQrCodeUrl(text: string | QRCodeSegment[]): Promise<string>;
    verify(totpVerifyOptions: TotpVerifyOptions): boolean;
}
export declare class Authenticator implements AuthenticatorInterface {
    generateQrCodeUrl(text: string | QRCodeSegment[]): Promise<string>;
    generateSecret(options?: GenerateSecretOptions): GeneratedSecret;
    generateTotpToken(totpOptions?: TotpOptions): string;
    verify(totpVerifyOptions: TotpVerifyOptions): boolean;
}
export declare class AuthenticatorImpl extends Authenticator {
    generateSecret(options?: GenerateSecretOptions): GeneratedSecret;
    generateTotpToken(totpOptions?: TotpOptions): string;
    generateQrCodeUrl(url: string | QRCodeSegment[]): Promise<string>;
    verify(totpVerifyOptions: TotpVerifyOptions): boolean;
}
export {};
