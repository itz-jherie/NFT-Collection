const { ethers } = require("hardhat");
require("dotenv").config({path:".env"});
const {WHITELIST_CONTRACT_ADDRESS, METADATA_URL} = require("../constants");

async function main() {
    //address of whitelist contract;
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
    const metadataURL = METADATA_URL;

     /*
        A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
        so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
    */
    const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

    //deploy the contract
    const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
        metadataURL,
        whitelistContract
    );
    
    //log contract address
    console.log(
        "address:", 
        deployedCryptoDevsContract.address
    );
}

// Call thee main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });