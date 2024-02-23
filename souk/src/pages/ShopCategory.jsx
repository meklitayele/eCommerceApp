import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  if (!all_product) {
    // Display a loading state or return null while the data is being fetched
    return <p>Loading...</p>;
  }

  const filteredProducts = all_product.filter(
    (item) => item.category === props.category
  );

  return (
   
      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
        {filteredProducts.length === 0 && (
          <p>No products found in this category.</p>
        )}
      </div>
   
  );
};

export default ShopCategory;