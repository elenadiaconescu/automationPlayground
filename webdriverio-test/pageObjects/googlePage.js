const Page = require('./page');

class GooglePage extends Page {
    get searchField() {
        return $(`#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input`);
    }

    get googleSearchButton() {
        return $(`#input aria-label=\"Hledat Googlem\"`);
    }

}

module.exports = GooglePage;