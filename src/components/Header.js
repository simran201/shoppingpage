import React from 'react'
import '../App.css'
const Header = (props) => {
  return (
    <div className=' p-4 d-flex justify-content-between shopping-cart'>
        <div onClick={()=>props.handleShow(false)}>
        <h3>Shopping Cart App</h3></div>
        <div onClick={()=>props.handleShow(true)}>
        <h5>Cart
        <sup>{props.count}</sup></h5></div>
    </div>
  )
}

export default Header