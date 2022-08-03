import * as bcrypt from "bcrypt";
import { singleton } from "tsyringe";

interface SecurityInterface {
  hash(value: string): Promise<string>;
  verify(plain: string, hashed: string): Promise<boolean>;
}

export class Security implements SecurityInterface {
  hash(value: string): Promise<string> {
    return Promise.resolve("");
  }

  verify(plain: string, hashed: string): Promise<boolean> {
    return Promise.resolve(false);
  }
}

@singleton()
export class SecurityImpl extends Security {
  /**
   * Hashing given string
   * @param value
   */
  async hash(value: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(value, salt);
  }

  /**
   * Verify hashed value
   * @param plain
   * @param hashed
   */
  verify(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
}
