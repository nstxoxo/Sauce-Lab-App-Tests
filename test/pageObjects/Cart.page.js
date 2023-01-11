import Page from "./Page.js";

class CartPage extends Page {
  get titleCart() {
    return $(".title");
  }

  get menuBtn() {
    return $("#react-burger-menu-btn");
  }

  get inventoryItemPrice() {
    return $(".inventory_details_price");
  }

  get addToCartSauceLabsBackpack() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  get removeSauceLabsBackpackBtn() {
    return $('[data-test="remove-sauce-labs-backpack"]');
  }

  get continueShoppingBtn() {
    return $("#continue-shopping");
  }

  get checkoutBtn() {
    return $("#checkout");
  }

  open() {
    return super.open("cart.html");
  }
}

export default new CartPage();
