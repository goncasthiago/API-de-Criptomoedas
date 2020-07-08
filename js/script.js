var apikey = {
	key: '18c917db-93af-4a92-a657-2746c11b607b'
};

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
	.then((response) => {
		if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
		return response.json();
	})
	.then((api) => {
		var texto = '';
		for (let i = 0; i < 10; i++) {
			console.log(api);
			texto =
				texto +
				`
            <div class="media container-md">
                <img src="./img/coin.png" class='align-self-center mr-3' alt='coin' width='100' height='60'>
                    <div class='media-body container-md'>
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol} - since: ${api.data[i].first_historical_data}</p>
                    </div>
            </div>
            `;
			document.getElementById('coins').innerHTML = texto;
		}
	})
	.catch((error) => {
		console.log(error.message);
	});
