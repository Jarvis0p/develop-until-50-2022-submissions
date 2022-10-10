import {
    createContext,
    useState
} from 'react';

import axios from "axios";


const ProductContext = createContext();
const ProductState = (props) => {
        const productsInitial = [];
        const host = "http://localhost:8000";

        const [products, setProducts] = useState(productsInitial);

        // Get all Products
        const getProduct = async () => {

            // API CALL
            const response = await axios.get(`${host}/product/fetchallproducts`, {
                headers: {
                    'auth-token': localStorage.getItem("token")
                },
            });
            console.log(response);
            setProducts(response);
        }



        // Add a product
        const addProduct = async (name,price,productType,category,quantity) => {

            // API CALL
            const response = await axios.post(`${host}/product/addproduct`,
                {
                    'auth-token': localStorage.getItem("token")
                },
                {
                     name,
                     price,
                     productType,
                     category,
                     quantity
                }
            );

            // using concat instead of push beacuse concat returns a new array
            setProducts(products.concat(response));

        }

         return (
        <ProductContext.Provider value={{ products, addProduct, getProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;
export { ProductContext };
