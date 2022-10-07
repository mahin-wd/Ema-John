import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './ReviewItems.css'

const ReviewItems = ({product, removeItem}) => {
    const {id, img, name, price, quantity, shipping} = product;
    // const removeItems = props.removeItems;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-info">
                <div>
                    <h3>{name}</h3>
                    <p>Price: {price}</p>
                    <p>Shipping: {shipping}</p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>

                <div className="delete-btn">
                    <button onClick={() => removeItem(id)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewItems;