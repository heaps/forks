/*
*  BPToken.sol
*  open zeppelin contracts
* https://www.npmjs.com/package/@openzeppelin/contracts
* 
* open zeppelin erc20
* https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol
* 
*/ 

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract ABEToken is ERC20 {
  constructor() ERC20('Abel Token', 'ABE') {
    _mint(msg.sender, 1000000000 * 10 ** 18);
  }
}