// const { test, expect } = require("@playwright/test");
// const { POManager } = require("../pageobjects/POManager");

// // const { LoginPage } = require("../pageobjects/LoginPage");
// // const { DashboardPage } = require("../pageobjects/DashboardPage");

// test("@Webst Client App login", async ({ page }) => {
//   const poManager = new POManager(page);
//   const username = "htindev@gmail.com";
//   const password = "Studentpractice#5";
//   const productName = "ZARA COAT 3";
//   const products = page.locator(".card-body");
//   const loginPage = poManager.getLoginPage();
//   await loginPage.goTo();
//   await loginPage.validLogin(username, password);
//   const dashboardPage = poManager.getDashboardPage(page);
//   await dashboardPage.searchProductAddCart(productName);
//   await dashboardPage.navigateToCard();

//   // await page.goto("https://rahulshettyacademy.com/client");
//   // await page.locator("#userEmail").fill(email);
//   // await page.locator("#userPassword").fill("Studentpractice#5");
//   // await page.locator("[value='Login']").click();
//   // await page.waitForLoadState("networkidle");
//   // await page.locator(".card-body b").first().waitFor();
//   // const titles = await page.locator(".card-body b").allTextContents();
//   // console.log(titles);
//   // const count = await products.count();
//   // for (let i = 0; i < count; ++i) {
//   //   if ((await products.nth(i).locator("b").textContent()) === productName) {
//   //     //add to cart
//   //     await products.nth(i).locator("text= Add To Cart").click();
//   //     break;
//   //   }
//   // }

//   // await page.pause();
//   // await page.locator("[routerlink*='cart']").click();
//   await page.locator("div li").first().waitFor();
//   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
//   expect(bool).toBeTruthy();
//   await page.locator("text=Checkout").click();
//   await page.locator("[placeholder*='Country']").pressSequentially("ind");
//   const dropdown = page.locator(".ta-results");
//   await dropdown.waitFor();
//   const optionsCount = await dropdown.locator("button").count();
//   for (let i = 0; i < optionsCount; ++i) {
//     const text = await dropdown.locator("button").nth(i).textContent();

//     if (text.trim("") === "India") {
//       await dropdown.locator("button").nth(i).click();
//       break;
//     }
//   }

//   await expect(page.locator(".user__name [type='text']").first()).toHaveText(
//     username,
//   );
//   // expect(await page.locator(".user__name label")).toHaveText(email);
//   await page.locator(".btnn").click();
//   await expect(page.locator(".hero-primary")).toHaveText(
//     "Thankyou for the order. ",
//   );
//   const orderId = await page
//     .locator(".em-spacer-1 .ng-star-inserted")
//     .textContent();
//   console.log(orderId);

//   await page.locator("button[routerlink*='myorders']").click();
//   await page.locator("tbody").waitFor();
//   const rows = await page.locator("tbody tr");

//   for (let i = 0; i < (await rows.count()); ++i) {
//     const rowOrderId = await rows.nth(i).locator("th").textContent();
//     if (orderId.includes(rowOrderId)) {
//       await rows.nth(i).locator("button").first().click();
//       break;
//     }
//   }
//   const orderIdDetails = await page.locator(".col-text").textContent();
//   expect(orderId.includes(orderIdDetails)).toBeTruthy();
//   await page.pause();
// });

// =====================================================================

const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test("Client App login", async ({ page }) => {
  const poManager = new POManager(page);
  //js file- Login js, DashboardPage
  const username = "htindev@gmail.com";
  const password = "Studentpractice#5";
  const productName = "Zara Coat 4";
  const products = page.locator(".card-body");
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(username, password);
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductAddCart(productName);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(productName);
  await cartPage.Checkout();

  const ordersReviewPage = poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind", "India");
  const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);
  await dashboardPage.navigateToOrders();
  const ordersHistoryPage = poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(orderId);
  expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

  //Zara Coat 4
});
