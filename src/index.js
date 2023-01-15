import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';	
import './css/styles.css';
import ExchangeRateService from './currency';

function conversionRate() {
  ExchangeRateService.conversionRate()
    .then(function(rateResponse) {
      if (rateResponse instanceof Error) {
        const errorMessage = `There was a problem accessing the rate data from ExchangeRate-API:
        ${rateResponse.message}`;
        throw new Error(errorMessage);
      }
      document.querySelector('convresults').innerText = rateResponse;
    })
    .catch(function(error) {
      document.querySelector('body').innerText = error;
    });
}



