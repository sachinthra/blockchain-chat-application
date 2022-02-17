pragma solidity ^0.4.18;

contract ChatApp {
  
  struct Message {
    address sender;
    bytes32 content;
    uint timestamp;
  }

  struct ContractProperties {
    address ChatAppOwner;
    address[] registeredUsersAddress;
  }

  struct Inbox {
    uint numSentMessages;
    uint numReceivedMessages;
  }

  Inbox newInbox;
  // uint donationsInApp = 0;
  Message newMessage;
  ContractProperties contractProperties;

  function ChatApp() public {
    registerUser();
    contractProperties.ChatAppOwner = msg.sender;
  }

  function checkUserRegistration() public view returns (bool) {
    return hasRegistered[msg.sender];
  }

  function clearInbox() public {
    userInboxes[msg.sender] = newInbox;
  }

  function registerUser() public {
    if(!hasRegistered[msg.sender]) {
      userInboxes[msg.sender] = newInbox;
      hasRegistered[msg.sender] = true;
      contractProperties.registeredUsersAddress.push(msg.sender);
    }
  }

  function getContractProperties() public view returns (address, address[]) {
    return (contractProperties.ChatAppOwner, contractProperties.registeredUsersAddress);
  }

  function sendMessage(address _receiver, bytes32 _content) public {
    newMessage.content = _content;
    newMessage.timestamp = now;
    newMessage.sender = msg.sender;
    // Update senders inbox
    Inbox storage sendersInbox = userInboxes[msg.sender];
    sendersInbox.sentMessages[sendersInbox.numSentMessages] = newMessage;
    sendersInbox.numSentMessages++;

    // Update receivers inbox
    Inbox storage receiversInbox = userInboxes[_receiver];
    receiversInbox.receivedMessages[receiversInbox.numReceivedMessages] = newMessage;
    receiversInbox.numReceivedMessages++;

    // total
    return;
  }
  function receiveMessage() public {    
    return;
  }

 

}
