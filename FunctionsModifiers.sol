// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title DataTypesExample
 * @dev A sample contract demonstrating the usage of data types and basic functionalities in Solidity.
 */
contract DataTypesExample {
    // State variables
    address public owner;
    uint256 public integerValue;
    bool public isActive;
    string public message;

    /**
     * @dev Modifier restricting access only to the owner.
     */
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _; // Continue execution if the requirement is met
    }

    /**
     * @dev Constructor of the contract.
     */
    constructor() {
        owner = msg.sender;
        integerValue = 42;
        isActive = true;
        message = "Hello, World!";
    }

    /**
     * @dev Function that updates the contract's message.
     * @param newMessage New message to be set.
     */
    function updateMessage(string memory newMessage) public onlyOwner {
        require(bytes(newMessage).length > 0, "Message cannot be empty");

        // Local variables
        uint256 messageLength = bytes(message).length;
        uint256 newMessageLength = bytes(newMessage).length;

        // Update state variables
        integerValue = newMessageLength;
        isActive = !isActive;

        // Control flow structure
        require(messageLength != newMessageLength, "The new message is not longer");
        message = newMessage;
    }

    /**
     * @dev Read-only function that returns the length of the message.
     * @return The length of the message.
     */
    function getMessageLength() public view returns (uint256) {
        return bytes(message).length;
    }
}
