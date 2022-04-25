import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import FormDashBoard from "./components/FormDashBoard";
import ChatWei from "./contracts/ChatWei.json";
import { getSCprops } from "./reduxProcess/actions/scProps";
import { getUserProps } from "./reduxProcess/actions/userPropsAction";
import { setAppHandler } from "./reduxProcess/actions/AppHandlerAction";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {

  const { LoadSCpropReducer, UserpropsReducer } = useSelector((state) => state);

  const dispatch = useDispatch();



  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;
    if (ethereum) {
      console.log("ethereum: " + ethereum);
    } else {
      console.log("Object not found");
      dispatch(
        setAppHandler({ status: false, message: "MetaMask Not detected" })
      );
      return;
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      dispatch(setAppHandler({ status: true, message: "MetaMask detected" }));
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      // setCurrentAccount(account);
      // getbalance(account)
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      });
      dispatch(
        getUserProps({
          account: account,
          balance: ethers.utils.formatEther(balance),
        })
      );
      fetchChatWeis();
    } else {
      console.log("No authorized account found");
      dispatch(
        setAppHandler({ status: false, message: "No authorized account found" })
      );
    }
  };


  const fetchChatWeis = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      ChatWei.abi,
      signer
    );

    const isUSerRegistered = await contract.checkUserRegistration();    
    console.log("isUSerRegistered: "+isUSerRegistered);
    if(!isUSerRegistered) {
      // await contract.registerUser();
      const result = await contract.registerUser().then(() => console.log("submitted"))
        .catch(e => console.log(e));
    }
    const chatWei = await contract.getContractProperties();
    dispatch(getSCprops({ contract, chatWei }));
    
  };

  return (
    <div className="App">
      <FormDashBoard checkWalletIsConnected={checkWalletIsConnected} />
      
    </div>
  );
}

export default App;
