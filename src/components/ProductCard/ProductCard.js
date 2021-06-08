import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons'


const ProductCard = ({ product }) => {
    return (
            <div className="single-product">
                        <img src={product.img} alt="image" />
                        <h3>{product.name}</h3>
                        <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                        <h4>Price: ${product.price}</h4>
                        <div className="product-btn">
                            <button className="add_to_cart">Add to Cart</button>
                            <button className="buy_now_btn">Buy now</button>
                    </div>
             </div>
    );
};

export default ProductCard;