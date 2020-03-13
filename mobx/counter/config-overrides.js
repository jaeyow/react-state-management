const { disableEsLint, addDecoratorsLegacy, override} = require("customize-cra");
module.exports = {
    webpack: override(disableEsLint(), addDecoratorsLegacy())
};