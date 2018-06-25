abi1 = [
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
var contract1 = '0x5ad26f1bee8d8a273fda64de3937e71ee4f85e9d';

abi2 = [
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
		"inputs": [],
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
var contract2 = '0x4d5370b081653e644103480ca3c8be11e676f2f3';

abi3 = [
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
		"inputs": [],
		"name": "getAllMessageByAccount",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
var contract3 = '0x795c9fba7bba705388d467c94c43cef79251b4ea';

VotingContract = web3.eth.contract(abi3);
contractInstance = VotingContract.at(contract3);
var address = web3.eth.accounts[0];

function sendMessage() {
  let message = $("#message").val();
  contractInstance.writeMessage(message, {from: address}, function() {});
}

loop=() => {
  contractInstance.getAllMessageByAccount.call((e, result) => {
    console.log("result: " + JSON.stringify(result));
    $("#messageArea").html(result);
  })
  setTimeout(loop, 5000);
}
loop()