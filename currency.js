var myHeaders = new Headers();
myHeaders.append("apikey", "IRb7YsNofaGy9w9q1t6zwICDox1U1LPB");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  document.addEventListener('DOMContentLoaded', () => {
    fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=USD,EUR&base=USD", requestOptions)
    .then(response => response.json())
    
    .then(data => {

        // Get rate from data
        const rate = data.rates.EUR;

        // Display message on the screen
        document.querySelector('body').innerHTML = `1 USD is equal to ${rate} EUR.`;
    });
  });
 
  // fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=USD,EUR&base=USD", requestOptions)
  // .then(response => response.json())
  
  // .then(commits => alert(commits.rates.EUR));