# truffle-ethereum

Deployement of an escrow Smart Contract using truffle framework. This smart contract can be used to trade erc20 tokens for ether and vice-versa. 

# Prerequisites
1. nodejs version 8.9.x or higher
2. npm version 5.6.0 or higher
3. A private block chain (geth) for testing. I recommend using [Ganache](http://truffleframework.com/ganache/)

# Installing
1. Clone this repository
2. Install truffle
   * `$ npm install truffle`
3. Install truffle-hdwallet-provider for interacting with other networks.
   * `$ npm install truffle-hdwallet-provider`
   
# Getting Started
1. Set all the neccesary configurations in the `config.js` file.
   * erc20 token address you want to trade using this contract. `asset: "address"`
   * sell price of this token (the price at which contract will sell tokens)
   * buy price of this token (the price at which contract will buy tokens)
   * no. of units to sell for above sell price
   * mnemonic of your wallet from which you will deploy the contract (test or hdwallet)
   * URI for other notwork if you want to deploy on mainet or rinkeby or ropsten networks.
2. Run `$ truffle compile` from root of repo. This will compile the contracts.
3. Run `$ truffle migrate --network test` (we can specify which network we want our contract to be deployed at. Can be set in    `truffle.js` file)

# Working
1. One simply has to send ether to the contract address to recieve tokens.
2. To send tokens to the contract, one first has to give approval to the contract for that perticular token and the call the      `sell()` function. 

# Running Tests
Run `truffle test` from root of your repo

# License
This project is licensed under the MIT License - see the LICENSE.md file for details
