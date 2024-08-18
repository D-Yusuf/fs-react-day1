import './App.css';
import cookieShop from "./images/cookieShop.jpg"
import products from './products';
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState("")
  
  const productsList = products.filter(product=>search ? product.name.toLowerCase().includes(search.toLowerCase()) : product).map(product=>{
    return(
       
      <div className='item-container'>
        <img width={150} height={150} src={product.image} alt={product.name}/>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
  )
  })
    

  return (
    <div className="app">
      <h1>Cookies and Beyond</h1>
      <h6>Where cookie maniacs gather</h6>
      
      <img className="shop-image" src={cookieShop} alt="shop"/>
      <input onChange={(e)=> setSearch(e.target.value)} placeholder='Search Item'/>
      <div className='images-container'>
        {productsList}
      </div>
    </div>
  );
}

export default App;
