const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement,getText } = require("../../lib/commands.js");

Before(async function() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100
    });
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});
After(async function() {
    if (this.browser) {
        await this.browser.close();
    }
});
Given("user is on {string} page", async function(string) {
    return await this.page.goto(`https://qamid.tmweb.ru/client${string}`, {
        setTimeout: 10000,
    });
});
When("user selects a day", async function() {
  return clickElement(this.page, "body nav a:nth-child(2)")
});
When("user selects a time", async function() {
    return clickElement(this.page, "body main section:nth-child(2) div:nth-child(3) ul li a")
});
When("user selects a place", async function() {
    return clickElement(this.page, "div:nth-child(5) span:nth-child(5)");
});
When("user selects a place 1", async function() {
    return clickElement(this.page, "div:nth-child(5) span:nth-child(5)");
});
When("user selects a place 2", async function() {
    return clickElement(this.page, "div:nth-child(5) span:nth-child(6)");
});
When("user selects a place 3", async function() {
  return clickElement(this.page, "div:nth-child(9) span:nth-child(2)");
});
When("user push the register button", async function() {
    return clickElement(this.page, "button.acceptin-button")
});
Then("user sees the message {string}", async function(expectedMessage) {
    const messageElement = await this.page.$('h2.ticket__check-title');
    const actualMessage = await messageElement.evaluate(node => node.textContent);
    expect(actualMessage).contain(expectedMessage);
  });
Then("user cant push the register button", async function() {
  expect(
    String(
        await this.page.$eval("button", (button) => { 
            return button.disabled;
        })
    )
)
});
