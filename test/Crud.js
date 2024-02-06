const Crud = artifacts.require('crud');

contract('Crud', () => {
    let crud = null;
    before(async() => {
        crud = await crud.deployed();
    });

    it('Should create a new user', async () => {
        await crud.create('frank');
        const user = await crud.read(1);
        assert(user[0].toNumber() === 1);
        assert(user[1] === 'Frank');
    });

    it('Should update a user', async () => {
        await crud.udpdate(1, 'Frankk');
        const user = await crud.read(1);
        assert(user[0].toNumber() === 1);
        assert(user[1] === 'Frankk');
    });

    
});