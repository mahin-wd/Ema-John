import { getStoredCart } from "../utilities/fakedb";

export const productsAndCart = async () =>{
    const productsDate = await fetch('http://localhost:5000/products');
    const {products} = await productsDate.json();

    const savedCart = getStoredCart();
    // console.log(savedCart);
    const previousCart = [];

    for (const id in savedCart){
        const addedProducts = products.find(product => product._id === id);
        if(addedProducts){
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            previousCart.push(addedProducts); 
            // console.log(previousCart);
        }
        // console.log(id, addedProducts);
    }
    return {products, previousCart};
}