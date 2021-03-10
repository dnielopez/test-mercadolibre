/**
 * Crear y exportar el API que funcionará
 * para realizar los respectivos llamados
 * a los endpoints con la URL de ML
 */

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