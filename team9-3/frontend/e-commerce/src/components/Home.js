import React from 'react'
import ProductCard from './ProductCard'
import AddProduct from './AddProduct'

const Home = (props) => {
  return (
    <div className='pd-0'>
      <AddProduct shwoAlert={props.showAlert}/>
      <div className="container card-main-div">
        <div className="row card-row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default Home