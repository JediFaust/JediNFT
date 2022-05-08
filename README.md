
<h1 align="center"><b>JediNFT Smart Contract</b></h3>

<div align="left">


[![Language](https://img.shields.io/badge/language-solidity-orange.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"><h2 align="center"><b>Solidity Smart contract for JNFT ERC721 and J1155 ERC1155 Tokens
    </h2></b><br> 
</p>

## 📝 Table of Contents

- [EtherScan Link](#etherscan)
- [Installing](#install)
- [Contract Functions](#functions)
- [Deploy & Test Scripts](#scripts)
- [HardHat Tasks](#tasks)

## 🚀 Link on EtherScan <a name = "etherscan"></a>
ERC721 Contract: <br>
https://rinkeby.etherscan.io/address/0xE115E5f1c26C1f10ec1D25702A4dA2d7C14BACf0#code<br>
ERC1155 Contract: <br>
https://rinkeby.etherscan.io/address/0x6797e8fc06143A1d4e4222BF424FFF439F3d122a#code<br>



## 🚀 Installing <a name = "install"></a>
- Set initial values on scripts/deploy.ts file
- Deploy both contracts running on console:
```shell
node scripts/deploy.ts
```
- Copy address of deployed contract and paste to .env file as CONTRACT_ADDRESS
- Use mint, mint1155 and mint1155-by-id functions




## ⛓️ Contract Functions <a name = "functions"></a>

- **safeMintWithUri()**
>Mint function for ERC721 Contract

- **mintNewToken()**
>Mint new token type on ERC1155 Contract

- **mintTokenById()**
>Mint existing tokens by id on ERC1155 Contract

- **totalSupply()**
>Get amount of token types<br>


- **totalSupply()**
>Get amount of tokens by their id<br>




## 🎈 Deploy & Test Scripts <a name = "scripts"></a>

```shell
node scripts/deploy.js --network rinkeby
npx hardhat test
```


## 💡 HardHat Tasks <a name = "tasks"></a>


```shell
npx hardhat mint
npx hardhat mint1155
npx hardhat mint1155-by-id
```
```

