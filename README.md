# 프로젝트 이름

> 한 줄 소개: 어떤 문제를, 누구를 위해 해결하는 프로젝트인지 적으세요.

![CI](https://github.com/<USER>/<REPO>/actions/workflows/ci.yml/badge.svg)

**데모:** https://your-project.vercel.app · **데모 계정:** 로그인 화면에 미리 입력되어 있습니다.

<!-- 스크린샷이나 GIF를 여기에 넣으세요. 면접관이 가장 먼저 보는 부분입니다. -->

## 주요 기능

- 기능 1: 무엇을 할 수 있는지
- 기능 2:
- 기능 3:

## 기술 스택과 선택 이유

| 영역       | 기술                             | 선택 이유 |
| ---------- | -------------------------------- | --------- |
| 프레임워크 | Next.js (App Router), TypeScript |           |
| UI         | Tailwind CSS, shadcn/ui          |           |
| 데이터     | PostgreSQL, Drizzle ORM          |           |
| 인증       | Auth.js                          |           |
| 검증       | Zod                              |           |
| 테스트     | Vitest, Playwright               |           |
| 배포       | Vercel, GitHub Actions           |           |

## 아키텍처

<!-- 요청 흐름이나 데이터 모델 다이어그램을 넣으세요. -->

## 트러블슈팅

<!-- 개발 중 겪은 문제, 원인, 해결 과정을 기록하세요. 면접에서 가장 많이 묻는 부분입니다. -->

---

## 시작하기

```bash
npm install
cp .env.example .env.local   # 값 채우기 (AUTH_SECRET은 `npx auth secret`으로 생성)
npm run dev
```

http://localhost:3000 에서 확인합니다. DB 없이도 실행됩니다.

### DB 연결 (선택)

1. Supabase 또는 Neon에서 무료 PostgreSQL을 만들고 `DATABASE_URL`을 채웁니다.
2. `src/db/schema.ts`를 프로젝트에 맞게 수정합니다.
3. 스키마를 반영하고 시드 데이터를 넣습니다.

```bash
npm run db:push    # 개발 중 빠르게 반영 (마이그레이션 파일이 필요하면 db:generate → db:migrate)
npm run db:seed
```

## 스크립트

| 명령                | 설명                                |
| ------------------- | ----------------------------------- |
| `npm run dev`       | 개발 서버                           |
| `npm run build`     | 프로덕션 빌드                       |
| `npm run lint`      | ESLint                              |
| `npm run format`    | Prettier로 전체 포매팅              |
| `npm run typecheck` | 라우트 타입 생성 후 TypeScript 검사 |
| `npm test`          | Vitest 단위 테스트                  |
| `npm run test:e2e`  | Playwright E2E 테스트               |
| `npm run db:studio` | Drizzle Studio로 DB 확인            |

커밋할 때 Husky와 lint-staged가 변경된 파일에 ESLint와 Prettier를 자동으로 실행합니다.

## 폴더 구조

```
src/
  app/            페이지와 라우트 (login, dashboard, api/auth)
  components/ui/  shadcn/ui 컴포넌트 (npx shadcn add <name>으로 추가)
  db/             Drizzle 스키마, 클라이언트, 쿼리, 시드
  lib/            검증 스키마(Zod), 세션 확인(dal.ts)
  auth.ts         Auth.js 설정
e2e/              Playwright 테스트
```

## 배포 (Vercel)

1. GitHub 저장소를 Vercel에 연결합니다.
2. 환경 변수에 `AUTH_SECRET`, `DEMO_EMAIL`, `DEMO_PASSWORD`를 넣습니다. DB와 GitHub 로그인을 쓰면 `DATABASE_URL`, `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`도 추가합니다.
3. GitHub OAuth App의 콜백 URL은 `https://<도메인>/api/auth/callback/github`입니다.
