import type { Metadata } from "next";
import { isGitHubEnabled } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { githubLoginAction } from "./actions";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "로그인" };

export default function LoginPage() {
  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-4 py-20">
      <Card>
        <CardHeader>
          <CardTitle>로그인</CardTitle>
          <CardDescription>
            데모 계정이 미리 입력되어 있습니다. 바로 로그인해보세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* 데모 계정은 공개용이므로 폼에 미리 채워 둡니다. 실제 계정 정보는 절대 넣지 마세요. */}
          <LoginForm
            demoEmail={process.env.DEMO_EMAIL}
            demoPassword={process.env.DEMO_PASSWORD}
          />
          {isGitHubEnabled && (
            <form action={githubLoginAction}>
              <Button type="submit" variant="outline" className="w-full">
                GitHub로 로그인
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
