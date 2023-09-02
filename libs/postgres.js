import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// await top level
await client.connect();

export default client;
