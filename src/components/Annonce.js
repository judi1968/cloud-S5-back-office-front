import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Annonce.css';
import { formaterDate, formaterPrix } from '../_services/formate.service';
const Annonce = ({
  annonceId,
  dateDebut,
  consommation,
  categorieVoitureNom,
  marqueVoitureNom,
  typeCarburantNom,
  transmissionVoitureNom,
  freinageVoitureNom,
  prix,
  commission,
  nomAuteur,
  prenomAuteur,
  onDetailClick

}) => {
  return (
    <div className="animated-annonce-card">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{marqueVoitureNom}</h5>
          <p className="card-text" style={{fontSize:'75%'}}>{nomAuteur} {prenomAuteur}  | {formaterDate(dateDebut)}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Categorie :</strong> {categorieVoitureNom}</li>
            <li className="list-group-item"><strong>Consommation :</strong> {consommation}</li>
            <li className="list-group-item"><strong>Type de carburant :</strong> {typeCarburantNom}</li>
            <li className="list-group-item"><strong>Transmission :</strong> {transmissionVoitureNom}</li>
            <li className="list-group-item"><strong>Freinage :</strong> {freinageVoitureNom}</li>
            <li className="list-group-item" style={{color:'green'}}><strong>Prix :</strong> {formaterPrix(prix)}</li>
            <li className="list-group-item" style={{color:'green'}}><strong>Commission :</strong> {formaterPrix(commission)}</li>
          </ul>
          <button className="btn btn-primary mt-3" onClick={() => onDetailClick(annonceId)}>
            Voir le détail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Annonce;
