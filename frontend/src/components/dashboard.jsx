import React from "react";
// import Web3 from 'web3';

// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

function Dashboard(props) {
  return (
    <div>
      <h4>Chat Application - </h4>
      <h5>The Ethereum Messenger</h5>
      

      <h5>Contract address:</h5>
      <h6 id="contractAddress">
        Could not load
      </h6>
      

      <h5>Contract owner:</h5>
      <h6 id="contractOwner">
        Could not load
      </h6>
      

      <h5>Your Ethereum address:</h5>
      <h6 id="myAddress">
        Could not load
      </h6>
      

      <h5>Your balance:</h5>
      <div type="mySimpleLabel" id="myBalance">
        0 Ether
      </div>
      

      <h5>User directory:</h5>
      <input type="myDefaultButton" />
      <div>
        <select
          type="registeredUsersAddressMenu"
          id="registeredUsersAddressMenu"
        ></select>
        ​
      </div>
      

      <h5>Send to:</h5>
      <div type="myInputTextArea" id="receiver"></div>
      

      <h5>Message:</h5>
      <input type="myDefaultButton" id="sendMessageButton"></input>
      <div>
        <div type="messageTextArea" id="message"></div>​
      </div>

      <div id="receivedTable">
        
        <h5>Received:</h5>
        <input type="myDefaultButton" id="replyButton"></input>
        <div>
          <div type="messageTextArea" id="reply"></div>​
        </div>
        
        <table id="mytable">
          <thead>
            <tr>
              <th>Date</th>
              <th>From</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody id="mytable-tbody"></tbody>
        </table>
      </div>

      
      <h5>Status:</h5>
      <span id="status"> Welcome to Chat Application</span>
    </div>
  );
}

export default Dashboard;
