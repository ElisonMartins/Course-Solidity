require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

// Task para listar contas
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://sepolia.infura.io/v3/your-api-key";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Your etherscan API key";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "your private key";

module.exports = {
  defaultNetwork: "sepolia", // Alterada para "sepolia"
  networks: {
    hardhat: {
    },
    local: {
      url: 'http://127.0.0.1:8545/'
    },
    sepolia: { // Adicionada configuração para a rede "sepolia"
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY], // Você pode optar por usar a chave privada aqui
      saveDeployments: true,
    },
  },
  solidity: "0.8.2",
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0
    },
    feeCollector: {
      default: 1
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
}
