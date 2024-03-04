// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Contract declaration for AdvancedStorage, where is an example of using solidity storage
contract AdvancedStorage {
    // Public variable declaration: ids stores an array of uint
    uint[] public ids;

    // Public function 'add' allows adding a new ID to the 'ids' array
    function add(uint id) public {
        // Adds the provided ID to the end of the 'ids' array
        ids.push(id);
    }

    // Public view function 'get' allows retrieving a specific ID from the 'ids' array
    function get(uint i) view public returns(uint) {
        // Returns the ID at position 'i' in the 'ids' array
        return ids[i];
    }

    // Public view function 'getAll' returns all the IDs stored in the 'ids' array
    function getAll() view public returns(uint[] memory) {
        // Returns the entire array of IDs
        return ids;
    }

    // Public view function 'length' returns the number of elements stored in the 'ids' array
    function length() view public returns(uint) {
        // Returns the length of the 'ids' array
        return ids.length;
    }
}
