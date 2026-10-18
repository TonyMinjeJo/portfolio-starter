import "server-only";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { auth } from "@/auth";

export type CurrentUser = {
  id: string;
  name: string;
  email: string;
};

// Data Access Layer: 세션 확인은 이 함수 한 곳에서만 합니다.
// 세션은 요청 시점에 읽히므로, 호출하는 컴포넌트는 반드시 <Suspense> 안에 두세요.
export async function requireUser(): Promise<CurrentUser> {
  // auth()는 요청을 읽기 전에 crypto를 사용하므로, 먼저 요청 시점 렌더링임을 명시합니다.
  await connection();
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  return {
    id: session.user.id,
    name: session.user.name ?? "",
    email: session.user.email ?? "",
  };
}
