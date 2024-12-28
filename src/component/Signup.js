import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !password || !confirmPassword) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    if (password.length < 8) {
      setError('Le mot de passe doit contenir 8 caractères ou plus.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    // Save user data to localStorage
    const userData = { name, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(userData));

    console.log('New user data:', userData);

    // Redirect to login page after successful signup
    navigate('/login');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Créer un compte</h2>
        <p className="login-description">Rejoignez-nous et découvrez les meilleures offres d'ordinateurs et composants.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nom complet :</label>
            <input
              type="text"
              id="name"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Adresse e-mail :</label>
            <input
              type="email"
              id="email"
              placeholder="exemple@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Mot de passe :</label>
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirmez le mot de passe :</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirmez le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="btn-submit">S'inscrire</button>
        </form>
        <div className="login-footer">
          <p>Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
