import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { notes } from "./schema";

config({ path: ".env.local", quiet: true });

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL이 설정되지 않았습니다.");

  const client = postgres(url, { prepare: false, max: 1 });
  const db = drizzle(client);

  await db.delete(notes);
  await db.insert(notes).values([
    {
      userId: "demo-user",
      title: "환영합니다",
      content: "데모 계정용 시드 데이터입니다.",
    },
    {
      userId: "demo-user",
      title: "다음 할 일",
      content: "src/db/schema.ts를 프로젝트에 맞게 수정하세요.",
    },
  ]);

  await client.end();
  console.log("시드 데이터를 넣었습니다.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
