import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1 className="home-title">Bienvenue sur TechShop</h1>
        <p className="home-subtitle">La meilleure plateforme pour acheter des ordinateurs et composants de qualité supérieure.</p>
      </header>

      <div className="home-actions">
        <Link to="/login" className="btn-primary">Se connecter</Link>
        <Link to="/signup" className="btn-secondary">S'inscrire</Link>
      </div>

      <section className="feature-section">
        <h2>Pourquoi choisir TechShop ?</h2>
        <p>Nous offrons des produits de haute qualité, des services exceptionnels, et des solutions technologiques sur mesure.</p>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Large Catalogue</h3>
            <p>Explorez une vaste gamme de produits informatiques adaptés à vos besoins.</p>
          </div>
          <div className="feature-card">
            <h3>Support Client 24/7</h3>
            <p>Une assistance continue pour répondre à toutes vos questions.</p>
          </div>
          <div className="feature-card">
            <h3>Livraison Rapide</h3>
            <p>Profitez d'une expédition rapide et fiable partout au Maroc.</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2023 TechShop. Tous droits réservés. | Innovons ensemble pour un avenir numérique.</p>
      </footer>
    </div>
  );
};

export default Home;
