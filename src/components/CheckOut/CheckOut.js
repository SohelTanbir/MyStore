import React, { useState } from 'react';
import './CheckOut.css';
import { useParams } from 'react-router';
import FakeData from '../../FakeData/FakeData';

const CheckOut = () => {
    const { id } = useParams();
    const { name, price, img } = FakeData.find(pd => pd.id == id);
    const [productQuantity, setProductQuantity] = useState(1);

    // handle product quantity
    const quantityIncrease = ()=>  setProductQuantity(productQuantity+1);
    const quantityDecrease = ()=>{
        if(productQuantity > 1){
            setProductQuantity(productQuantity-1)
        }
    }
    return (
        <div className="checkout">
            <h3>Product Details</h3>
            <div className="container">
                <div className="row">
                    <div className="product-info">
                        <table>
                            <tr>
                                <th>product</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <th>
                                    <img src={img} alt="" />
                                </th>
                                <th>{name}</th>
                                <th>
                                    <div className="product-quantity">
                                        <button onClick={quantityDecrease}>-</button>
                                        <input type="text" value={productQuantity}/>
                                        <button onClick={quantityIncrease}>+</button>
                                    </div>
                                </th>
                                <th>${price}</th>
                                <th>${price*productQuantity}</th>
                            </tr>
                        </table>
                    </div>
                    <div className="cart-count">
                            <h3>Total items: 5</h3>
                            <p>product: {name}</p>
                            <p>Quantity: {productQuantity}</p>
                            <p>Shipping: $5</p>
                            <p>Total Price: ${(price*productQuantity)+5}</p>
                            <button>Proceed to CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;