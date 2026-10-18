---
description: src/components/에 TypeScript + Tailwind React 함수형 컴포넌트를 생성합니다
argument-hint: <ComponentName>
allowed-tools: Read, Write, Glob
---

`src/components/`에 새 React 컴포넌트를 만드세요.

컴포넌트 이름: `$1`

## 규칙

1. `$1`이 비어 있으면 파일을 만들지 말고, `/add-component <ComponentName>` 형식으로 다시 실행하라고 안내하세요.
2. 이름을 두 가지로 변환하세요.
   - 컴포넌트 이름: PascalCase (예: `user-card` → `UserCard`)
   - 파일 이름: kebab-case (예: `UserCard` → `user-card.tsx`). 이 프로젝트의 기존 파일(`login-form.tsx`, `components/ui/*.tsx`)과 같은 규칙입니다.
3. `src/components/<파일 이름>`이 이미 있으면 덮어쓰지 말고 알려주세요.
4. 아래 템플릿으로 파일을 만드세요.

```tsx
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ComponentNameProps = ComponentProps<"div">;

export function ComponentName({ className, ...props }: ComponentNameProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      ComponentName
    </div>
  );
}
```

- `ComponentName`을 PascalCase 이름으로 모두 바꾸세요.
- 이름 있는 내보내기(named export)를 사용하세요. 기본 내보내기는 쓰지 않습니다.
- 스타일은 Tailwind 클래스만 사용하고, 외부에서 `className`으로 덮어쓸 수 있게 `cn()`으로 합치세요.
- `"use client"`는 넣지 마세요. 상태나 이벤트 핸들러가 필요할 때만 추가합니다.

5. 끝나면 만든 파일 경로와 import 예시(`import { ComponentName } from "@/components/<파일 이름 확장자 제외>"`)를 한 줄로 알려주세요.
