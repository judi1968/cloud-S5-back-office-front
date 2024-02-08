// Dans le composant AnnonceDetail

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/AnnonceDetail.css';
import { formaterDate, formaterPrix } from '../_services/formate.service';

const AnnonceDetail = ({ annonce, onFermerClick }) => {
  if (!annonce) {
    return null;
  }

  return (
    <div className="annonce-detail-container">
      <h2>Détails de l'annonce</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{`Annonce ${annonce.catalogVoiture.marqueVoitureNom}`}</h5>
          <p className="card-text">{annonce.personneClient.nom} {annonce.personneClient.prenom} | {formaterDate(annonce.annonce.dateDebut)}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Couleur : </strong> <span style={{ background: `#${annonce.catalogVoiture.couleur}` , color: `rgba(0,0,0,0)`}}> ...................</span> </li>
            <li className="list-group-item"><strong>Annee de fabrication :</strong> {formaterDate(annonce.catalogVoiture.anneeFabrication)}</li>
            <li className="list-group-item"><strong>Consommation :</strong> {annonce.catalogVoiture.consommation}</li>
            <li className="list-group-item"><strong>Categorie :</strong> {annonce.catalogVoiture.categorieVoitureNom}</li>
            <li className="list-group-item"><strong>Marque :</strong> {annonce.catalogVoiture.marqueVoitureNom}</li>
            <li className="list-group-item"><strong>Date de creation :</strong> {formaterDate(annonce.catalogVoiture.marqueVoitureDateCretion)}</li>
            <li className="list-group-item"><strong>Type de carburant :</strong> {annonce.catalogVoiture.typeCarburantNom}</li>
            <li className="list-group-item"><strong>Transmission :</strong> {annonce.catalogVoiture.transmissionVoitureNom}</li>
            <li className="list-group-item"><strong>Freinage :</strong> {annonce.catalogVoiture.freignageVoitureNom}</li>
            <li className="list-group-item"><strong>Prix :</strong> {formaterPrix(annonce.voiturePrix.prix)}</li>
            <li className="list-group-item"><strong>Commission:</strong> {formaterPrix(annonce.annonce.commission)}</li>
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
