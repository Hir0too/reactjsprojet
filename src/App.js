import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Main from './component/Main';
import Contact from './component/Contact';
import Shop from './component/Shop';
import CategoryPage from './component/CategoryPage';
import PC from './component/categories/PC';
import PCGamer from './component/categories/PCGamer';
import CartesGraphiques from './component/categories/CartesGraphiques';
import Souris from './component/categories/Souris';
import Claviers from './component/categories/Claviers';
import Ecrans from './component/categories/Ecrans';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          
          <Route path="/shop/pc" element={<PC />} />
          <Route path="/shop/pc-gamer" element={<PCGamer />} />
          <Route path="/shop/cartes-graphiques" element={<CartesGraphiques />} />
          <Route path="/shop/souris" element={<Souris />} />
          <Route path="/shop/claviers" element={<Claviers />} />
          <Route path="/shop/ecrans" element={<Ecrans />} />
          {/* Redirection pour les routes incorrectes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;