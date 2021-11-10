import InjectionToken from "tsyringe/dist/typings/providers/injection-token";
import RegistrationOptions from "tsyringe/dist/typings/types/registration-options";
import Provider from "tsyringe/dist/typings/providers/provider";
export declare type ProviderRegistry = {
    token: InjectionToken;
    options?: RegistrationOptions;
} & Provider<any>;
