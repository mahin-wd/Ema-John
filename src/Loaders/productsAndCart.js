import { getStoredCart } from "../utilities/fakedb";

export const productsAndCart = async () =>{
    const productsDate = await fetch('products.json');
    const products = await productsDate.json();

    const savedCart = getStoredCart();
    // console.log(savedCart);
    const previousCart = [];

    for (const id in savedCart){
        const addedProducts = products.find(product => product.id === id);
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