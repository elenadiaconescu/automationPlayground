const Page = require('./page');

class YoutubePage extends Page {
    get youtubeSearchField() {
        return $(`#search`);
    }

    get youtubeSearchButton() {
        return $(`#search-icon-legacy`);
    }

    get youtubeVideoFound() {
        return $(`#video-title`);
    }
}

module.exports = YoutubePage;