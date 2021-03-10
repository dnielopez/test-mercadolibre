import React from 'react'
import SearchInput from '../../components/searchInput'
import ItemList from '../../components/itemList'
import { Store } from '../../hooks/main_store'
import Box from '@material-ui/core/Box'
import Model from '../../hooks/Model'
import api from '../../services/api'
import useStyles from './styles'
import _ from 'lodash'

const ListPage = ({ history }) => {
  const styles = useStyles();
  const { state } = React.useContext(Store);
  const [flagLoad, setFlagLoad] = React.useState(false);

  const selectItem = (item) => {
    history.push(`/items/${item.id}`)
  }

  const renderItems = () => {
    const data = _.get(state, 'results.items', [])
    if (data.length < 1) {
      return <Box className={styles.emptyTxt}>
        No hemos encontrado ningún producto con la búsqueda deseada.
      </Box>
    } else {
      return data.slice(0, 4).map((item, index) => 
        <ItemList
          data={item}
          key={'item-list-' + index}
          onClick={() => selectItem(item)}
        />
      )
    }
  }

  const renderBreadcrumbs = () => {
    const data = _.get(state, 'results.categories', [])
    return data.map((item, index) => 
      <span key={'breadcrumb-' + index}>
        {item} {data.length > (index + 1) ? '> ' : ''}
      </span>
    )
  }

  const onSearch = async () => {
    try {
      if (state.searchTxt) {
        Model.setData('loading', true)
        const response = await api.get(`/api/items?q=${state.searchTxt}`)
        if (response.ok) {
          Model.setData('loading', false)
          Model.setData('results', response.data)
          history.replace(`/items?search=${state.searchTxt}`)
        } else {
          throw new Error(response?.data?.message?.code || 'Problemas con el servidor')
        }
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

  const firstLoad = () => {
    Model.setData('loading', true)
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    Model.setData('searchTxt', searchParam)
    setFlagLoad(true)
  }

  React.useEffect(() => {
    if (flagLoad) {
      onSearch()
    }
    return () => {}
    //eslint-disable-next-line
  }, [flagLoad]);

  React.useEffect(() => {
    firstLoad()
    return () => {}
  }, []);

  return <Box className={styles.container}>
    <SearchInput
      onSearch={onSearch}
      onLogo={() => history.push('/')}
    />
    <Box className={styles.list}>
      <Box className={styles.breadcrumbs}>
        {renderBreadcrumbs()}
      </Box>
      <Box className={styles.scrollList}>
        {renderItems()}
      </Box>
    </Box>
  </Box>
}

export default ListPage;
