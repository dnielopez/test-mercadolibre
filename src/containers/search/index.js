import React from 'react'
import SearchInput from '../../components/searchInput'
import { Store } from '../../hooks/main_store'
import Box from '@material-ui/core/Box'
import Model from '../../hooks/Model'
import useStyles from './styles'

const SearchPage = ({ history }) => {
  const styles = useStyles();
  const { state } = React.useContext(Store);

  const onSearch = async () => {
    /**
     * Se valida si el usuario si ingresó
     * un valor en la búsqueda y se redirecciona
     * al listado de productos
     */
    try {
      if (state.searchTxt) {
        history.push(`/items?search=${state.searchTxt}`)
      } else {
        throw new Error('Debes ingresar un valor en la búsqueda')
      }
    } catch (e) {
      Model.setData('results', null)
      Model.setData('loading', false)
      Model.updateAlerts({
        message: String(e),
        variant: 'error'
      })
    }
  }

  React.useEffect(() => {
    Model.resetData()
    Model.setData('loading', false)
    return () => {}
  }, []);

  return <Box className={styles.container}>
    <Box className={styles.introMsg}>
      Hola! Bienvenido a Test de ML, puedes buscar productos, marcas y más ...
    </Box>
    <SearchInput customStyles={useStyles} onSearch={onSearch} />
  </Box>
}

export default SearchPage;
