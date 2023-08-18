# Hardhat-Simple-Storage

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

### Steps for Execution

**Important Functions to be used (Refer the ethers.js Documentation for updated functions and syntaxs)**

1. Import the `ethers` from the `hardhat` dependencies.
2. Use the `await ethers.getContractFactory()` to get the simpleStorage contract.
3. Deploy the contract using ` await contractfactory.deploy().` and wait for the deployment of the transaction using `await simpleStorage.deploymentTransaction().wait(1)`.
4. To get the address according to the latest version(v6) need to await for the address to be fetched using `await contract.getAddress()`

### Using API calls to etherscan for verifying the contract everytime

#### Usig _hardhat-verify_ Plugin

**STEPS**

1. Install the _hardhat-verify_ Plugin using ` yarn add --save-dev @nomicfoundation/hardhat-verify` and require it into the hardhat.config.js file
2. Add the section bellow the networks section

```javascript
etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
};
```

3. Create the async Verify function.
4. Check if the Network Id matches with the name of the network called and the API KEY for etherscan is valid or not and the Call the Verify function.
