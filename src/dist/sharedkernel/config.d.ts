interface ConfigInterface {
    get(envName: string): string;
}
export declare class Config implements ConfigInterface {
    get(envName: string): string;
}
export declare class ConfigImpl extends Config {
    get(envName: string): string;
}
export {};
