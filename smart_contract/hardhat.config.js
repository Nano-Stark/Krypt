// https://eth-ropsten.alchemyapi.io/v2/Lr5sYUnGfbUxto1BZjtyvS0n0beqgRNN

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Lr5sYUnGfbUxto1BZjtyvS0n0beqgRNN',
      accounts: ['a5fcd38fa1385e21fb43d929b3f5a6e5c7686a7e3a0d7707e7776919790b8333'] //Account 2
    }
  }
};
