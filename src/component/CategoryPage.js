import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CategoryPage.css';

const productsData = {
  pc: [
    { id: 1, name: 'PC Dell Inspiron', price: '5000 MAD' },
    { id: 2, name: 'PC HP Pavilion', price: '6000 MAD' },
    { id: 3, name: 'PC Lenovo ThinkPad', price: '5500 MAD' },
    { id: 4, name: 'PC Acer Aspire', price: '5200 MAD' },
    { id: 5, name: 'PC Asus VivoBook', price: '5800 MAD' },
    { id: 6, name: 'PC Apple iMac', price: '15000 MAD' },
    { id: 7, name: 'PC Toshiba Satellite', price: '4900 MAD' },
    { id: 8, name: 'PC Samsung Notebook', price: '6200 MAD' },
    { id: 9, name: 'PC Microsoft Surface', price: '13000 MAD' },
    { id: 10, name: 'PC Fujitsu Lifebook', price: '4700 MAD' },
    { id: 11, name: 'PC MSI Modern', price: '7000 MAD' },
    { id: 12, name: 'PC LG Gram', price: '7500 MAD' },
    { id: 13, name: 'PC Huawei MateBook', price: '8000 MAD' },
    { id: 14, name: 'PC Dell Latitude', price: '5900 MAD' },
    { id: 15, name: 'PC HP Envy', price: '6700 MAD' },
    { id: 15, name: 'PC HP Envy', price: '6700 MAD' },
  ],
  pcgamer: [
    { id: 1, name: 'PC Gamer Alienware', price: '15000 MAD' },
    { id: 2, name: 'PC Gamer MSI Trident', price: '14000 MAD' },
    { id: 3, name: 'PC Gamer HP Omen', price: '16000 MAD' },
    { id: 4, name: 'PC Gamer Asus ROG', price: '17000 MAD' },
    { id: 5, name: 'PC Gamer Lenovo Legion', price: '15500 MAD' },
    { id: 6, name: 'PC Gamer Acer Predator', price: '14500 MAD' },
    { id: 7, name: 'PC Gamer Corsair Vengeance', price: '16500 MAD' },
    { id: 8, name: 'PC Gamer Dell G5', price: '15000 MAD' },
    { id: 9, name: 'PC Gamer CyberPowerPC', price: '13000 MAD' },
    { id: 10, name: 'PC Gamer iBUYPOWER', price: '12500 MAD' },
    { id: 11, name: 'PC Gamer Razer Blade', price: '18500 MAD' },
    { id: 12, name: 'PC Gamer Gigabyte Aorus', price: '14500 MAD' },
    { id: 13, name: 'PC Gamer HP Victus', price: '13500 MAD' },
    { id: 14, name: 'PC Gamer Zotac Mek', price: '15500 MAD' },
    { id: 15, name: 'PC Gamer Origin Neuron', price: '20000 MAD' },
  ],
  cartesgraphiques: [
    { id: 1, name: 'NVIDIA RTX 3060', price: '4000 MAD' },
    { id: 2, name: 'NVIDIA RTX 3070', price: '6000 MAD' },
    { id: 3, name: 'NVIDIA RTX 3080', price: '8000 MAD' },
    { id: 4, name: 'AMD RX 6600', price: '3500 MAD' },
    { id: 5, name: 'AMD RX 6700 XT', price: '5500 MAD' },
    { id: 6, name: 'AMD RX 6800', price: '7500 MAD' },
    { id: 7, name: 'NVIDIA GTX 1660', price: '3000 MAD' },
    { id: 8, name: 'NVIDIA GTX 1650', price: '2500 MAD' },
    { id: 9, name: 'AMD RX 5600 XT', price: '4000 MAD' },
    { id: 10, name: 'AMD RX 5500 XT', price: '3000 MAD' },
    { id: 11, name: 'NVIDIA Quadro P4000', price: '12000 MAD' },
    { id: 12, name: 'AMD Radeon Pro WX 7100', price: '11000 MAD' },
    { id: 13, name: 'NVIDIA RTX 2080 Ti', price: '9000 MAD' },
    { id: 14, name: 'AMD RX 590', price: '4000 MAD' },
    { id: 15, name: 'NVIDIA Titan RTX', price: '25000 MAD' },
  ],
  souris: [
    { id: 1, name: 'Logitech G502', price: '700 MAD' },
    { id: 2, name: 'Razer DeathAdder', price: '800 MAD' },
    { id: 3, name: 'SteelSeries Rival 600', price: '900 MAD' },
    { id: 4, name: 'Corsair Harpoon', price: '500 MAD' },
    { id: 5, name: 'Logitech MX Master 3', price: '1200 MAD' },
    { id: 6, name: 'Razer Basilisk V3', price: '1000 MAD' },
    { id: 7, name: 'SteelSeries Aerox 3', price: '1100 MAD' },
    { id: 8, name: 'HyperX Pulsefire', price: '750 MAD' },
    { id: 9, name: 'Asus ROG Gladius', price: '950 MAD' },
    { id: 10, name: 'Cooler Master MM720', price: '600 MAD' },
    { id: 11, name: 'Zowie EC2', price: '850 MAD' },
    { id: 12, name: 'Logitech G Pro Wireless', price: '1500 MAD' },
    { id: 13, name: 'Corsair Dark Core', price: '1400 MAD' },
    { id: 14, name: 'Razer Naga Trinity', price: '1300 MAD' },
    { id: 15, name: 'MSI Clutch GM41', price: '900 MAD' },
  ],
  claviers: [
    { id: 1, name: 'Clavier Corsair K70 RGB', price: '1500 MAD' },
    { id: 2, name: 'Clavier Logitech G213', price: '600 MAD' },
    { id: 3, name: 'Clavier Razer BlackWidow V3', price: '1300 MAD' },
    { id: 4, name: 'Clavier SteelSeries Apex Pro', price: '1800 MAD' },
    { id: 5, name: 'Clavier HyperX Alloy Elite 2', price: '1400 MAD' },
    { id: 6, name: 'Clavier Cooler Master CK552', price: '1100 MAD' },
    { id: 7, name: 'Clavier ASUS ROG Strix Scope', price: '1200 MAD' },
    { id: 8, name: 'Clavier MSI Vigor GK50', price: '1000 MAD' },
    { id: 9, name: 'Clavier Apple Magic Keyboard', price: '900 MAD' },
    { id: 10, name: 'Clavier Dell KB216', price: '200 MAD' },
    { id: 11, name: 'Clavier Logitech K120', price: '150 MAD' },
    { id: 12, name: 'Clavier Redragon K552', price: '500 MAD' },
    { id: 13, name: 'Clavier Roccat Vulcan 121', price: '1700 MAD' },
    { id: 14, name: 'Clavier Lenovo ThinkPad Compact', price: '800 MAD' },
    { id: 15, name: 'Clavier Keychron K6', price: '1300 MAD' },
  ],

  ecrans: [
    { id: 1, name: 'Écran Samsung Odyssey G7', price: '5000 MAD' },
    { id: 2, name: 'Écran LG UltraFine 5K', price: '8000 MAD' },
    { id: 3, name: 'Écran ASUS TUF Gaming VG27AQ', price: '3000 MAD' },
    { id: 4, name: 'Écran Dell UltraSharp 27"', price: '4500 MAD' },
    { id: 5, name: 'Écran HP 24F', price: '1500 MAD' },
    { id: 6, name: 'Écran Acer Nitro XV272U', price: '2500 MAD' },
    { id: 7, name: 'Écran ViewSonic XG2705', price: '2200 MAD' },
    { id: 8, name: 'Écran BenQ EX3203R', price: '4200 MAD' },
    { id: 9, name: 'Écran AOC C27G2Z', price: '2000 MAD' },
    { id: 10, name: 'Écran MSI Optix MAG321CQR', price: '3500 MAD' },
    { id: 11, name: 'Écran LG 34WL85C UltraWide', price: '7000 MAD' },
    { id: 12, name: 'Écran Samsung Smart Monitor M7', price: '3000 MAD' },
    { id: 13, name: 'Écran Philips 276E8VJSB', price: '2200 MAD' },
    { id: 14, name: 'Écran Gigabyte M32Q', price: '4000 MAD' },
    { id: 15, name: 'Écran Lenovo Q27h-10', price: '3200 MAD' },
  ],
};

const itemsPerPage = 5;

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get the category from the URL
  const navigate = useNavigate(); // Used for navigation between pages
  const products = productsData[categoryName.toLowerCase()] || []; // Retrieve the category products

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleBuy = (productId) => {
    // Navigate to the purchase page with the selected product
    navigate(`/purchase/${categoryName}/${productId}`);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="category-page">
      <h1 className="category-title">Produits de la catégorie : {categoryName}</h1>
      <div className="product-list">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.name}</h3>
              
              <p>{product.price}</p>
              <button
                className="buy-button"
                onClick={() => handleBuy(product.id)}
              >
                Acheter
              </button>
            </div>
          ))
        ) : (
          <p className="no-products">Aucun produit trouvé pour cette catégorie.</p>
        )}
      </div>

      <div className="pagination">
        <button
          className="pagination-button"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span className="pagination-info">
          Page {currentPage} sur {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
      
    </div>
  );
};

export default CategoryPage;
