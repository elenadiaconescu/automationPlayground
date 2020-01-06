const Page = require('./page');

class GooglePage extends Page {
    get searchField() {
        return $(`#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input`);
    }

    get googleSearchButton() {
        return $(`#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b`);
    }

    get googleSearchButtonFromDropdown() {
        return $(`#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > div.tfB0Bf > center > input.RNmpXc`);
    }
   
    get wikiLogo() {
        return $(`#p-logo > a`);
    }

}

module.exports = GooglePage;