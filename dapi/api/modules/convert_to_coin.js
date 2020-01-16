const Web3 = require('web3'),
      mainnet = process.env.Provider,
      w3 = new Web3(new Web3.providers.HttpProvider(mainnet))

exports.convertToCoin = async(coinType , value) => {
	var result = ''
	switch(coinType) {
	case 'btc':
		result = String(parseFloat(value) / 100000000)
	case 'eth':
		await w3.utils.fromWei(value, 'ether').then(function(res){
			console.log(res)
			result = res
		})
	case '':
		result = String(parseFloat(value) / 100000000)
	}

	return result
}