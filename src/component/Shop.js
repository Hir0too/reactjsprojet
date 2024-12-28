import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
  const categories = [
    { name: 'PC', path: 'pc', description: 'Explorez notre collection de PC performants et fiables.' },
    { name: 'PC Gamer', path: 'pc-gamer', description: 'Les meilleurs PC pour vos sessions de gaming.' },
    { name: 'Cartes graphiques', path: 'cartes-graphiques', description: 'Des cartes graphiques pour tous vos besoins visuels.' },
    { name: 'Souris', path: 'souris', description: 'Des souris ergonomiques et précises.' },
    { name: 'Claviers', path: 'claviers', description: 'Des claviers mécaniques et classiques de qualité.' },
    { name: 'Écrans', path: 'ecrans', description: 'Des écrans haute résolution pour vos besoins.' },
  ];

  return (
    <div className="shop-page">
      {/* Navbar */}
      <nav className="shop-navbar">
        <div className="navbar-brand">TechShop</div>
        <ul className="navbar-links">
          <li><Link to="/main">Main</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/login">Log Out</Link></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="shop-header">
        <h1>Bienvenue dans la boutique TechShop</h1>
        <p>Explorez nos différentes catégories et offres spéciales.</p>
      </header>

      {/* Categories Section */}
      <section className="shop-categories">
        <h2>Nos Catégories</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <Link to={`/shop/${category.path}`}>
                <button className="category-button">Explorer</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="shop-footer">
        <p>© 2023 TechShop. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Shop;
