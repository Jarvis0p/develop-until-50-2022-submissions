import React from 'react'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
const Home = () => {
  return (
    <div className='pd-0'>
      <Navbar />
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