import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');

    if (!name || !email || !phone || !message) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Logic to handle contact form submission (e.g., send to API)
    console.log('Contact Form Submitted:', { name, email, phone, message });
    setSuccess('Votre message a été envoyé avec succès.');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contactez-nous</h1>
        <p>Nous sommes ici pour répondre à toutes vos questions.</p>
      </header>

      <section id="contact-form" className="contact-section">
        <h2 className="contact-form-title">Écrivez-nous</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-group">
            <label htmlFor="name" className="contact-form-label">Nom complet :</label>
            <input
              type="text"
              id="name"
              placeholder="Votre nom complet"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact-form-input"
              required
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="email" className="contact-form-label">Adresse e-mail :</label>
            <input
              type="email"
              id="email"
              placeholder="Votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact-form-input"
              required
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="phone" className="contact-form-label">Numéro de téléphone :</label>
            <input
              type="tel"
              id="phone"
              placeholder="Votre numéro de téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="contact-form-input"
              required
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="message" className="contact-form-label">Message :</label>
            <textarea
              id="message"
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact-form-textarea"
              rows="6"
              required
            />
          </div>
          {success && <p className="contact-success-message">{success}</p>}
          <button type="submit" className="contact-btn-submit">Envoyer</button>
        </form>
      </section>

      
    </div>
  );
};

export default Contact;
