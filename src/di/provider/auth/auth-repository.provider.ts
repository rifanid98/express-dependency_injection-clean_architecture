import { ProviderRegistry } from "../../../utils";
import KnexInstance from "../../../infrastructure/persistence/postgresql/knex/knex";

export const AuthRepositoryProvider: ProviderRegistry[] = [
  {
    token: "Knex",
    useClass: KnexInstance,
  },
];
