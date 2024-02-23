import React, { useRef } from 'react';
import './Arrivals.css';
import arrival from '../Assets/Arrival.jpg';
import arrival1 from '../Assets/P9.jpg';
import arrival2 from '../Assets/P10.jpg';

const Arrivals = () => {
  let imageContainer = useRef(null);
  const images = [arrival, arrival1, arrival2];

  const scrollLeft = () => {
    imageContainer.current.scrollLeft -= 250;
  };

  const scrollRight = () => {
    imageContainer.current.scrollLeft += 250;
  };

  return (
    <div className='arrival'>
      <div className='arrival-left'>
        <h2>NEW ARRIVALS</h2>
        <div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className='collectionsbtn'></div>
      </div>
      <div className='arrival-right'>
        <div className='slide-container'>
          <div className='slide-panel' ref={imageContainer}>
            {images.map((image, index) => (
              <img key={index} src={image} alt='' />
            ))}
          </div>
        </div>
        <div className='prev' onClick={scrollLeft}></div>
        <div className='next' onClick={scrollRight}></div>
      </div>
    </div>
  );
};

export default Arrivals;