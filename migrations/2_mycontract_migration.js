const DungeonsAndDragonsCharacter = artifacts.require('DaD')
const KOVAN_VRF_COORDINATOR = '0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9'
const KOVAN_LINKTOKEN = '0xa36085f69e2889c224210f603d836748e7dc0088'
const KOVAN_KEYHASH = '0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4'

module.exports = async (deployer, network, [defaultAccount]) => {
  // hard coded for rinkeby
  if (network.startsWith('kovan')) {
    await deployer.deploy(DungeonsAndDragonsCharacter, KOVAN_VRF_COORDINATOR, KOVAN_LINKTOKEN, KOVAN_KEYHASH)
    let dnd = await DungeonsAndDragonsCharacter.deployed()
  } else if (network.startsWith('mainnet')) {
    console.log("If you're interested in early access to Chainlink VRF on mainnet, please email vrf@chain.link")
  } else {
    console.log("Right now only rinkeby works! Please change your network to Rinkeby")
    // await deployer.deploy(DungeonsAndDragonsCharacter)
    // let dnd = await DungeonsAndDragonsCharacter.deployed()
  }
}
