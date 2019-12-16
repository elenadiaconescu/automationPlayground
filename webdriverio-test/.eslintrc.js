module.exports = {
    plugins: [
        "wdio",
        "chai-friendly"
    ],
    extends: [
        "airbnb-base",
        "plugin:wdio/recommended",
        "plugin:chai-friendly/recommended"
    ],
    rules: {
        "no-plugins": "off",
        "class-methods-use-this": "off"
    },
    globals: {
        "window": true,
        "document": true
    }
}