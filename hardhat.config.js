require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle")
// require("@nomiclabs/hardhat-ethers")
// require('@openzeppelin/hardhat-upgrades')

/** @type import('hardhat/config').HardhatUserConfig */
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY 
module.exports = {
  defaultNetwork: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: "0.8.24",
};
