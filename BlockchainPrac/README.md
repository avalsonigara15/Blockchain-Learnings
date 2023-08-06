# Ethers Simple Storage

Hiiii!!!!

## Using Environmental Variables and Encrypted Key Approach to keep the private key safe

One can make use of .env file to store the private key and the RPC url rather then hardcoding it.

### Steps Included

1. Add the PrivateKey and RPC url into .env file
2. Run `npm install dotenv` and require it into the deploy.js file, `require('dotenv').config()`
3. Now insted of pasting the rpc url and private_key directly use `process.env.{variable from the .env file}`

### Making a EncryptedKey file for making the private key encryptkey

1. Firstly add the private key and a privateKey password to the .env file
2. Make an EncryptedKey.js file and add the logic for encrypting the private key which is in the .env file and which can be only decrypted using the privateKey password which is initially stored in the .env file.
3. Run the **EncryptedKey.js** which further creates an _encryptedkey.json_ file which has the encrypted key.
4. Now get the encrypted key from the json file and decrypt it using the Password into the deploy.js file (**NOTE** the Password is sent from the commandline while deploying the contract with the command `PRIVATE_KEY_PASSWORD=<password> node deploy.js`)
5. This would run exactly as we expect it to run
