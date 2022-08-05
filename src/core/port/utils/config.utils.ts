interface ConfigInterface {
  get(envName: string): string;
}

export class Config implements ConfigInterface {
  get(envName: string): string {
    return "";
  }
}
