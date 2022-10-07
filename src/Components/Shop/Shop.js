import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../../utilities/fakedb'
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([]);

    useEffect ( () => {
        const storedCart = getStoredCart();
        const savedCart = [];
        // console.log(storedCart);
        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id)
            // console.log(addedProducts);
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);
                // console.log(addedProducts);
            }
        }
        setCart(savedCart);

    }, [products])

    const addToCart = (selectedProduct) => {
        // console.log(product);
        let newCart = [];
        const exist = products.find(product => product.id === selectedProduct.id);
        if(exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }else{
            const rest = products.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products">
                {
                    products.map(product => <Product 
                        key = {product.id}
                        product = {product}
                        addToCart = {addToCart}
                        ></Product>)
                }
            </div>

            <div className="cart">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;