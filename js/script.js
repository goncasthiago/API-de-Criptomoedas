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
		texto = texto + `<div class="row">`;
		for (let i = 0; i < 10; i++) {
			console.log(api);

			texto =
				texto +
				`
                    <div class="col-md-4 card-coin">
                        <div class="titulo">
                            <img src="./img/coin.png"  alt='coin' width='100' height='60'>
                            <h5 class="mt-2 coin-name">${api.data[i].name}</h5>
                        </div>
                        <p>${api.data[i].symbol} - since: ${api.data[i].first_historical_data}</p>

                    </div>
                `;
		}
		texto = texto + `</div>`;
		document.getElementById('coins').innerHTML = texto;
	})
	.catch((error) => {
		console.log(error.message);
	});
