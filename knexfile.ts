// Update with your config settings.
import * as path from "path";

require("ts-node/register");

import * as dotenv from "dotenv";
dotenv.config();

const configs = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE_NAME_DEVELOPMENT,
      user: process.env.DATABASE_USER_DEVELOPMENT,
      password: process.env.DATABASE_PASSWORD_DEVELOPMENT,
    },
    pool: {
      min: Number(process.env.DATABASE_POOL_MIN),
      max: Number(process.env.DATABASE_POOL_MAX),
    },
    migrations: {
      tableName: process.env.DATABASE_MIGRATION_TABLE,
      directory: path.join(
        __dirname,
        "./src/infrastructure/persistence/postgresql/knex/migrations"
      ),
    },
    seeders: {
      directory: path.join(__dirname, "./seeds"),
    },
  },

  staging: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

const environment = process.env.ENVIRONMENT || "development";
const config = configs[environment];
export default config;
