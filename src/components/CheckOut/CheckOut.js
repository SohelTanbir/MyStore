import React, { useState } from 'react';
import './CheckOut.css';
import { useParams } from 'react-router';
import FakeData from '../../FakeData/FakeData';



const CheckOut = () => {
    const { id } = useParams();
    const { name, price, img } = FakeData.find(pd => pd.id == id);
    const [productQuantity, setProductQuantity] = useState(1);
    const [placeOrder, setPlaceOrder ] = useState(false)
    // handle product quantity
    const quantityIncrease = ()=>  setProductQuantity(productQuantity+1);
    const quantityDecrease = ()=>{
        if(productQuantity > 1){
            setProductQuantity(productQuantity-1)
        }
    }
// handle checkout
const handleCheckOut = () =>{
    setPlaceOrder(true);
}

    return (
        <div className="checkout">
            <h3>Product Details</h3>
            <div className="container">
                <div className="checkoutInfo">
                    {placeOrder?'':
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
                                       {productQuantity <=1? <button style={{color:'#dfdfdf',cursor:'default'}} onClick={quantityDecrease}>-</button>:
                                        <button onClick={quantityDecrease}>-</button>}
                                        <input type="text" value={productQuantity}/>
                                        <button onClick={quantityIncrease}>+</button>
                                    </div>
                                </th>
                                <th>${price}</th>
                                <th>${price*productQuantity}</th>
                            </tr>
                        </table>
                    </div>}
                   {placeOrder?<div>
                       <h3>Your addresse</h3>
                   </div>:
                    <div className="cart-count">
                            <p>product: {name}</p>
                            <p>Quantity: {productQuantity}</p>
                            <p>Shipping: $5</p>
                            <p>Total Price: ${(price*productQuantity)+5}</p>
                            <button onClick={handleCheckOut}>Proceed to CheckOut</button>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default CheckOut;