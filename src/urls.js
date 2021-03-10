import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import pages
import Page404 from './containers/page404'
import Search from './containers/search'
import Detail from './containers/detail'
import List from './containers/list'

// Create router

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Search}/>
      <Route path="/items" exact component={List}/>
      <Route path="/items/:id" exact component={Detail}/>
      <Route component={Page404}/>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
