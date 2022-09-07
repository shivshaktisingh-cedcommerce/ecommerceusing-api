import Navbar from "./Navbar"
import React, {useContext , useEffect}from 'react'
import './App.css';
import Carousel from "./Carousel"
import Categories from "./Categories"
import Products from "./Products"
import {dummy} from "./Datacontext"

function App() {
  const user = useContext(dummy)

  const increasequantfun=(d)=>{
     d.quantity = Number(d.quantity) + 1
     user.setCart([...user.cart])
  }

  useEffect(()=>{
    var x = 0;
    user.cart.map((d)=>{
      x = x + d.quantity * d.price
      
    })
    user.setTotalamount(x)

  },[user.cart])

  const delete_fun=(i)=>{
    user.cart.splice(i , 1)
    user.cartid.splice(i , 1)
    user.setCart([...user.cart])
    user.setCartid([...user.cartid])
  }

  const decreasequantfun=(d ,i)=>{
   
  
    if(Number(d.quantity)>0){
      d.quantity = Number(d.quantity) - 1
    }
    if(Number(d.quantity)===0){
      d.quantity = 1;
      user.cart.splice(i , 1)
      user.cartid.splice(i , 1)
    }
    user.setCartid([...user.cartid])
    user.setCart([...user.cart])
  }

  
  return (
    <div className="App">
   
      <Navbar/>
      <Carousel/>
      <Categories/>
      <Products increasequantfun={increasequantfun} delete_fun={delete_fun} decreasequantfun={decreasequantfun}/>
  
    </div>
  );
}

export default App;
