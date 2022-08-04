import { singleton } from "tsyringe";
import { Config } from "../core/port/utils/config.utils";

@singleton()
export class ConfigImpl implements Config {
  get(envName: string): string {
    return envName;
  }
}
