const Crud = artifacts.require('Crud');

// Contract test suite for Crud
contract('Crud', () => {
    let crud = null;

    // Before running the tests, deploy the Crud contract
    before(async () => {
        crud = await Crud.deployed();
    });

    // Test case: Should create a new user
    it('Should create a new user', async () => {
        // Create a new user with name 'Frank'
        await crud.create('Frank');
        // Retrieve the user with id 1
        const user = await crud.read(1);
        // Check if the id of the user matches 1
        assert(user[0].toNumber() === 1);
        // Check if the name of the user matches 'Frank' (case-sensitive)
        assert(user[1] === 'Frank');
    });

    // Test case: Should update a user
    it('Should update a user', async () => {
        // Update the name of the user with id 1 to 'Frankk'
        await crud.update(1, 'Frankk');
        // Retrieve the user with id 1
        const user = await crud.read(1);
        // Check if the id of the user matches 1
        assert(user[0].toNumber() === 1);
        // Check if the name of the user matches 'Frankk' (case-sensitive)
        assert(user[1] === 'Frankk');
    });

});