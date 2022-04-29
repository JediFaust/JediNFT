// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const JediNFT = await ethers.getContractFactory("JediNFT");
  const jedinft = await JediNFT.deploy();

  await jedinft.deployed();

  console.log("JediNFT deployed to:", jedinft.address);

  const Jedi1155 = await ethers.getContractFactory("Jedi1155");
  const jedi1155 = await Jedi1155.deploy();

  await jedi1155.deployed();

  console.log("Jedi1155 deployed to:", jedi1155.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
