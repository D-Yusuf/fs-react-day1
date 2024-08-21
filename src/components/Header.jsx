import React, {useState} from 'react'

const Header = () => {
  const [count, setCount] = useState(0)

  return (
    <section>
        <h1>Cookies and Beyond</h1>
      <h3>Where cookie maniacs gather</h3>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <h5>Visitors: {count}</h5>
        <button onClick={()=>setCount(count+1)}>Visited</button>
      </div>
      {/* <img className="shop-image" src={cookieShop} alt="shop"/> */}
    </section>
  )
}

export default Header