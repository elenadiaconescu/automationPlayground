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
    searchPage.searchField.waitForDisplayed(magicNr.THRE_SECONDS);
    assert(searchPage.searchField.isDisplayed());
    searchPage.searchField.click();
});

When('title Google is displayed', () => {
    const title = browser.getTitle();
    assert.strictEqual(title, 'Google');
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

Given('User write hakunamatata in search field', () => {
    searchPage.searchField.setValue("hakunamatata");
});

When('User sees search button', () => {
    searchPage.googleSearchButton.isDisplayed();
});

Then('User clicks on search button', () => {
    searchPage.searchField.click();
    searchPage.wikiTitle.isDisplayed();
});

Then('Users selects youtube video', () => {
    searchPage.youtubeVideo.waitForDisplayed(magicNr.THRE_SECONDS);
    searchPage.youtubeVideo.click();
});

Then('should pause the execution', () => {
    const starttime = new Date().getTime()
    browser.pause(3000)
    const endtime = new Date().getTime()
    console.log(endtime - starttime) // outputs: 3000
});