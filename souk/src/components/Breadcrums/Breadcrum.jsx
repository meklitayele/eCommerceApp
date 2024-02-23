import React from 'react'
import './Breadcrum.css'
import arrow from '../Assets/right-arrow.png'

const Breadcrum = (props) => {
  const{product}=props;
   
  return (
    <div className='Breadcrum'>
      HOME - SOUK - {product.category}-{product.name}
    </div>
  )
}
export default Breadcrum;