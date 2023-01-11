import Page from "./Page.js";
import allureReporter from "@wdio/allure-reporter";

class LoginPage extends Page {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#login-button");
  }

  get errorMsgContainer() {
    return $(".error-message-container.error");
  }

  async login(username, password) {
    allureReporter.addStep("Login user");
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  open() {
    return super.open("");
  }
}

export default new LoginPage();
