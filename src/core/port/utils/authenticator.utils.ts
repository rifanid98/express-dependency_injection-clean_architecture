import {
  GeneratedSecret,
  GenerateSecretOptions,
  TotpOptions,
  TotpVerifyOptions,
} from "speakeasy";
import { QRCodeSegment } from "qrcode";

interface AuthenticatorInterface {
  generateSecret(options?: GenerateSecretOptions): GeneratedSecret;
  generateTotpToken(totpOptions?: TotpOptions): string;
  generateQrCodeUrl(text: string | QRCodeSegment[]): Promise<string>;
  verify(totpVerifyOptions: TotpVerifyOptions): boolean;
}

export class Authenticator implements AuthenticatorInterface {
  generateQrCodeUrl(text: string | QRCodeSegment[]): Promise<string> {
    return Promise.resolve("");
  }

  generateSecret(options?: GenerateSecretOptions): GeneratedSecret {
    return undefined;
  }

  generateTotpToken(totpOptions?: TotpOptions): string {
    return "";
  }

  verify(totpVerifyOptions: TotpVerifyOptions): boolean {
    return false;
  }
}
