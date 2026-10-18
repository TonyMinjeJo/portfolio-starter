import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "./page";

test("홈 화면에 제목과 데모 링크가 보인다", () => {
  render(<Home />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Portfolio Starter" }),
  ).toBeDefined();
  expect(
    screen.getByRole("link", { name: "데모 체험하기" }).getAttribute("href"),
  ).toBe("/login");
});
