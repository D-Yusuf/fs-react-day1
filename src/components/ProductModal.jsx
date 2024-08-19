import React from 'react'
const ProductModal = ({product, on, closeModal,setModalOn  }) => {
  return on ? (
    <>
    <div onClick={closeModal} className='modal-bg'></div>
    <div className="modal-container">

      <div className='product-modal'>
        <button onClick={closeModal} className='close-modal'>X</button>
        <img width={300} height={300} src={product.image} alt={product.name}/>
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <button className='order-btn'>Order</button>
      </div>
    </div>
    </>
  ) : <></>
}

export default ProductModal