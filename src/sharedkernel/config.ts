import { singleton } from "tsyringe";

interface ConfigInterface {
  get(envName: string): string;
}

export class Config implements ConfigInterface {
  get(envName: string): string {
    return "";
  }
}

@singleton()
export class ConfigImpl extends Config {
  get(envName: string): string {
    return envName;
  }
}
