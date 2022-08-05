import { Knex } from "knex";
import { randomUUID } from "crypto";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { id: randomUUID(), username: "username1", password: "password1" },
    { id: randomUUID(), username: "username2", password: "password2" },
    { id: randomUUID(), username: "username3", password: "password3" },
  ]);
}
