import React,{useContext,useState} from 'react'
import { ProductContext } from '../Context/Product/ProductState';

const AddProduct = (props) => {

const { addProduct } = useContext(ProductContext);
    const [product, setProduct] = useState({
                    name:"",
                     price:0,
                     productType:"",
                     category:"",
                     quantity:0})
    const handleClick = (e)=>{
        e.preventDefault();
        addProduct(product.name, product.price, product.productType, product.category, product.quantity);
        // console.log("clicked");
        setProduct({ name:"",
                     price:0,
                     productType:"",
                     category:"",
                     quantity:0})
        props.showAlert("Added Successfully","success");
    }

    const onChange = (e)=>{
        setProduct({...product, [e.target.name]: e.target.value})
    }



  return (
    <div className="vh-50 d-flex justify-content-center align-items-center py-5">
            <div className="col-md-4 p-5 shadow-sm border rounded-3 signup-div">
                <h2 className="text-center mb-4 text-dark">Add New Product</h2>
                <form method='POST'>
                <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Product Name</label>
                        <input type="text" className="form-control border border-dark" id="name" name='name' value={product.name}   aria-describedby="emailHelp" onChange={onChange}  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" className="form-control border border-dark" id="price"  name='price' value={product.price}  aria-describedby="emailHelp" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Type</label>
                        <input type="text" className="form-control border border-dark" id="type"  name='productType' value={product.productType}  aria-describedby="emailHelp" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input type="text" className="form-control border border-dark" id="category" name='category' value={product.category}  onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input type="number" className="form-control border border-dark" id="quantity" name='quantity' value={product.quantity}  onChange={onChange}/>
                    </div>
                     
                    <div className="d-grid">
                        
                        <button type="submit"className="btn btn-dark" onClick={handleClick}>Add</button>
                    </div>
                </form>
                
            </div>
        </div>

  )
}

export default AddProduct