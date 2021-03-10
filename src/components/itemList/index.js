/**
 * Item para mostrar la información de los
 * productos en un listado con su
 * correspondiente información
 */

import React from 'react'
import { setCurrency } from '../../utils/commons'
import Box from '@material-ui/core/Box'
import useStyles from './styles'

const ItemList = ({ data = {}, onClick = () => {} }) => {
  const styles = useStyles();

  return <Box className={styles.container} onClick={onClick}>
    <img
      src={data.picture}
      alt={data.title}
      className={styles.image}
    />
    <Box className={styles.contInfo}>
      <Box className={styles.infoPrice}>
        <p className={styles.price}>
          {setCurrency(data.price)}
        </p>
        {data.condition === 'new' ? <Box className={styles.dotGreen} /> : null}
      </Box>
      <p className={styles.name}>
        {data.title}
      </p>
    </Box>
    <Box className={styles.category}>
      {data.free_shipping ? 'Envio gratis' : 'Pago contra entrega'}
    </Box>
  </Box>
}

export default ItemList;
