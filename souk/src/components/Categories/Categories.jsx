import {React,useState} from 'react'
import './Categories.css'
import men from '../Assets/P7.jpg'
import women from '../Assets/P4.jpg'
import { Link } from 'react-router-dom'

export const Categories = () => {
  const[menu,setMenu]= useState("souk");
  return (
    <div className='container2'>
      <h2>Categories</h2>
      
       <div className='images'>
        <div className='left'>
          <img className='leftImg'src={men} alt="" />
          <Link  to='/women'><button onClick={()=>{setMenu("men")}}>Men's</button></Link>
        </div>
        <div className='right'>
          <img className='rightImg'src={women} alt="" />
          <Link  to='/men'><button onClick={()=>{setMenu("men")}}>Women's</button></Link>
        </div>
       </div>
    </div>
  )
}
