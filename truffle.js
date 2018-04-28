var HDWalletProvider = require("truffle-hdwallet-provider");
var ganacheMnemonic = require("./config").ganacheMnemonic;
var rinkebyMnemonic = require("./config").rinkebyMnemonic;
var rinkebyProvider = require("./config").rinekebyUrl;

module.exports = {
    networks: {
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(rinkebyMnemonic, rinkebyProvider);
            },
            network_id: '4',
        },
        test: {
            provider: function() {
                return new HDWalletProvider(ganacheMnemonic, "http://127.0.0.1:8545/");
            },
            network_id: 5777,
        },
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
};