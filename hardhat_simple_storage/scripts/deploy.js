// imports

const { ethers } = require("hardhat")

// async main function
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  // console.log(SimpleStorageFactory);
  console.log("Deploying contract...");
  const simpleStorage = await SimpleStorageFactory.deploy()
  await simpleStorage.deploymentTransaction().wait(1)
  // console.log(simpleStorage)
  const address=  await simpleStorage.getAddress()
  console.log(`Deployed contract to: ${address}`);
}

// main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
