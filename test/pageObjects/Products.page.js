import Page from "./Page.js";
import allureReporter from "@wdio/allure-reporter";

class ProductsPage extends Page {
  get titleProducts() {
    return $('//span[@class="title"]');
  }

  get menuBtn() {
    return $("#react-burger-menu-btn");
  }

  get shoppingCart() {
    return $('//a[@class="shopping_cart_link"]');
  }
  get checkoutBtn() {
    return $("#checkout");
  }

  get inventoryItem() {
    return $("inventory_item");
  }

  get inventoryItemPrice() {
    return $("inventory_details_price");
  }

  get addToCartSauceLabsBackpack() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  get addToCartSauceLabsBikeLight() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }

  get addToCartSauceLabsBoltTShirt() {
    return $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  async addToCartProducts() {
    allureReporter.addStep('Add products to cart');
    await this.addToCartSauceLabsBackpack.click();
    await this.addToCartSauceLabsBikeLight.click();
    await this.addToCartSauceLabsBoltTShirt.click();
  }

  async productItem(product) {
    await $(`#item_${product}_title_link`).click();
  }

  open() {
    return super.open("inventory.html");
  }
}

export default new ProductsPage();
