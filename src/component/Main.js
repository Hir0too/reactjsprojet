import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  return (
    <div className="main-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">TechShop</div>
        <ul className="navbar-links">
          <li><Link to="/main">Main</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/login">Log Out</Link></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="main-header">
        <h1>Bienvenue sur TechShop</h1>
        <p>Votre destination ultime pour acheter des ordinateurs et composants de qualité.</p>
        
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>À propos de nous</h2>
        <p>
          TechShop s'engage à offrir à tous les passionnés de technologie des produits informatiques de qualité supérieure, au meilleur prix, avec un service client exemplaire. Découvrez des offres imbattables adaptées à vos besoins.
        </p>
      </section>

      {/* Sales Section */}
      <section id="sales" className="sales-section">
        <h2>Soldes exclusives</h2>
        <div className="sales-items">
          <div className="sales-item">
            <img src="/images/laptop-sale.jpg" alt="Laptop Sale" />
            <p>-20% sur les ordinateurs portables</p>
          </div>
          <div className="sales-item">
            <img src="/images/components-sale.jpg" alt="Components Sale" />
            <p>-15% sur les composants</p>
          </div>
          <div className="sales-item">
            <img src="/images/peripherals-sale.jpg" alt="Peripherals Sale" />
            <p>Offres spéciales sur les périphériques</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section">
        <h2>Nos catégories</h2>
        <div className="categories">
          <div className="category">Ordinateurs</div>
          <div className="category">Composants</div>
          <div className="category">Périphériques</div>
          <div className="category">Accessoires</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2>Ce que disent nos clients</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"TechShop m'a aidé à trouver le PC parfait pour mes besoins. Service exceptionnel et livraison rapide !"</p>
            <h4>- Jean Dupont</h4>
          </div>
          <div className="testimonial">
            <p>"J'ai économisé des centaines de dirhams sur mes composants. Merci TechShop !"</p>
            <h4>- Marie Curie</h4>
          </div>
          <div className="testimonial">
            <p>"Un excellent service client et des produits de qualité. Je recommande TechShop !"</p>
            <h4>- Ahmed El Amrani</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 TechShop. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Main;
