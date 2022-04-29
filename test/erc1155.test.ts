/* eslint-disable no-unused-expressions */
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

describe("Jedi1155", function () {
  let owner: SignerWithAddress;
  // let userOne: SignerWithAddress;
  let nft: Contract;

  beforeEach(async function () {
    // Get the signers
    [owner] = await ethers.getSigners();

    // Deploy the Jedi1155 token
    const testERC1155 = await ethers.getContractFactory("Jedi1155");
    nft = <Contract>await testERC1155.deploy();
    await nft.deployed();
  });

  it("should be deployed", async function () {
    expect(nft.address).to.be.properAddress;
  });

  it("should be able to mint and get balance and total supply", async function () {
    await nft.mintNewToken(owner.address, 1000000, "0x00");

    expect(await nft.balanceOf(owner.address, 0)).to.eq(1000000);
    expect(await nft["totalSupply()"]()).to.eq(1);
  });

  it("should be able to mint by Id and get token supply", async function () {
    await nft.mintNewToken(owner.address, 1000000, "0x00");
    await nft.mintTokenById(owner.address, 0, 500000, "0x00");

    expect(await nft["totalSupply(uint256)"](0)).to.eq(1500000);
  });
});
