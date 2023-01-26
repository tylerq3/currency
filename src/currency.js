export default class ExchangeRateService {  
  static conversionRate() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          console.log(response)
          const errorMessage = `${response.result} ${response['error-type']}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }   
      })
      .catch(function(error) {
        return error;
      });
  }
}
