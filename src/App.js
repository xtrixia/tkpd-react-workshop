import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

import './App.css';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/:id/:slug" component={ProductDetail} />
      <Route exact path="/" component={ProductList} />
    </Switch>
  </Layout>
);

export default App;
