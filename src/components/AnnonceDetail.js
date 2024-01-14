// Dans le composant AnnonceDetail

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/AnnonceDetail.css';

const AnnonceDetail = ({ annonce, onFermerClick }) => {
  if (!annonce) {
    return null;
  }

  return (
    <div className="annonce-detail-container">
      <h2>Détails de l'annonce</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{`Annonce ${annonce.id}`}</h5>
          <p className="card-text">{annonce.description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Date:</strong> {annonce.date}</li>
            <li className="list-group-item"><strong>Vendeur:</strong> {annonce.vendeur}</li>
            <li className="list-group-item"><strong>Marque de la voiture:</strong> {annonce.marqueVoiture}</li>
            <li className="list-group-item"><strong>Type:</strong> {annonce.type}</li>
            <li className="list-group-item"><strong>Prix:</strong> ${annonce.prix}</li>
            <li className="list-group-item"><strong>Commission proposée:</strong> ${annonce.commissionPropose}</li>
          </ul>
          <button className="btn btn-ferme mt-3" onClick={onFermerClick}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnonceDetail;
