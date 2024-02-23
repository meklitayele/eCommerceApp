import React from 'react';
import './Popular.css';
import data2 from '../Assets/all_products2';

export const Popular = () => {
  return (
    <div className='popular-first'>
    <h1>POPULAR ITEMS</h1>
    <hr />
    <div className='popular'>
    
      <div className='popular-item'></div>
      {data2.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
};