import * as dotenv from 'dotenv';
import { defineConfig } from "drizzle-kit";

dotenv.config();

export default defineConfig({
  schema: "schema.ts",
  out: "drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
