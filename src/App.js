import React, { Component } from 'react';
import { Store, StoreProvider } from './hooks/main_store';
import Loading from './components/loading';
import Alert from './components/alert/index';
import UrlsComponent from './urls';
import Model from "./hooks/Model";
import './App.css';

// Function to init dispatch model classes
const InitHooksClasses = () => {
  const { dispatch } = React.useContext(Store);
  // Init dispatch for model or models
  React.useEffect(() => {
    Model.set_dispatch(dispatch)
    return () => {}
  });
  return <React.Fragment />;
}

export default class Container extends Component {
  render() {
    return (
      <>
        <StoreProvider>
          <InitHooksClasses />
          <UrlsComponent />
          <Loading />
          <Alert />
        </StoreProvider>
      </>
    );
  }
}
