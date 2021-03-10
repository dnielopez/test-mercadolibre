import React from 'react'
import Box from '@material-ui/core/Box'
import Model from '../hooks/Model'

const Page4040 = ({location}) => {
  React.useEffect(() => {
    Model.setData('loading', false)
    return () => {}
    //eslint-disable-next-line
  }, []);

  return <Box>
    <h2>No hemos encontrado esta página <code>{location.pathname}</code></h2>
  </Box>
}

export default Page4040;
