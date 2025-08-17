import React from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();
    
    const verifyPayment = async () => {
        const response = await axios.post(`${url}/api/order/verify`, {success, orderId});

        if(response.data.success){
            navigate('/myorders');
        } else {
            navigate('/');
        }
    }

  return (
    <div className='verify'>
      <div className="spinner">
      </div>
      <div className="container">
        <button onClick={() => verifyPayment()} className='confirm'>Proceed </button>
      </div>
    </div>
  )
}

export default Verify
