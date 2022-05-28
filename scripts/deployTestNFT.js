const hre = require("hardhat");

async function main() {
  const TestNFT = await hre.ethers.getContractFactory("TestNFT");
  const testNFT = await TestNFT.deploy();

  await testNFT.deployed();

  console.log("TestNFT deployed to:", testNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// npx hardhat clean
// npx hardhat compile

// npx hardhat run scripts/"your Project Name".js --network rinkeby(or MainNet) // npx hardhat run scripts/deployTestNFT.js --network rinkeby
// then you can create your Project's Contracts

// npx hardhat verify --network rinkeby 0xa5CB5cd2c515bECe56534bAC88609cf9edd0b0Ec
// then you can read Contract on etherscan.io
