import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import ProductList from './pages/ProductList';

import './App.css';

const App = () => (
  <Layout>
  <Switch>
    <Route exact path="/" component={ProductList} />
  </Switch>
</Layout>
);

export default App;
