import React from 'react'
import ProductItem from './ProductItem'
import products from '../products'

const ProductList = ({search}) => {
    const displayedProducts = products.filter(product=> search ?  product.name.toLowerCase().includes(search.toLowerCase()) : product).map(product=><ProductItem product={product} search={search}/>) 
  return (
    <div className='products-container'>
        {displayedProducts}
    </div>
  )
}

export default ProductList