const centerFlexCol = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const centerFlexRow = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const colors = {
  yellow: '#FCE605',
  bgGray: '#EEEEEE',
  gray: 'gray',
  white: 'white',
  shadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2)',
  black: 'black',
  green: '#259A57',
  primary: '#0D9DA2',
  orange: '#FF7F11',
  blue: '#3682FB',
  red: '#FF6663',
}

/**
 * Función para darle el formato correcto al
 * precio del producto
 * @param {object} - Información del precio
 * @return {string} Valor con formato
 */

const setCurrency = ({amount, decimals, currency = 'ARS'}) => {
  const formatter =  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return formatter.format(parseFloat(`${amount}.${decimals}`))
}

export {
  centerFlexCol,
  centerFlexRow,
  colors,
  setCurrency
}