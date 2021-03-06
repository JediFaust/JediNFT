/* eslint-disable prettier/prettier */
/* eslint-disable node/no-unpublished-import */
/* eslint-disable node/no-extraneous-import */
import * as dotenv from "dotenv";

import { task } from "hardhat/config"
import "@nomiclabs/hardhat-waffle";

dotenv.config();

task("mint", "Safe mint task with URI")
  .addParam("address", "Address of the contract to mint to")
  .addParam("uri", "URI of the token")
  .setAction(async (taskArgs, hre) => {
    const [signer] = await hre.ethers.getSigners();
    const contractAddr = process.env.CONTRACT_ADDRESS;

    const NFTContract = await hre.ethers.getContractAt(
      "JediNFT",
      contractAddr as string,
      signer
    );

    const result = await NFTContract.safeMintWithUri(taskArgs.address, taskArgs.uri);

    console.log(result);
  });
