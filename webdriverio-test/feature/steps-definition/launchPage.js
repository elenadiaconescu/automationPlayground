const { Given } = require('cucumber');
const { When } = require('cucumber');
const { Then } = require('cucumber');
const assert = require('assert');
const magicNr = require('../../selectors/magic_numbers');
const googlePage = require('../../pageObjects/googlePage');
const searchGooglePage = new googlePage();

Given('google page', () => {
    browser.url('https://google.com');
});

Given('User clicks on search field', () => {
    searchGooglePage.searchField.waitForDisplayed(magicNr.THRE_SECONDS);
    assert(searchGooglePage.searchField.isDisplayed());
    searchGooglePage.searchField.click();
});

When('title Google is displayed', () => {
    const title = browser.getTitle();
    assert.strictEqual(title, 'Google');
});

When('User passes {string} in search field', (searchTerm) => {
    switch (searchTerm) {
        case 'hakuna':
            searchGooglePage.searchField.setValue("hakuna");
            break;
        case 'matata':
            searchGooglePage.searchField.setValue("matata");
            break;
        case 'hakunamatata':
            searchGooglePage.searchField.setValue("hakunamatata");
            break;
    }
});

Given('User write hakunamatata in search field', () => {
    searchGooglePage.searchField.waitForDisplayed(magicNr.THRE_SECONDS);
    searchGooglePage.searchField.isDisplayed();
    searchGooglePage.searchField.setValue("hakunamatata");
});

When('User sees search button', () => {
    searchGooglePage.googleSearchButton.waitForDisplayed(magicNr.THRE_SECONDS);
    searchGooglePage.googleSearchButton.isDisplayed();
});

Then('User clicks on search button', () => {
    searchGooglePage.googleSearchButtonFromDropdown.click();
});

Then('should pause the execution', () => {
    const starttime = new Date().getTime()
    browser.pause(3000)
    const endtime = new Date().getTime()
    console.log(endtime - starttime) // outputs: 3000
});