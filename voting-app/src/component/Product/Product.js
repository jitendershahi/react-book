import React, { Component } from 'react';
import './style.css';
import { Row, Col } from 'antd';

class Product extends Component {
    render() {
        return (
            <Row className='product'>
                <Col className='image' span={8}>
                    <img className='ui avatar image' alt='img' src='http://via.placeholder.com/100x100' />
                </Col>
                <Col className='content' span={16}>
                    <div className='description'>
                        <a>Fort Knight</a>
                        <p>Authentic renaissance actors, delivered in just two weeks</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by: </span>
                        <img className='ui avatar image' alt='img' src='http://via.placeholder.com/30x30' />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Product;