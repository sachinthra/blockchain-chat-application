const hre = require("hardhat");

async function main() {
  const ChatWei = await hre.ethers.getContractFactory("ChatWei");
  const chatWei = await ChatWei.deploy();

  await chatWei.deployed();

  console.log("Greeter deployed to:", chatWei.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
