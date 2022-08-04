import * as speakeasy from "speakeasy";
import {
  GeneratedSecret,
  GenerateSecretOptions,
  TotpOptions,
  TotpVerifyOptions,
} from "speakeasy";
import * as QRCODE from "qrcode";
import { QRCodeSegment } from "qrcode";
import { injectable, singleton } from "tsyringe";
import { Authenticator } from "../core/port/utils/authenticator.utils";

@singleton()
export class AuthenticatorImpl implements Authenticator {
  /**
   * Generates secret for TOTP
   * @param {GenerateSecretOptions} options
   */
  generateSecret(options?: GenerateSecretOptions): GeneratedSecret {
    return speakeasy.generateSecret(options);
  }

  /**
   * Generate current totp token
   * @param {TotpOptions} totpOptions
   */
  generateTotpToken(totpOptions?: TotpOptions): string {
    return speakeasy.totp(totpOptions);
  }

  /**
   * Generate a qrcode url to be scanned with the authenticator app
   * @param {string | QRCodeSegment[]} url
   */
  generateQrCodeUrl(url: string | QRCodeSegment[]): Promise<string> {
    return new Promise((resolve, reject) => {
      QRCODE.toDataURL(url, (err, url) => {
        if (!err) {
          resolve(url);
        } else {
          reject(err);
        }
      });
    });
  }

  /**
   * Verify totp token
   * @param totpVerifyOptions
   */
  verify(totpVerifyOptions: TotpVerifyOptions): boolean {
    return speakeasy.totp.verify(totpVerifyOptions);
  }
}
