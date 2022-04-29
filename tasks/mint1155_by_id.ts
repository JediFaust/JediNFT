/* eslint-disable prettier/prettier */
/* eslint-disable node/no-unpublished-import */
/* eslint-disable node/no-extraneous-import */
import * as dotenv from "dotenv";

import { task } from "hardhat/config"
import "@nomiclabs/hardhat-waffle";

dotenv.config();

task("mint1155-by-id", "J1155 mint task")
  .addParam("address", "Address of the contract to mint to")
  .addParam("id", "Id of the token to mint")
  .addParam("amount", "Amount of tokens to mint")
  .setAction(async (taskArgs, hre) => {
    const [signer] = await hre.ethers.getSigners();
    const contractAddr = process.env.CONTRACT_ADDRESS_1155;

    const Jedi1155 = await hre.ethers.getContractAt(
      "Jedi1155",
      contractAddr as string,
      signer
    );

    const result = await Jedi1155.mintTokenById(taskArgs.address, taskArgs.id, taskArgs.amount, "0x00");

    console.log(result);
  });
