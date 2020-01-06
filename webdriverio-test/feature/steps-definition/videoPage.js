const { Given } = require('cucumber');
const { When } = require('cucumber');
const assert = require('assert');
const magicNr = require('../../selectors/magic_numbers');
const youtubePage = require('../../pageObjects/youtubePage');
const searchYoutubePage = new youtubePage();

Given('youtube page', () => {
    browser.url('https://www.youtube.com');
});

Given('title Youtube is displayed', () => {
    const title = browser.getTitle();
    assert.strictEqual(title, 'YouTube');
});

When('Youtube search field is displayed', () => {
    searchYoutubePage.youtubeSearchField.waitForDisplayed(magicNr.THRE_SECONDS);
    assert(searchYoutubePage.youtubeSearchField.isDisplayed());
});
