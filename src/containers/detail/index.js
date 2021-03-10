import React from 'react'
import SearchInput from '../../components/searchInput'
import { setCurrency } from '../../utils/commons'
import { Store } from '../../hooks/main_store'
import { useParams } from 'react-router'
import Box from '@material-ui/core/Box'
import Model from '../../hooks/Model'
import api from '../../services/api'
import useStyles from './styles'

const DetailPage = ({ history }) => {
  const styles = useStyles();
  const { id } = useParams();
  const { state } = React.useContext(Store);
  const [infoItem, setInfoItem] = React.useState({});
  const [breadcrumbs, setBreadcrumbs] = React.useState([]);

  const renderBreadcrumbs = () => {
    return breadcrumbs.map((item, index) => 
      <span key={'breadcrumb-' + index}>
        {item} {breadcrumbs.length > (index + 1) ? '> ' : ''}
      </span>
    )
  }

  const renderPrice = (isDecimal) => {
    const stgValue = infoItem?.item?.price ? setCurrency({
      ...infoItem?.item?.price,
      numFix: 0
    }).split('.') : ['0', '00']
    return isDecimal ? stgValue[1] : stgValue[0]
  }

  const getCategories = async (idCategory) => {
    /**
     * Esta función llama al endpoints para obtener
     * las categorías y asi poder renderizar los breadcrumbs
     */
    try {
      if (idCategory) {
        Model.setData('loading', true)
        const response = await api.get(`/api/categories/${idCategory}`)
        if (response.ok) {
          setBreadcrumbs(response.data.path_from_root)
          Model.setData('loading', false)
        } else {
          throw new Error(response?.data?.message?.code || 'Problemas con el servidor')
        }
      }
    } catch (e) {
      Model.setData('loading', false)
      Model.updateAlerts({
        message: String(e),
        variant: 'error'
      })
    }
  }

  const onSearch = async () => {
    /**
     * Se hace el llamado al endpoint de ML
     * para consultar la información del producto
     * seleccionado y luego se hace el llamado
     * a obtener las categorias
     */
    try {
      if (id) {
        Model.setData('loading', true)
        const response = await api.get(`/api/items/${id}`)
        if (response.ok) {
          setInfoItem(response.data)
          getCategories(response.data.item.category_id)
        } else {
          throw new Error(response?.data?.message?.code || 'Problemas con el servidor')
        }
      } else {
        throw new Error('El producto no existe')
      }
    } catch (e) {
      Model.setData('loading', false)
      Model.updateAlerts({
        message: String(e),
        variant: 'error'
      })
    }
  }

  const onNewSearch = async () => {
    /**
     * Se valida si el usuario si ingresó
     * un nuevo valor en la búsqueda y se redirecciona
     * al listado de productos
     */
    try {
      if (state.searchTxt) {
        history.push(`/items?search=${state.searchTxt}`)
      } else {
        throw new Error('Debes ingresar un valor en la búsqueda')
      }
    } catch (e) {
      Model.setData('loading', false)
      Model.updateAlerts({
        message: String(e),
        variant: 'error'
      })
    }
  }

  React.useEffect(() => {
    onSearch()
    return () => {}
    //eslint-disable-next-line
  }, []);

  return <Box className={styles.container}>
    <SearchInput
      onSearch={onNewSearch}
      onLogo={() => history.push('/')}
    />
    <Box className={styles.list}>
      <Box className={styles.breadcrumbs}>
        {renderBreadcrumbs()}
      </Box>
      <Box className={styles.scrollList}>
        <Box className={styles.containerItem}>
          <Box className={styles.contInfo}>
            <img
              className={styles.image}
              src={infoItem?.item?.picture}
              alt={infoItem?.item?.title}
            />
            <Box className={styles.infoMeta}>
              <Box className={styles.rowStatus}>
                {infoItem?.item?.condition === 'new' ? <span>
                  Nuevo -{' '}
                </span> : null}
                <span>
                  {infoItem?.item?.sold_quantity} vendidos
                </span>
              </Box>
              <p className={styles.title}>
                {infoItem?.item?.title}
              </p>
              <Box className={styles.contPrice}>
                <p className={styles.price}>
                  {renderPrice(false)}
                </p>
                <p className={styles.decimals}>
                  {renderPrice(true)}
                </p>
              </Box>
              <Box className={styles.rowShip}>
                {infoItem?.item?.free_shipping ? 'Envio gratis' : 'Pago contra entrega'}
              </Box>
              <Box className={styles.btBuy}>
                Comprar
              </Box>
            </Box>
          </Box>
          <p className={styles.lblDescription}>
            Descripción del producto
          </p>
          <p className={styles.description}>
            {infoItem?.item?.description}
          </p>
        </Box>
      </Box>
    </Box>
  </Box>
}

export default DetailPage;
