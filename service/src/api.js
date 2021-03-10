const { create } = require('apisauce')

const api = create({
    baseURL: 'https://api.mercadolibre.com',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 10000
})

module.exports = {
  api
};