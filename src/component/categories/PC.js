import React from 'react';

const PC = () => {
  const products = [
    { name: 'PC Dell Inspiron', price: '5000 MAD' },
    { name: 'PC HP Pavilion', price: '6000 MAD' },
    { name: 'PC Lenovo ThinkPad', price: '7000 MAD' },
    // Add more products as needed
  ];

  return (
    <div className="category-page">
      <h1>PC</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PC;
