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

When('User passes {string} in search field', (searchedTerm) => {
    switch (searchedTerm) {
        case 'hakuna':
            searchYoutubePage.youtubeSearchField.setValue("hakuna");
            break;
        case 'matata':
            searchYoutubePage.youtubeSearchField.setValue("matata");
            break;
        case 'hakunamatata':
            searchYoutubePage.youtubeSearchField.setValue("hakunamatata");
            break;
    }
});

When('Youtube search field is displayed', () => {
    searchYoutubePage.youtubeSearchField.waitForDisplayed(magicNr.THRE_SECONDS);
    assert(searchYoutubePage.youtubeSearchField.isDisplayed());
});

// Given('User clicks on search field on youtube page', () => {
//     searchYoutubePage.youtubeSearchField.waitForDisplayed(magicNr.THRE_SECONDS);
//     assert(searchYoutubePage.youtubeSearchField.isDisplayed());
//     searchYoutubePage.youtubeSearchField.click();
// });
