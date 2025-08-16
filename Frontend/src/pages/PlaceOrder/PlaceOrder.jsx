import { useContext, useState } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const PlaceOrder = () => {
  const { getTotalCartAmount, url, token, food_list, cartItems } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(data => ({ ...data, [name]: value }));
  }

  const placeOrder = async (e) => {
    e.preventDefault();

    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2
    };

    const response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });

    if (response.data.success) {
      window.location.replace(response.data.success_url);
    } else {
      alert(response.data.message);
    }

  }

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input onChange={onChangeHandler} type="text" placeholder='First Name' name='firstName' value={data.firstName} required />
          <input onChange={onChangeHandler} type="text" placeholder='Last Name' name='lastName' value={data.lastName} required />
        </div>

        <input onChange={onChangeHandler} type="email" placeholder='Email' name='email' value={data.email} required />
        <input onChange={onChangeHandler} type="text" placeholder='Street' name='street' value={data.street} required />

        <div className="multi-fields">
          <input onChange={onChangeHandler} type="text" placeholder='City' name='city' value={data.city} required />
          <input onChange={onChangeHandler} type="text" placeholder='State' name='state' value={data.state} required />
        </div>

        <div className="multi-fields">
          <input onChange={onChangeHandler} type="number" placeholder='Zip Code' name='zipcode' value={data.zipcode} required />
          <input onChange={onChangeHandler} type="text" placeholder='Country' name='country' value={data.country} required />
        </div>

        <input onChange={onChangeHandler} type="number" placeholder='Phone' name='phone' value={data.phone} required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>

            </div>
            <button type='submit'>Proceed to payment</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
