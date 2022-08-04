import * as bcrypt from "bcrypt";
import { singleton } from "tsyringe";
import { Security } from "../core/port/utils/security.utils";

@singleton()
export class SecurityImpl implements Security {
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
