import type { Metadata } from "next";
import { Suspense } from "react";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getNotesForUser } from "@/db/queries";
import { requireUser } from "@/lib/dal";

export const metadata: Metadata = { title: "대시보드" };

export default function DashboardPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">대시보드</h1>
      {/* 세션은 요청 시점에 읽히므로 Suspense 안에서 스트리밍합니다. */}
      <Suspense
        fallback={<p className="text-muted-foreground">불러오는 중…</p>}
      >
        <UserSection />
      </Suspense>
    </main>
  );
}

async function UserSection() {
  const user = await requireUser();
  const notes = await getNotesForUser(user.id);

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <p>
          <span className="font-medium">{user.name}</span>님, 환영합니다.
        </p>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <Button type="submit" variant="outline">
            로그아웃
          </Button>
        </form>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>노트</CardTitle>
          <CardDescription>DB 연동 예시입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          {notes === null ? (
            <p className="text-sm text-muted-foreground">
              DATABASE_URL을 설정하고 <code>npm run db:push</code>,{" "}
              <code>npm run db:seed</code>를 실행하면 데이터가 표시됩니다.
            </p>
          ) : notes.length === 0 ? (
            <p className="text-sm text-muted-foreground">노트가 없습니다.</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {notes.map((note) => (
                <li key={note.id}>
                  <p className="font-medium">{note.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {note.content}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </>
  );
}
