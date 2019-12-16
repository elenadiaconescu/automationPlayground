const { Given } = require('cucumber');
const { When } = require('cucumber');
const { Then } = require('cucumber');
const assert = require('assert');
const magicNr = require('../../selectors/magic_numbers');
const googlePage = require('../../pageObjects/googlePage');
const searchPage = new googlePage();

Given('google page', () => {
    browser.url('https://google.com')
});

Given('User clicks on search field', () => {
    searchPage.searchField.waitForDisplayed(magicNr.TEN_SECONDS);
    assert(searchPage.searchField.isDisplayed());
    searchPage.searchField.click();
});

When('title Google is displayed', () => {
    const title = browser.getTitle()
    assert.strictEqual(title, 'Google')
});

When('User passes {string} in search field', (searchTerm) => {
    switch (searchTerm) {
        case 'hakuna':
            searchPage.searchField.setValue("hakuna");
            break;
        case 'matata':
            searchPage.searchField.setValue("matata");
            break;
        case 'hakunamatata':
            searchPage.searchField.setValue("hakunamatata");
            break;
    }
});

Then('User clicks on search', () => {
    searchPage.googleSearchButton.waitForDisplayed(magicNr.TEN_SECONDS);
    // browser.click(searchPage.googleSearchButton);
});
