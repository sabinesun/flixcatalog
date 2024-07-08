import { test, expect } from "@playwright/test";

test("the redirection", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page
    .getByRole("link", {
      name: /movie/i,
    })
    .click();

  await expect(page).toHaveURL("http://localhost:5173/movie/");

  await page
    .getByRole("link", {
      name: /serie/i,
    })
    .click();

  await expect(page).toHaveURL("http://localhost:5173/serie/");

  await page
    .getByRole("link", {
      name: /home/i,
    })
    .click();

  await expect(page).toHaveURL("http://localhost:5173/home/");
});

test("the language", async ({ page }) => {
  await page.goto("http://localhost:5173/home");

  await page.getByRole("navigation").getByRole("combobox").selectOption("fr");
  await expect(page.getByRole("link", { name: "Accueil" })).toBeVisible();
  await expect(
    page.getByLabel("Plus d'informations : Dune").first(),
  ).toBeVisible();

  await page.getByRole("navigation").getByRole("combobox").selectOption("en");
  await page.getByRole("link", { name: "Home" }).isVisible();
  await expect(
    page.getByLabel("More Info : Dune: Part Two").first(),
  ).toBeVisible();
});

test("the modal", async ({ page }) => {
  await page.goto("http://localhost:5173/home");
  await page.getByLabel("More Info : Road House").first().click();

  await expect(page.getByText("Road HouseRoad")).toBeVisible();
  await page.click('[aria-label="Close"]');
});

test("the genre combobox", async ({ page }) => {
  await page.goto("http://localhost:5173/movie");
  await page.getByLabel("Genre").selectOption("35");
  await page.getByRole("button").first().click();
  await page.waitForLoadState("networkidle");
  await expect(page.getByRole("dialog").getByText("Comedy")).toBeVisible();
  await page.click('[aria-label="Close"]');
  await page.getByLabel("Genre").selectOption("36");
  await page.getByRole("button").first().click();
  await page.waitForLoadState("networkidle");
  await expect(page.getByRole("dialog").getByText("History")).toBeVisible();
});
