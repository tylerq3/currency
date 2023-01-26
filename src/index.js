import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';	
import './css/styles.css';
import ExchangeRateService from './currency';

function displayExchangeRate(selectedCurrency) {
  ExchangeRateService.conversionRate(selectedCurrency)
    .then(function(response) {
      if (response instanceof Error) {
        const errorMessage = `There was a problem accessing the rate data from ExchangeRate-API:
        ${response.message}`;
        throw new Error(errorMessage);
      }
      let rate = response.conversion_rates[selectedCurrency];
      document.querySelector('results').innerText = rate;
    })
    .catch(function(error) {
      document.querySelector('body').innerText = error;
    });
}

// UI Logic

function displayConversion(response) {
  let displayConversion = document.querySelector('results');
  displayConversion.innerText= null;
  if (selectedCurrency.length > 5) {
    displayConversion.innerText = `Please select 5 or fewer currencies.`;
  } else {
    
  }
}


function handleForm(event) {
  event.preventDefault(); 
  const amountUSD = document.getElementById('amountUSD').value;
  const selectedCurrency = document.getElementById('selectedCurrency').value; 
  console.log(amountUSD)
  displayExchangeRate(selectedCurrency);
}

window.addEventListener('load', function() {

  document.querySelector('form').addEventListener('submit', handleForm);
});