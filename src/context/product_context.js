import axios from "axios";

import { useContext, useState, useEffect, createContext } from "react";


const ProductContext = createContext();

const getProductsFromBackend = () => {
    const data = axios.get("/api/products");
    return data;
}





function ProductContextProvider({ children }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {
            try {
                const { data } = await getProductsFromBackend();
                setProducts(() => data.products);
            } catch (err) {
                console.error(err.message);
            }
        }

        // (async () => {
        //     try {
        //         const { data } = await getProductsFromBackend();
        //         setProducts(() => data.products);
        //     } catch (err) {
        //         console.error(err.message);
        //     }
        // })();

        getProducts();


    }, [])



    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>)
}

const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductContextProvider }