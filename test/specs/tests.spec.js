import LoginPage from "../pageObjects/Login.page.js";
import ProductsPage from "../pageObjects/Products.page.js";
import CartPage from "../pageObjects/Cart.page.js";
import CheckoutPage from "../pageObjects/Checkout.page.js";
import allureReporter from "@wdio/allure-reporter";

describe("Sauce Lab App Tests", () => {
  // negative test

  it("Should not login with invalid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauces");
    await expect(LoginPage.errorMsgContainer).toBeExisting();
    await expect(LoginPage.errorMsgContainer).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  // positive tests

  it("Should login with valid credentials", async () => {
    allureReporter.addFeature("login with valid credentials");
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(ProductsPage.titleProducts).toBeExisting();
    await expect(ProductsPage.titleProducts).toHaveTextContaining("PRODUCTS");
  });

  it("Сheck the price of the product", async () => {
    allureReporter.addSeverity("Normal");
    await ProductsPage.productItem("4");
    const totalPrice = CartPage.inventoryItemPrice;
    await CartPage.addToCartSauceLabsBackpack.click();
    await CartPage.removeSauceLabsBackpackBtn.click();
    await expect(totalPrice).toBeExisting();
    await expect(totalPrice).toHaveText("$29.99");
  });

  it("Check the added item in the shopping cart", async () => {
    allureReporter.addSeverity("Critical");
    await ProductsPage.open();
    await ProductsPage.addToCartProducts();
    await ProductsPage.shoppingCart.click();
    await expect(CartPage.titleCart).toBeExisting();
    await expect(CartPage.titleCart).toHaveTextContaining("YOUR CART");
  });

  it("Check in and complete the purchase", async () => {
    await ProductsPage.checkoutBtn.click();
    await CheckoutPage.information("tester", "secret_name", "1111");
    await expect(CheckoutPage.summaryTotalLabel).toBeExisting();
    await expect(CheckoutPage.summaryTotalLabel).toHaveTextContaining(
      "Total: $60.45"
    );
    await CheckoutPage.finishBtn.click();
    await expect(CheckoutPage.ponyExpress).toBeExisting();
    await expect(CheckoutPage.ponyExpress).toHaveTextContaining(
      "THANK YOU FOR YOUR ORDER"
    );
  });
});
