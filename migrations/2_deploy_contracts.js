const contractsToDeploy = ["SimpleStorage", "AdvancedStorage", "HelloWorld", "SimpleSmartContract", "Crud"]; 

module.exports = function (deployer) {
  contractsToDeploy.forEach(async (contractName) => {
    const Contract = artifacts.require(contractName);
    await deployer.deploy(Contract);
  });
};


// const ContractToDeploy = artifacts.require("SimpleStorage"); 

// module.exports = function (deployer) {
//   deployer.deploy(ContractToDeploy);
// };
