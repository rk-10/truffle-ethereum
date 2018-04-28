/**
 * Created by rk on 28/04/18.
 */

var TokenTrader = artifacts.require("TokenTrader");

contract("State storage tests", function (accounts) {
    it("Asseet address is set", function () {
        return TokenTrader.deployed()
            .then((Instance) => {
                Instance.asset.call()
                    .then((address) => {
                        assert.notEqual(address, "0x0");
                        assert.notEqual(address, 0x0);
                        assert.notEqual(address, undefined)
                    })
            })
    })
});