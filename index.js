
/*##########################
CONFIGURATION
##########################*/

// -- Step 1: Set up the appropriate configuration
var Web3 = require("web3")
var TX = require("ethereumjs-tx").Transaction
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var sendingAddress = '0xBF52067268f61FDc218160c7c893ac1CDB7Db179'
var receivingAddress = '0xA67592fA594167613056D28a845DF734B4146287'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

/*##########################
CREATE A TRANSACTION
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown 
var rawTransaction = {
    nonce: 2,
    to: receivingAddress,
    gasPrice: 1000000000000,
    gasLimit: 30000,
    value: 1,
    data: "0x"
}

// -- Step 5: View the raw transaction rawTransaction

// -- Step 6: Check the new account balances (they should be the same) 

web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

/*##########################
Sign the Transaction
##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender 
var privateKeySender = '5e28bbe09e2831f480d114ce8fa53cf3ab2f00f0893f1960c52f2e415e48bd21'
var privateKeySenderHex = new Buffer(privateKeySender, 'hex')
var transaction = new TX(rawTransaction)
transaction.sign(privateKeySenderHex)


/*#########################################
Send the transaction to the network
#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network. 
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);