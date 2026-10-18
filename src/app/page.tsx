import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stack = [
  { area: "프레임워크", name: "Next.js · TypeScript" },
  { area: "UI", name: "Tailwind CSS · shadcn/ui" },
  { area: "데이터", name: "PostgreSQL · Drizzle ORM" },
  { area: "인증", name: "Auth.js" },
  { area: "검증", name: "Zod" },
  { area: "테스트", name: "Vitest · Playwright" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-4 py-20">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Portfolio Starter
        </h1>
        <p className="text-lg text-muted-foreground">
          프로젝트 한 줄 소개를 여기에 적으세요. 어떤 문제를 누구를 위해
          해결하는지가 드러나면 좋습니다.
        </p>
        <div className="flex gap-3">
          <Link href="/login" className={buttonVariants({ size: "lg" })}>
            데모 체험하기
          </Link>
          <Link
            href="/dashboard"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            대시보드
          </Link>
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>기술 스택</CardTitle>
          <CardDescription>
            README의 &ldquo;기술 선택 이유&rdquo;와 함께 정리해두세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2 sm:grid-cols-2">
            {stack.map((item) => (
              <li key={item.area} className="flex gap-2 text-sm">
                <span className="w-20 shrink-0 text-muted-foreground">
                  {item.area}
                </span>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
