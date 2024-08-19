import './App.css';
import { useState } from 'react';
import cookieShop from "./images/cookieShop.jpg"
// import products from './products';
import ProductList from './components/ProductList';
function App() {
  const [search, setSearch] = useState("")
  
  
    

  return (
    <div className="app">
      <h1>Cookies and Beyond</h1>
      <h6>Where cookie maniacs gather</h6>
      
      <img className="shop-image" src={cookieShop} alt="shop"/>
      <input onChange={(e)=> setSearch(e.target.value)} placeholder='Search Item'/>
      <ProductList search={search} />
      
    </div>
  );
}

export default App;
