import React, { useState } from 'react'
import ProductModal from './ProductModal'
const ProductItem = ({search, product}) => {
  const [modalOn, setModalOn] = useState(false)
  function closeModal(){
    setModalOn(false)
  }
  return(
    <>
    <div onClick={()=>setModalOn(true)} className='item-container'>
      <img width={150} height={150} src={product.image} alt={product.name}/>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
    <ProductModal on={modalOn} closeModal={closeModal} product={product}/>
    </>
)

}

export default ProductItem
