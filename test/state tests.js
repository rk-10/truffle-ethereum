/**
 * Created by rk on 28/04/18.
 */

var TokenTrader = artifacts.require("TokenTrader");

contract("State storage tests", function (accounts) {
    it("Asset address is set", function () {
        return TokenTrader.deployed()
            .then((Instance) => {
                return Instance.asset.call()
                    .then((address) => {
                        assert.notEqual(address, "0x0000000000000000000000000000000000000000");
                    })
            })
    });

    it("Buy Price is set", function () {
        return TokenTrader.deployed()
            .then((Instance) => {
                return Instance.buyPrice.call()
                    .then((price) => {
                        console.log(Number(price));
                        assert.notEqual(Number(price), 0);
                    })
            })
    });

    it("Sell Price is set", function () {
        return TokenTrader.deployed()
            .then((Instance) => {
                return Instance.sellPrice.call()
                    .then((price) => {
                        console.log(Number(price));
                        assert.notEqual(Number(price), 0);
                    })
            })
    });

    it("Units are set", function () {
        return TokenTrader.deployed()
            .then((Instance) => {
                return Instance.units.call()
                    .then((unit) => {
                        console.log(Number(unit));
                        assert.notEqual(Number(unit), 0);
                    })
            })
    });

    it("Is selling tokens", function () {
        return TokenTrader.deployed()
            .then((Instance) => {
                return Instance.sellsTokens.call()
                    .then((_bool) => {
                        console.log(_bool);
                        assert.equal(_bool, true);
                    })
            })
    });

    it("Is buying tokens", function () {
        return TokenTrader.deployed()
            .then((Instance) => {
                return Instance.buysTokens.call()
                    .then((bool) => {
                        console.log(bool);
                        assert.equal(bool, true);
                    })
            })
    });
});