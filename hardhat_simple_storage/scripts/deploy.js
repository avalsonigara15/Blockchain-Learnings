// imports

const { ethers, run, network } = require("hardhat");
require("dotenv").config();

// async main function
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage",
    );
    // console.log(SimpleStorageFactory);
    console.log("Deploying contract...");
    const simpleStorage = await SimpleStorageFactory.deploy();
    // await simpleStorage.deploymentTransaction().wait(1);
    await simpleStorage.waitForDeployment(1);
    // console.log(simpleStorage)
    const contractAddress = await simpleStorage.getAddress();
    console.log(`Deployed contract to: ${contractAddress}`);

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.waitForDeployment(10);
        await verify(contractAddress, []);
    }
}

async function verify(contractAddress, args) {
    console.log("Verifying Contract.....");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified");
        } else {
            console.log(e);
        }
    }
}
// main function
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
