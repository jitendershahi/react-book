import React, { Component } from 'react';
import './App.css';
import ProductList from './component/ProductList'
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList />
        <Button type='primary' loading></Button>
      </div>
    );
  }
}

export default App;
