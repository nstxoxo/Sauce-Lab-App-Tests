import Page from "./Page.js";
import allureReporter from "@wdio/allure-reporter";

class CheckoutPage extends Page {
  get titleCheckout() {
    return $(".title");
  }

  get inputFirstName() {
    return $("#first-name");
  }
  get inputLastName() {
    return $("#last-name");
  }

  get inputPostalCode() {
    return $("#postal-code");
  }

  get continueBtn() {
    return $("#continue");
  }
  get summaryTotalLabel() {
    return $(".summary_total_label");
  }

  get finishBtn() {
    return $("#finish");
  }

  get ponyExpress() {
    return $("h2=THANK YOU FOR YOUR ORDER");
  }

  async information(firstName, lastName, portalCode) {
    allureReporter.addStep("Add buyer information");
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputPostalCode.setValue(portalCode);
    await this.continueBtn.click();
  }

  openFirstStep() {
    return super.open("checkout-step-one.html");
  }
  openSecondStep() {
    return super.open("checkout-step-two.html");
  }
  openComplete() {
    return super.open("checkout-complete.html");
  }
}

export default new CheckoutPage();
