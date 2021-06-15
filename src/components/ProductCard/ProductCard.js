import React, { useContext } from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../App';
import { useHistory } from 'react-router';


const ProductCard = ({ product }) => {
    const history = useHistory();
    const [cart, setCart] = useContext(userContext);
    const handleAddToCart = (id) =>{
        alert("added to cart")
    }

    const handleBuyNow  = (id) =>{
        history.push(`/checkout${id}`);
    }

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
                            <button onClick={handleAddToCart} className="add_to_cart">Add to Cart</button>
                            <button onClick={()=> handleBuyNow(product.id)} className="buy_now_btn">Buy now</button>
                    </div>
             </div>
    );
};

export default ProductCard;