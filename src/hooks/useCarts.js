import { useEffect, useState } from "react";
import { getStoredDb } from '../utilities/fakedb'
const useCarts = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredDb();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart);
        }
    }, [products])
    return [cart, setCart];
}

export default useCarts;