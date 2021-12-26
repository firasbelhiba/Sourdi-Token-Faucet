const TokenSale = artifacts.require("MyTokenSale");
const Token = artifacts.require("MyToken");

var chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;

require("dotenv").config({ path: "../.env" });

contract("TokenSale Test", async (accounts) => {
  const [deployerAccount, recipient, anotherAccount] = accounts;

  it("should not have any token left in my deployer account ", async () => {
    let instance = Token.deployed();
    return expect(
      instance.balanceOf(deployerAccount)
    ).to.eventually.be.a.bignumber.equal(new BN(0));
  });
});
