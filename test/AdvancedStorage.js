const AdvancedStorage = artifacts.require('AdvancedStorage');

// Contract test suite for AdvancedStorage
contract('AdvancedStorage', () => {
    let advancedStorage = null;

    // Before running the tests, deploy the AdvancedStorage contract
    before(async () => {
        advancedStorage = await AdvancedStorage.deployed();
    });

    // Test case: Should add an element to the ids array
    it('Should add an element to ids array', async () => {
        // Add an element with value 10 to the ids array
        await advancedStorage.add(10);
        // Retrieve the first element from the ids array
        const result = await advancedStorage.ids(0);
        // Check if the value retrieved is equal to 10
        assert(result.toNumber() === 10);
    });

    // Test case: Should get an element of the ids array
    it('Should get an element of the ids array', async () => {
        // Add an element with value 20 to the ids array
        await advancedStorage.add(20);
        // Retrieve the element at index 1 from the ids array
        const result = await advancedStorage.get(1);
        // Check if the value retrieved is equal to 20
        assert(result.toNumber() === 20);
    });

    // Test case: Should get the ids array
    it('Should get the ids array', async () => {
        // Retrieve all elements from the ids array
        const rawIds = await advancedStorage.getAll();
        // Convert the elements to an array of numbers
        const ids = rawIds.map(id => id.toNumber());
        // Check if the retrieved array matches the expected array [10, 20]
        assert.deepEqual(ids, [10, 20]);
    });

    // Test case: Should get the length of the ids array
    it('Should get the length of the ids array', async () => {
        // Retrieve the length of the ids array
        const length = await advancedStorage.length();
        // Check if the retrieved length is equal to 2
        assert(length.toNumber() === 2);
    });
});
