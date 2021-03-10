/**
 * Componente que ayuda a mostrar los errores
 * cuando el usuario tenga problemas con las
 * consultas a los entpoints
 */

import React from 'react'
import {Clear, InfoRounded, ErrorRounded} from '@material-ui/icons'
import {Store} from '../../hooks/main_store'
import { Box } from '@material-ui/core'
import Model from '../../hooks/Model'
import useStyles from './styles'

const Alert = (props) => {
  const {state} = React.useContext(Store);
  const styles = useStyles();
  const returnIcon = (item) => {
    if (item.variant === 'error') {
      return <ErrorRounded className={styles.iconAlert} />
    } else {
      return <InfoRounded className={styles.iconAlert} />
    }
  }
  React.useEffect(() => {
    let myTimeout = null
    let auxArr = [...state.alerts]
    if (state.alerts.length > 3) {
      auxArr.splice(0, 1)
      Model.setData('alerts', auxArr)
    } else if (state.alerts.length > 0) {
      myTimeout = setTimeout(() =>{
        auxArr.splice(0, 1)
        Model.setData('alerts', auxArr)
      }, 3000);
    }
    return () => {
      clearTimeout(myTimeout)
    }
  }, [state.alerts])
  return <Box className={styles.contAlerts}>
    {state.alerts.length > 0 ? state.alerts.map((item, index) => <Box 
      className={[
        styles.container,
        props.customStyles ? props.customStyles : '',
        styles[item.variant]
      ].join(' ')}
      key={'alert-compt-' + index}
    >
      {returnIcon(item)}
      <p className={styles.text}>
        {item.message}
      </p>
      <Clear
        onClick={() => {
          let auxArr = [...state.alerts]
          auxArr.splice(index, 1)
          if (item.handleClose) {
            item.handleClose()
          }
          Model.setData('alerts', auxArr)
        }}
        className={styles.btClose}
      />
    </Box>)
    : null}
  </Box>
};

export default Alert