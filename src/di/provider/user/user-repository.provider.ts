import { ProviderRegistry } from "../../../utils";
import KnexInstance from "../../../infrastructure/persistence/postgresql/knex/knex";

export const UserRepositoryProvider: ProviderRegistry[] = [
  {
    token: "Knex",
    useClass: KnexInstance,
  },
];
