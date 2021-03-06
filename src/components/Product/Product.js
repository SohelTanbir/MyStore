import React from 'react';
import './Product.css'
import ProductCard from '../ProductCard/ProductCard';
import FakeData from '../../FakeData/FakeData';

const Product = () => {
    return (
       <div className="container" id="product">
           <div className="product-heading">
               <h2>Brand Product</h2>
               <p>Choose your favorite product from here</p>
           </div>
            <div className="row" style={{padding:'3rem 0'}}>
                {
                    FakeData.map(product => <ProductCard product={product}/>)
                }
             </div>
       </div>
    );
};

export default Product;