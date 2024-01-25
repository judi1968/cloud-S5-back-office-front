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
          <h5 className="card-title">{`Annonce ${annonce.annonce.annonceId}`}</h5>
          <p className="card-text">{annonce.annonce.dateDebut}</p>
          <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Couleur :</strong> {annonce.catalogVoiture.couleur}</li>
            <li className="list-group-item"><strong>Consommation :</strong> {annonce.catalogVoiture.consommation}</li>
            <li className="list-group-item"><strong>Marque de la voiture :</strong> {annonce.catalogVoiture.marqueVoitureNom}</li>
            <li className="list-group-item"><strong>Description de la voiture :</strong> {annonce.catalogVoiture.marqueVoitureDescription}</li>
            <li className="list-group-item"><strong>Date de création de la marque :</strong> {annonce.catalogVoiture.marqueVoitureDateCreation}</li>
            <li className="list-group-item"><strong>Type de carburant :</strong> {annonce.catalogVoiture.typeCarburantNom}</li>
            <li className="list-group-item"><strong>Transmission :</strong> {annonce.catalogVoiture.transmissionVoitureNom}</li>
            <li className="list-group-item"><strong>Freinage :</strong> {annonce.catalogVoiture.freinageVoitureNom}</li>
            <li className="list-group-item"><strong>Prix :</strong> ${annonce.voiturePrix.prix}</li>
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
