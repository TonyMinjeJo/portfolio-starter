import { describe, expect, test } from "vitest";
import { loginSchema } from "./auth";

describe("loginSchema", () => {
  test("올바른 입력을 통과시킨다", () => {
    const result = loginSchema.safeParse({
      email: "demo@example.com",
      password: "demo1234",
    });
    expect(result.success).toBe(true);
  });

  test("이메일 형식이 아니면 실패한다", () => {
    const result = loginSchema.safeParse({
      email: "not-an-email",
      password: "demo1234",
    });
    expect(result.success).toBe(false);
  });

  test("비밀번호가 너무 짧으면 실패한다", () => {
    const result = loginSchema.safeParse({
      email: "demo@example.com",
      password: "123",
    });
    expect(result.success).toBe(false);
  });
});
