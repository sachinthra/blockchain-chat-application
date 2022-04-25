const hre = require("hardhat");

async function main() {
  const ChatWei = await hre.ethers.getContractFactory("ChatWei");
  const chatWei = await ChatWei.deploy();

  await chatWei.deployed();

  console.log("ChatWei deployed to:", chatWei.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
