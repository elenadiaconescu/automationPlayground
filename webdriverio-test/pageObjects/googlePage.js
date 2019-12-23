const Page = require('./page');

class GooglePage extends Page {
    get searchField() {
        return $(`#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input`);
    }

    get googleSearchButton() {
        return $(`#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b`);
    }

    get wikiTitle() {
        return $(`#rso > div:nth-child(1) > div > div > div > div.r > a > h3`);
    }

    get youtubeVideo() {
        return $(`#_kfv3XaDAMfCR1fAPup2EkAI30 > div.mR2gOd > div > div > div:nth-child(3) > g-inner-card > div > a > div.wCIBKb > div`);
    }
}

module.exports = GooglePage;