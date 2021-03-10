'use strict'
const { api } = require('../api');
const _ = require('lodash');

/**
 * Endpoint para obtener los resultados de
 * la búsqueda de acuerdo al query que 
 * ingresó el usuario
 * @param {object} req 
 * @param {object} res 
 * @returns {object} El listado de items y categorías
 */

const getItems = async (req, res) => {
  try {
    let body = req.query || {};
    if (body.q) {
      const response = await api.get('/sites/MLA/search', body)
      if (response.ok) {
        const results = _.get(response, 'data.results', [])
        const categories = _.get(response, 'data.filters', []).filter(item => item.id === 'category')
        res.status(200).send({
          author: {
            name: req.authToken[0],
            lastname: req.authToken[1]
          },
          categories: categories[0].values[0].path_from_root.map(item => item.name),
          items: results.map(item => ({
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: item.price,
              decimals: item.decimals || 0
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: _.get(item, 'shipping.free_shipping', false)
          }))
        });
      } else {
        throw response
      }
    } else {
      throw 'Error';
    }
  } catch (err) {
    console.log(err)
    res.status(404).send({message: _.get(err, 'originalError', 'Error to get items')});
  }
}

/**
 * Endpoint para obtener la información al detalle
 * del producto a consultar
 * @param {object} req 
 * @param {object} res 
 * @returns {object} El información y descripción del producto
 */

const getItem = async (req, res) => {
  try {
    let body = req.params || {};
    if (body.id) {
      const responseItem = await api.get('/items/' + body.id)
      const responseDescription = await api.get('/items/' + body.id + '/description')
      if (responseItem.ok && responseDescription.ok) {
        const resultItem = _.get(responseItem, 'data', {})
        const resultDescription = _.get(responseDescription, 'data.plain_text', '')
        res.status(200).send({
          author: {
            name: req.authToken[0],
            lastname: req.authToken[1]
          },
          item: {
            id: resultItem.id,
            title: resultItem.title,
            price: {
              currency: resultItem.currency_id,
              amount: resultItem.price,
              decimals: resultItem.decimals || 0,
            },
            picture: _.get(resultItem, 'pictures.0.url', resultItem.thumbnail),
            condition: resultItem.condition,
            free_shipping: _.get(resultItem, 'shipping.free_shipping', false),
            sold_quantity: resultItem.sold_quantity,
            description: resultDescription,
            category_id: resultItem.category_id
          }
        });
      } else {
        throw responseItem.ok ? responseDescription : responseItem
      }
    } else {
      throw 'Error';
    }
  } catch (err) {
    console.log(err)
    res.status(404).send({message: _.get(err, 'originalError', 'Error to get item')});
  }
}

/**
 * Endpoint para obtener las actegorías
 * y poder formar los breadcrumbs en la web
 * de acuerdo al producto seleccionado
 * @param {object} req 
 * @param {object} res 
 * @returns {object} El listado categorías
 */

const getCategory = async (req, res) => {
  try {
    let body = req.params || {};
    if (body.id) {
      const response = await api.get('/categories/' + body.id)
      if (response.ok) {
        const resultItem = _.get(response, 'data', {})
        res.status(200).send({
          path_from_root: resultItem.path_from_root.map(item => item.name)
        });
      } else {
        throw response
      }
    } else {
      throw 'Error';
    }
  } catch (err) {
    console.log(err)
    res.status(404).send({message: _.get(err, 'originalError', 'Error to get category')});
  }
}

module.exports = {
  getItems,
  getItem,
  getCategory
}