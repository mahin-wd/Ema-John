import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    // console.log(cart);
    let quantity = 0;
    let total = 0;
    let shipping = 0;
    let vat = 0;
    let grandTotal = 0;

    for (const products of cart) {
        quantity = quantity + products.quantity;
        total = total + products.price * products.quantity;
        shipping = shipping + products.shipping;
        vat = parseFloat(((total * 5) / 100).toFixed(2));
        grandTotal = total + shipping + vat;
    }
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Shipping Price: ${shipping}</p>
                <p>Vat: ${vat}</p>
                <h3>Grand Total: ${grandTotal}</h3>
                <button className='clear'>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
                <button className='review'>
                    <p>Review Order</p>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Cart;