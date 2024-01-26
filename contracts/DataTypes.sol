// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataTypes {
    // State variables
    address public owner;
    uint256 public integerValue;
    bool public isActive;
    string public message;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _; // Continue execution if the requirement is met
    }

    // Constructor
    constructor() {
        owner = msg.sender;
        integerValue = 42;
        isActive = true;
        message = "Hello, World!";
    }

    // Function using various data types
    function updateMessage(string memory newMessage) public onlyOwner {
        require(bytes(newMessage).length > 0, "Message cannot be empty");
        
        // Local variables
        uint256 messageLength = bytes(message).length;
        uint256 newMessageLength = bytes(newMessage).length;

        // Update state variables
        integerValue = newMessageLength;
        isActive = !isActive;

        // Control flow structure
        if (messageLength < newMessageLength) {
            message = newMessage;
        } else {
            revert("The new message is not longer");
        }
    }

    // Read-only function that doesn't modify the state (using view)
    function getMessageLength() public view returns (uint256) {
        return bytes(message).length;
    }
}
