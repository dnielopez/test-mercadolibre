import React from 'react'
import Box from '@material-ui/core/Box'
import Model from '../../hooks/Model'
import { Store } from '../../hooks/main_store'
import Logo from '../../assets/logo.png'
import useStyles from './styles'
import { Search } from '@material-ui/icons'

const SearchInput = ({
    customStyles = useStyles,
    onSearch = () => {},
    onLogo = () => {}
  }) => {
  const styles = customStyles();
  const { state } = React.useContext(Store)

  const handleChange = (event) => {
    event.persist()
    Model.setData('searchTxt', event.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  return <Box className={styles.searchContainer}>
    <img
      src={Logo}
      alt='test-ml'
      className={styles.logo}
      onClick={onLogo}
    />
    <input
      placeholder='Nunca dejes de buscar'
      className={styles.inputSearch}
      onChange={handleChange}
      value={state.searchTxt}
      onKeyDown={handleKeyDown}
    />
    <Box className={styles.btSearch} onClick={onSearch}>
      <Search />
    </Box>
  </Box>
}

export default SearchInput;
