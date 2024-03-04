const SimpleSmartContract = artifacts.require('SimpleSmartContract');
//testing whether the contract is not empty
contract('SimpleSmartContract', () => {
    it('Should deploy smart contract properly', async () => {
        const simpleSmartContract = await SimpleSmartContract.deployed();
        // console.log(simpleSmartContract.address)
        assert(simpleSmartContract.address !== ''); 
    });
});
