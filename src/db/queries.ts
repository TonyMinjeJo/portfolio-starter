import "server-only";
import { desc, eq } from "drizzle-orm";
import { db } from "./index";
import { notes, type Note } from "./schema";

export async function getNotesForUser(userId: string): Promise<Note[] | null> {
  if (!db) return null;

  return db
    .select()
    .from(notes)
    .where(eq(notes.userId, userId))
    .orderBy(desc(notes.createdAt));
}
