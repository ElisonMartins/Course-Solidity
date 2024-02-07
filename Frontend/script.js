
//Connect metamsk

const connectMetamask = async () => {
  if(window.ethereum !== "undefined") {
    const accounts = await ethereum.request({method: "eth_requestAccounts"});
    account = accounts[0];
    document.getElementById("accountArea").innerHTML = account;
  }
}


// connect to smart contract
const connectContract = async () => {
    const ABI = [
        {
          "inputs": [],
          "name": "myCity",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        }
      ];
    const Address = "0x929Bef4BB0F5Bad1B91Ce69531b7508829890535";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract( ABI, Address);
    document.getElementById("contractArea").innerHTML = "connect to smart contract";
}

// Read data from smart contract
const readContract = async () => {
    const data =await window.contract.methods.myCity().call();
    document.getElementById("dataArea").innerHTML = data;
}