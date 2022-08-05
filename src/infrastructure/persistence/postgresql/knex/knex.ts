import Knex from "knex";
import config from "../../../../../knexfile";

export default class KnexInstance {
  public knex = Knex(config);
}
