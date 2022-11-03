import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const { previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    
    const removeItem = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className="">
                {
                    cart.map(product => <ReviewItems
                                key={product._id}
                                product={product}
                                removeItem={removeItem}
                            ></ReviewItems>)
                }
            </div>
            <div className="cart">
                <Cart 
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;