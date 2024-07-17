import axios from 'axios';


const apikey = process.env.REACT_APP_API_URL_EXCHANGE_RATE_UF_API_KEY;

const ExchangeRateServices = {
  getExchangeRateUF: async () => {
    const response = await axios.get(
      // `https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=b3c682f4e4e29811fa1fd8d3781a463b59181fb7&formato=json`
      `https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=${apikey}&formato=json`
    );
    return response.data;
  },
};

export default ExchangeRateServices;
