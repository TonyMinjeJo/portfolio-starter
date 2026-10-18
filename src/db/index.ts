import "server-only";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// DATABASE_URL이 없으면 null을 반환해, DB 없이도 앱을 빌드하고 실행할 수 있게 합니다.
export const db = process.env.DATABASE_URL
  ? drizzle(postgres(process.env.DATABASE_URL, { prepare: false }), { schema })
  : null;
