const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()
// 0x5F3313814F7FB3E11C4a240141689BA9933c5607
module.exports = {
  networks: {
    kovan: {
      provider: function() {
        return new HDWalletProvider([process.env.PRIVATE_KEY], process.env.API_URL)
      },
      network_id: 42,
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider(process.env.MAINNET_MNEMONIC, process.env.MAINNET_RPC_URL)
      },
      network_id: '1',
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '0.6.6',
    },
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  plugins: [
    'truffle-plugin-verify'
  ]
}
