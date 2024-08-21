import './App.css';
import { useState } from 'react';
import Header from './components/Header';
// import products from './products';
import ProductList from './components/ProductList';
function App() {
  const [search, setSearch] = useState("")
  
    

  return (
    <div className="app">
      <Header />
      <input onChange={(e)=> setSearch(e.target.value)} placeholder='Search Item'/>
      <ProductList search={search} />
      
    </div>
  );
}

export default App;
