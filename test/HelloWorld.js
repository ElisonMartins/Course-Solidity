const HelloWorld = artifacts.require('HelloWorld');
//Testing whether the hello function will return 'Hello World'
contract('HelloWorld', () => {
    it('Should return world', async () => {
        const helloWorld = await HelloWorld.deployed();
        const result = await helloWorld.hello();
        assert(result === 'Hello World'); 
    });
});

