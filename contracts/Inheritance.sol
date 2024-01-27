// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Base contract with a state variable
contract Base {
    // Public state variable to store data
    uint256 public data;

    // Constructor to initialize data
    constructor(uint256 _data) {
        data = _data;
    }
}

// Derived contract inheriting from Base
contract Derived is Base {
    /**
     * @dev Constructor for the Derived contract.
     * @param _data Initial value for the 'data' variable.
     */
    constructor(uint256 _data) Base(_data) {
        // The 'Base' constructor is called with the specified '_data' argument.
    }

    /**
     * @dev Function in the derived contract to get the value of the data.
     * @return The value of the data variable.
     */
    function getData() public view returns (uint256) {
        return data;
    }
}
