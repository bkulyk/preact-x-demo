/* global document, window */
const { expect } = require('chai');
const {
  Given,
  When,
  Then,
  BeforeAll,
  AfterAll,
} = require('cucumber');
const { beforeAll, afterAll, nightmare } = require('./nightmare');
const { port } = require('./config');

BeforeAll(async () => {
  beforeAll(this);
});

AfterAll(async () => {
  await this.page.end();
  await afterAll(this);
});

Given('a browser page open to {string}', async (uri) => {
  this.page = nightmare.goto(`http://localhost:${port}${uri}`);
});

When('I type {string} in the {string} field', async (value, field) => {
  await this.page.type(`input[name="${field}"]`, value);
});

When('I check the {string} checkbox', async (field) => {
  await this.page.click(`input[name="${field}"]`);
});

When('I click {string}', async (selector) => {
  await this.page.click(selector);
});

When('I wait {int} ms', async (ms) => {
  await this.page.wait(ms);
});

When('I wait for {string} to appear', async (selector) => {
  await this.page.wait(selector);
});

When('I choose {string} from {string}', async (text, selector) => {
  this.page.select(`build-and-price-test-harness ${selector}`, text);
});

Then('window.location should be {string}', async (location) => {
  const windowLocation = await this.page.evaluate(() => window.location);
  expect(windowLocation.pathname).to.equal(location);
});

Then('the {string} should contain {string}', async (selector, text) => {
  const htmlText = await this.page.evaluate(sel => (
    document.querySelector(sel).innerText
  ), selector);

  expect(htmlText).to.contain(text);
});

Then('the element {string} should contain {string}', async (selector, text) => {
  const htmlText = await this.page.evaluate(sel => (
    document.querySelector(sel).innerText
  ), selector);

  expect(htmlText).to.contain(text);
});

Then('the page should have {int} {string} elements', async (expectedCount, selector) => {
  const count = await this.page.evaluate(sel => (
    document.querySelectorAll(sel).length
  ), selector);

  expect(count).to.equal(expectedCount);
});
