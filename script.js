const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '247a5fd7damsh33e4fa45b4ea675p1e55b7jsn3306220f534e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kathmandu', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));