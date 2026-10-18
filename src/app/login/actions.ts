"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";

export type LoginState = { error?: string };

export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "이메일 또는 비밀번호가 올바르지 않습니다." };
    }
    // 로그인 성공 시 signIn이 던지는 redirect는 그대로 다시 던집니다.
    throw error;
  }
  return {};
}

export async function githubLoginAction() {
  await signIn("github", { redirectTo: "/dashboard" });
}
