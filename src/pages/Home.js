import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS de Bootstrap dans votre projet
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  return (
    <main className="container mt-12">
      <header>
        <Header></Header>
      </header>

      {/* Ajoutez ici le reste de votre contenu */}
      <div className="mt-3">
        <h1>Contenu principal</h1>
        <NavLink to="/">login</NavLink>
        {/* ... */}
      </div>
    </main>
  );
};

export default Home;
