import React, { useContext, useState } from 'react';
import './CheckOut.css';
import { useParams } from 'react-router';
import FakeData from '../../FakeData/FakeData';
import StripePayment from '../StripePayment/StripePayment';
import { userContext } from '../../App';




const CheckOut = () => {
    const { id } = useParams();
    const { name, price, img } = FakeData.find(pd => pd.id == id);
    const [productQuantity, setProductQuantity] = useState(1);
    const [placeOrder, setPlaceOrder ] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [payment, setPayment] = useContext(userContext);
    const [shipmentInfo, setShipmentInfo] =  useState({})
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

// order shipment info
const shipmentInput = (e)=>{
    const shipInut = {...shipmentInfo, product:{name:name, price:price, img:img}};
    shipInut[e.target.name] = e.target.value;
    setShipmentInfo(shipInut)
}
// handle order shipment 
const handleOrderShipment = (e)=>{
    e.preventDefault();
    alert("order place successfully")
}

console.log(shipmentInfo)

    return (
        <div className="checkout">
            {placeOrder?<h3 style={{marginLeft:'15%'}}>Pay bill with card</h3>:<h3>Product Details</h3>}
            <div className="container">
                <div className="checkoutInfo">
                    {placeOrder?<StripePayment/>:
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
                   {payment.id?<div className="shiping-form">
                       <h3>Shipping addresse</h3>
                       <div className="shipingForm">
                          <form onSubmit={handleOrderShipment}>
                          <input type="text" name="name" onBlur={shipmentInput} value={loggedInUser.name} placeholder="your name"/> <br />
                           <input type="email" name="email"  onBlur={shipmentInput} placeholder="your email"/><br />
                           <input type="text" name="location" onBlur={shipmentInput} placeholder="Present Location"/><br />
                           <input type="tell" name="phone" onBlur={shipmentInput} placeholder="Mobile number"/><br />
                           <button>Place Order</button>
                          </form>
                       </div>
                   </div>:''}
                   {placeOrder?'':<div className="cart-count">
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