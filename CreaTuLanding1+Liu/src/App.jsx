import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/:categoryId" component={Category} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
