pragma solidity >=0.4.0 <0.9.0;

contract Inbox{
    string public message ;


    function setMessage(string memory newMessage) public{

        message=newMessage;
    }

    function getMessage()public view returns (string memory){
        return message;
    }

}