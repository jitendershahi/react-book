import React, { Component } from 'react';
import Product from '../Product';

import './style.css';

class ProductList extends Component {
    render() {
        return (
            <div className='product-list'>
                <h1>Product List</h1>
                <div className='ui unstackable items'>
                    <Product />
                </div>
            </div>
        );
    }
}

export default ProductList;