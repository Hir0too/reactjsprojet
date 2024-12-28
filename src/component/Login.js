import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Use localStorage to get registered user data (this would come from a backend in a real application)
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser')) || {};

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (email.trim() === registeredUser.email && password === registeredUser.password) {
            console.log('Login successful');
            alert('Connexion réussie');
            navigate('/main'); // Redirect to main page
        } else {
            setError('Email ou mot de passe incorrect.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h2 className="login-title">Connexion</h2>
                <p className="login-description">Connectez-vous pour explorer les meilleures offres d'ordinateurs et composants.</p>
                <form onSubmit={handleSubmit} className="login-form">
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
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit" className="btn-submit">Se connecter</button>
                </form>
                <div className="login-footer">
                    <p>Vous n'avez pas de compte ? <Link to="/signup">Inscrivez-vous</Link></p>
                    <p><Link to="/forgot-password">Mot de passe oublié ?</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;