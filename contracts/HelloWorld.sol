// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    // Adiciona um construtor vazio
    constructor() {}

    // Função para obter a mensagem "Hello World"
    function getHelloWorld() public pure returns (string memory) {
        return "Hello World";
    }
}
