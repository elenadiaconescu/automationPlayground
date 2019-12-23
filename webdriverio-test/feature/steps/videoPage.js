const { Given } = require('cucumber');
const assert = require('assert');
const magicNr = require('../../selectors/magic_numbers');
const youtubePage = require('../../pageObjects/youtubePage');
const searchYoutubePage = new youtubePage();

Given('youtube page', () => {
    browser.url('https://www.youtube.com/')
});

Given('User clicks on search field on youtube page', () => {
    searchYoutubePage.searchField.waitForDisplayed(magicNr.THRE_SECONDS);
    assert(searchYoutubePage.searchField.isDisplayed());
    searchYoutubePage.searchField.click();
});
