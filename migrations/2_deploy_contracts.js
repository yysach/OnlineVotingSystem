var Election = artifacts.require("./Election.sol");
// migrating election.sol smart contract
module.exports = function(deployer) {
  deployer.deploy(Election);
};
