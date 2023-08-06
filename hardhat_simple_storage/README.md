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
