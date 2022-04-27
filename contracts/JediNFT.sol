// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract JediNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("JediNFT", "JNFT") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://gateway.pinata.cloud/ipfs/";
    }

    function safeMintWithUri(address to, string memory tokenUri) external returns (uint256) {
        uint256 newItemId = _tokenIds.current();
        _tokenIds.increment();

        _safeMint(to, newItemId);
        _setTokenURI(newItemId, tokenUri);

        return newItemId;
    }

    function totalSupply() external view returns (uint256) {
        return _tokenIds.current();
    }
}