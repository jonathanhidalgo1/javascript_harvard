var myHeaders = new Headers();
myHeaders.append("apikey", "IRb7YsNofaGy9w9q1t6zwICDox1U1LPB");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        //send a Get request to the URL
        fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=USD,EUR&base=USD", requestOptions)
        //put respnse into json form
        .then(response => response.json())
        .then(data => {
            // get currency from user input and convert to upper case
            const currency = document.querySelector('#currency').value.toUpperCase();

            // get rate from data
            const rate = data.rates[currency];

            //check if currency is valid
            if (rate !== undefined) {
                //display exchange on the screen
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}`;
                
            }
            else {
                //Display error on the screen
                document.querySelector('#result').innerHTML = 'Invalid Currency';

            }
        })
        //catch any errors and log them to the console
        .catch(error => {
            console.log('Error', error);
        })
        
    }
});