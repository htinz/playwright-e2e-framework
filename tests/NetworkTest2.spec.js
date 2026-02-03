const { test, expect } = require("@playwright/test");

test("Security test request intercept", async ({ page }) => {
  const email = "htindev@gmail.com";
  const productName = "ZARA COAT 3";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("Studentpractice#5");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  await page.route(
    "https://rahulshettyacademy.com/api/ecom/user/get-cart-count/*",
    (route) =>
      route.continue({
        url: "https://rahulshettyacademy.com/api/ecom/user/get-cart-count/6960eac0c941646b7a8b3e68",
      }),
  );
  await page.locator("button:has-text('view')").first().click();
//   await page.pause();
  await expect(page.locator("p").last()).toHaveText("Product added for pagination testing");
});
