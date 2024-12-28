import React from 'react';

const PCGamer = () => {
  const products = [
    { name: 'Alienware Aurora R11', price: '18,000 MAD' },
    { name: 'Asus ROG Strix G10', price: '14,000 MAD' },
    { name: 'HP Omen 25L', price: '16,500 MAD' },
    { name: 'Lenovo Legion Tower 5', price: '13,000 MAD' },
    { name: 'Corsair One i200', price: '20,000 MAD' },
  ];

  return (
    <div className="category-page">
      <h1>PC Gamer</h1>
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

export default PCGamer;
