/* eslint-disable no-unused-expressions */
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

describe("JediNFT", function () {
  let owner: SignerWithAddress;
  let userOne: SignerWithAddress;
  let nft: Contract;
  const baseUri = "https://gateway.pinata.cloud/ipfs/";

  beforeEach(async function () {
    // Get the signers
    [owner, userOne] = await ethers.getSigners();

    // Deploy the JDT token
    const testERC721 = await ethers.getContractFactory("JediNFT");
    nft = <Contract>await testERC721.deploy();
    await nft.deployed();
  });

  it("should be deployed", async function () {
    expect(nft.address).to.be.properAddress;
  });

  it("should not be able to mint and get balance", async function () {
    await nft.safeMintWithUri(
      owner.address,
      "Qma8z6G3c1gsKUcfv8JqoEtFMsrq5hBuESp3EiB8juXiS9"
    );

    const balance = await nft.balanceOf(owner.address);
    expect(balance).to.eq(1);
  });

  it("should not be able to mint with another address and get tokenUri", async function () {
    await nft
      .connect(userOne)
      .safeMintWithUri(
        owner.address,
        "Qma8z6G3c1gsKUcfv8JqoEtFMsrq5hBuESp3EiB8juXiS9"
      );

    const tokenUri = await nft.tokenURI(0);

    expect(tokenUri).to.eq(
      baseUri + "Qma8z6G3c1gsKUcfv8JqoEtFMsrq5hBuESp3EiB8juXiS9"
    );
  });

  it("should not be able to get right totalSupply", async function () {
    expect(await nft.totalSupply()).to.eq(0);
    await nft
      .connect(userOne)
      .safeMintWithUri(
        userOne.address,
        "Qma8z6G3c1gsKUcfv8JqoEtFMsrq5hBuESp3EiB8juXiS9"
      );
    expect(await nft.totalSupply()).to.eq(1);
  });

  it("should not be able to get right owner", async function () {
    await nft
      .connect(userOne)
      .safeMintWithUri(
        userOne.address,
        "Qma8z6G3c1gsKUcfv8JqoEtFMsrq5hBuESp3EiB8juXiS9"
      );
    expect(await nft.ownerOf(0)).to.eq(userOne.address);
  });
});
