const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = ['0x3b6dd540cf4f516ed104d4f6018f14002d35384b7d609eb7e3f9a276691dd79a'];



module.exports = {
  networks: {
    bSc: {
      provider: () => {
        try {
          return new HDWalletProvider(privateKeys, 'https://bsc-dataseed.binance.org/');
        } catch (error) {
          console.error('Erro ao criar a instância HDWalletProvider:', error.message);
          throw error;
        }
      },
      network_id: 56,
      skipDryRun: true
    },
    bscTestnet: {
      provider: () => {
        try {
          return new HDWalletProvider(privateKeys, 'https://data-seed-prebsc-1-s1.binance.org:8545/');
        } catch (error) {
          console.error('Erro ao criar a instância HDWalletProvider:', error.message);
          throw error;
        }
      },
      network_id: 97,
      skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.21",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },

};
