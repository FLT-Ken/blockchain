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
contractInstance = VotingContract.at('0xdee2bd7b778fe8f32ec8403ac50a688552875ec0');

var address = web3.eth.accounts[0];

function sendMessage() {
  let message = $("#message").val();
  contractInstance.writeMessage(address, message, {from: address}, console.log);
}

loop = () => {
  let messages = contractInstance.getAllMessageByAccount.call(address, (e,result) => {
    console.log(messages);
    console.log(result);
    $("#messageArea").html(messages);
  })
  setTimeout(loop,5000);
}
loop()