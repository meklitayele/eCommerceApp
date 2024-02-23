import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove from '../Assets/bin.png'

export const CartItems = () => {
  const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
     <div className="cartitems-format-main">
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
     </div>
     <hr />
     {all_product.map((e)=>{
       if(cartItems[e.id]>0){
        return <div>
      <div className="cartitems-format cartitems-format-main">
        <img src={e.image} alt=""  className='carticon-product-icon'/>
        <p>{e.name}</p>
        <p>${e.price}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>${e.price * cartItems[e.id]}</p>
        <button className='carticon-remove-icon'onClick={()=>{removeFromCart(e.id)}} alt="" >X</button>
      </div>
      <hr />
     </div>
       }
       return null;
     })}
     <div className='cartitems-down'>
      <div className='cartitems-total'>
        <h1>Cart Totals</h1>
        <div>
          <div className='cartitems-total-item'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

      </div>
     </div>
    </div>
  )
}
