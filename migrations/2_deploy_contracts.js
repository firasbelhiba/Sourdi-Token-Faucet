var MyToken = artifacts.require("./MyToken.sol");
var MyTokenSale = artifacts.require("MyTokenSale");
var MyKycContract = artifacts.require("./KycContract.sol");
require("dotenv").config({ path: "../.env" });

module.exports = async function (deployer) {
  let addresses = await web3.eth.getAccounts();
  await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
  await deployer.deploy(MyKycContract);
  await deployer.deploy(
    MyTokenSale,
    1,
    addresses[0],
    MyToken.address,
    MyKycContract.address
  );
  let instance = await MyToken.deployed();
  await instance.transfer(MyTokenSale.address, process.env.INITIAL_TOKENS);
};
