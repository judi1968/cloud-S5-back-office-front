import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS de Bootstrap dans votre projet
// import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import './../assets/css/Home.css'
import './../assets/css/statTables.css'

const ListAnnonce = () => {
  return (
    <div className="container mt-12 grid-container">
      <header>
        <Header></Header>
      </header>

      {/* Ajoutez ici le reste de votre contenu */}
      <main className="mt-12">
        <div className="container mt-12 table-container">
          <h1>Liste des annonces</h1>
          <div className='row'>
            <div class="col-6">
              ici
            </div>
            <div class="col-6">
              ici
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListAnnonce;
