import React from 'react';

const CartesGraphiques = () => {
  const products = [
    { name: 'NVIDIA GeForce RTX 4090', price: '22,000 MAD' },
    { name: 'AMD Radeon RX 7900 XT', price: '18,000 MAD' },
    { name: 'NVIDIA GeForce RTX 3070', price: '12,000 MAD' },
    { name: 'AMD Radeon RX 6700 XT', price: '10,500 MAD' },
    { name: 'NVIDIA GeForce GTX 1660 Super', price: '6,000 MAD' },
  ];

  return (
    <div className="category-page">
      <h1>Cartes Graphiques</h1>
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

export default CartesGraphiques;
