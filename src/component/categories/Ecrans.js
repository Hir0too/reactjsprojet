import React from 'react';

const Ecrans = () => {
  const products = [
    { name: 'Dell UltraSharp U2723QE', price: '4,000 MAD' },
    { name: 'LG 27GN950-B', price: '5,500 MAD' },
    { name: 'ASUS ROG Swift PG259QN', price: '6,000 MAD' },
    { name: 'Samsung Odyssey G7', price: '4,500 MAD' },
    { name: 'BenQ PD3220U', price: '3,800 MAD' },
  ];

  return (
    <div className="category-page">
      <h1>Écrans</h1>
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

export default Ecrans;
