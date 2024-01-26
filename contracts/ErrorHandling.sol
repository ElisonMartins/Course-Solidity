// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Sets a custom error when the message is empty.
error EmptyMessage();

contract Reminder {
    // Public state variable to store the message.
    string public message;

    /**
     * @dev Defines a new message.
     * @param newMessage New message to be defined.
     */
    function setMessage(string memory newMessage) public {
        // Checks if the new message is empty.
        if (bytes(newMessage).length == 0) {
            // Rollback the transaction by calling the EmptyMessage custom error.
            revert EmptyMessage();
        }

        // Update the message if the check is successful.
        message = newMessage;
    }
}
