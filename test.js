abi = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "message",
				"type": "string"
			}
		],
		"name": "writeMessage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getAllMessageByAccount",
		"outputs": [
			{
				"name": "",
				"type": "string[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
VotingContract = web3.eth.contract(abi);
contractInstance = VotingContract.at('0x5ad26f1bee8d8a273fda64de3937e71ee4f85e9d');

var address = web3.eth.accounts[0];

function sendMessage() {
  let message = $("#message").val();
  contractInstance.writeMessage(address, message, {from: address}, function() {});
}

loop=() => {
  contractInstance.getAllMessageByAccount.call(address, (e, result) => {
    console.log("result: " + JSON.stringify(result));
    let messages = null;
    for(let message of result) {
      if(messages == null) {
        messages += message;
      } else {
        messages += ", " + message;
      }
    }
    $("#messageArea").html(messages);
  })
  setTimeout(loop, 5000);
}
loop()