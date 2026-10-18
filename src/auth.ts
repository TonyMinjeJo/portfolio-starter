import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { loginSchema } from "@/lib/validations/auth";

export const isGitHubEnabled = Boolean(
  process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET,
);

const providers: Provider[] = [
  // 데모 계정: 면접관이 가입 없이 바로 체험할 수 있도록 환경 변수로 지정한 계정 하나만 허용합니다.
  Credentials({
    credentials: { email: {}, password: {} },
    authorize(credentials) {
      const parsed = loginSchema.safeParse(credentials);
      if (!parsed.success) return null;

      const { email, password } = parsed.data;
      const { DEMO_EMAIL, DEMO_PASSWORD } = process.env;
      if (!DEMO_EMAIL || !DEMO_PASSWORD) return null;
      if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) return null;

      return { id: "demo-user", name: "Demo User", email };
    },
  }),
];

if (isGitHubEnabled) providers.push(GitHub);

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  callbacks: {
    session({ session, token }) {
      if (token.sub) session.user.id = token.sub;
      return session;
    },
  },
});
