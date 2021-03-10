import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import { Store } from '../hooks/main_store'

const useStyles = makeStyles({
  contLoader: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    height: '100vh',
    display: 'flex',
    width: '100vw',
    zIndex: '100',
    left: '0px',
    top: '0px',
  }
});


const LoadingComponent = () => {
  const { state } = React.useContext(Store);
  const styles = useStyles();
  // Handle the loading state
  if (state.loading) {
    return <div className={styles.contLoader} style={{
      opacity: state.opacity
    }}>
      <CircularProgress />
    </div>;
  } else if (state.errorLoad) {
    return <div>Lo sentimos, tenemos un problema con la página.</div>;
  } else {
    return null;
  }
};

export default LoadingComponent