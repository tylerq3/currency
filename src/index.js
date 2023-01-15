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

}


function handleForm(event) {
  event.preventDefault(); 
  conversionRate();
}

window.addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit', handleForm);
});