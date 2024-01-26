// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Importing the SafeMath library
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

// Simple contract that uses SafeMath for basic arithmetic
contract MathContract {
    using SafeMath for uint256; // Using SafeMath for uint256 data type

    uint256 public result;

    /**
     * @dev Function to add two numbers using SafeMath.
     * @param _a The first number.
     * @param _b The second number.
     */
    function add(uint256 _a, uint256 _b) external {
        result = _a.add(_b);
    }
}
