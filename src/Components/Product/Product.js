import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {addToCart, product} = props;
    const {id, name, img, seller, price, shipping, ratings} = product
    return (
        <div className='product-card'>
            <img src={img} alt=""/>
                <div className='product-info'>
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                    <p>Manufecturer: {seller}</p>
                    <p><small>Ratings: {ratings}</small></p>
                </div>
                <button onClick={() => {addToCart(product)}} className='add-to-cart'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;