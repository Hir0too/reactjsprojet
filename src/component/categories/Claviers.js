import React from 'react';

const Claviers = () => {
  const products = [
    { name: 'Logitech MX Keys', price: '1,200 MAD' },
    { name: 'Razer BlackWidow V3', price: '1,400 MAD' },
    { name: 'Corsair K70 RGB MK.2', price: '1,600 MAD' },
    { name: 'SteelSeries Apex Pro', price: '1,800 MAD' },
    { name: 'HyperX Alloy Elite 2', price: '1,100 MAD' },
  ];

  return (
    <div className="category-page">
      <h1>Claviers</h1>
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

export default Claviers;
