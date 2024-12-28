import React from 'react';

const Souris = () => {
  const products = [
    { name: 'Logitech G502 HERO', price: '800 MAD' },
    { name: 'Razer DeathAdder V2', price: '700 MAD' },
    { name: 'SteelSeries Rival 600', price: '950 MAD' },
    { name: 'Corsair M65 Elite', price: '850 MAD' },
    { name: 'HyperX Pulsefire FPS Pro', price: '600 MAD' },
  ];

  return (
    <div className="category-page">
      <h1>Souris</h1>
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

export default Souris;
