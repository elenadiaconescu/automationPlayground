const Page = require('./page');

class YoutubePage extends Page {
    get searchField() {
        return $(`   `);
    }

    get googleSearchButton() {
        return $(`  `);
    }

    get wikiTitle() {
        return $(`  `);
    }

    get youtubeVideo() {
        return $(`  `);
    }
}

module.exports = YoutubePage;