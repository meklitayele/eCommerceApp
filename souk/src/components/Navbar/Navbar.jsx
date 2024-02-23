import React, { useState, useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo2.png'
import cart from '../Assets/cart2.png'
import { ShopContext } from '../../context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState("souk");
  const { cartItems } = useContext(ShopContext);

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  return (
    <div className='navbar'>
      <div className="navLogo">
        <img src={logo} alt="" />
      </div>
      <ul className='navMenu'>
        <li onClick={() => { setMenu("souk") }}>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
            Souk
          </Link>
          {menu === "souk" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("men") }}>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/men'>
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("women") }}>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='women'>
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
      </ul>
      <div className='navCart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="cartCount">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}