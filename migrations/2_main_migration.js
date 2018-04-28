/**
 * Created by rk on 28/04/18.
 */

var TokenTrader = artifacts.require("TokenTrader");

const asset = require("../config").asset;
const buyPrice = require("../config").buyPrice;
const sellPrice = require("../config").sellPrice;
const selling = require("../config").selling;
const buying = require("../config").buying;
const units = require("../config").units;

module.exports = function (deployer) {
    var tokenTraderAddress;
    deployer.deploy(TokenTrader, asset, buyPrice, sellPrice, units, selling, buying)
        .then(() => {
            tokenTraderAddress = TokenTrader.address;
            console.log(tokenTraderAddress);
        })
};