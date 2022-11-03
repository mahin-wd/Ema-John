import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../../utilities/fakedb'
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    // const {products, count} = useLoaderData()
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState([]);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect( () => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`;
        fetch(url)
        .then(res => res.json())
           .then(data => {
            setProducts(data.products);
               setCount(data.count);
           })
    }, [page, size])

    const pages = Math.ceil(count / size);
    
    useEffect ( () => {
        const storedCart = getStoredCart();
        const savedCart = [];
        // console.log(storedCart);
        for (const id in storedCart) {
            const addedProducts = products.find(product => product._id === id)
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
        const exist = products.find(product => product._id === selectedProduct._id);
        if(exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }else{
            const rest = products.filter(product => product._id !== selectedProduct._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div>
            <div className='shop-container'>
                <div className="products">
                    {
                        products.map(product => <Product 
                            key = {product._id}
                            product = {product}
                            addToCart = {addToCart}
                            ></Product>)
                    }
                </div>

            <div className="cart">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
        <div className='pagination'>
            {
                [...Array(pages).keys()].map(index => <button 
                key={index}
                className={page === index && 'selected'}
                onClick={() => setPage(index)}
                >{index + 1}</button>)
            }
            <select className='options' onChange={e => setSize(e.target.value)}>
                <option value={5}>5</option>
                <option value={10} selected>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
        </div>
        </div>
    );
};

export default Shop;