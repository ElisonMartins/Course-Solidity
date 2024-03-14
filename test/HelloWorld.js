const HelloWorld = artifacts.require('HelloWorld');
// Contract test suite for HelloWorld
contract('HelloWorld', () => {
    // Test case: Should return Hello World
    it('Should return Hello World', async () => {
        // Deploy the HelloWorld contract
        const helloWorld = await HelloWorld.deployed();
        // Call the hello function of the deployed contract
        const result = await helloWorld.hello();
        // Check if the result is equal to 'Hello World'
        assert(result === 'Hello World'); 
    });
});
