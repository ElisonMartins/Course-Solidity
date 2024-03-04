// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Contract declaration for Crud (Create, Read, Update, Delete)
contract Crud {
    // Struct definition for a User, containing an id and a name
    struct User {
        uint id;
        string name;
    }
    
    // Array to store all users
    User[] public users;
    
    // Variable to keep track of the next available user id
    uint public nextId = 1;

    // Function to create a new user with the given name
    function create(string memory name) public {
        // Pushes a new User struct with the next available id and the given name into the users array
        users.push(User(nextId, name));
        // Increments the nextId for the next user
        nextId++;
    }

    // Function to read user details based on the given id
    function read(uint id) view public returns(uint, string memory) {
        // Calls the internal function 'find' to get the index of the user with the given id
        uint i = find(id);
        // Returns the id and name of the user found at index 'i' in the users array
        return(users[i].id, users[i].name);
    }

    // Function to update the name of a user with the given id
    function update(uint id, string memory name) public {
        // Calls the internal function 'find' to get the index of the user with the given id
        uint i = find(id);
        // Updates the name of the user found at index 'i' in the users array
        users[i].name = name;
    }

    // Function to delete a user with the given id
    function destroy(uint id) public {
        // Calls the internal function 'find' to get the index of the user with the given id
        uint i = find(id);
        // Deletes the user found at index 'i' in the users array
        delete users[i];
    }

    // Internal function to find the index of a user with the given id
    function find(uint id) view internal returns(uint) {
        // Iterates through the users array
        for(uint i = 0; i < users.length; i++) {
            // Checks if the id of the current user matches the given id
            if(users[i].id == id) {
                // If found, returns the index of the user
                return i;
            }
        }
        // If the user with the given id is not found, reverts the transaction with an error message
        revert('user does not exist!');
    }
 }
