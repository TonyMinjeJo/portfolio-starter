import { expect, test } from "@playwright/test";

test("홈 화면이 열린다", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: "Portfolio Starter" }),
  ).toBeVisible();
});

test("로그인하지 않으면 대시보드에서 로그인 페이지로 이동한다", async ({
  page,
}) => {
  await page.goto("/dashboard");
  await expect(page).toHaveURL(/\/login/);
});

test("데모 계정으로 로그인하면 대시보드가 보인다", async ({ page }) => {
  test.skip(
    !process.env.DEMO_EMAIL || !process.env.DEMO_PASSWORD,
    "DEMO_EMAIL, DEMO_PASSWORD가 설정되지 않았습니다.",
  );

  await page.goto("/login");
  // 데모 계정은 폼에 미리 채워져 있습니다.
  await page.getByRole("button", { name: "로그인" }).click();

  await expect(page).toHaveURL(/\/dashboard/);
  await expect(page.getByText("환영합니다")).toBeVisible();
});
