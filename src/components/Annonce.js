import React, { useState } from 'react';
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
  dateValidation,
  onDetailClick

}) => {

  const [isValide,setIsValide] = useState(false)

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
          {dateValidation === null && !isValide ? (
            <button className="btn btn-success mt-3" onClick={ async () => {
              try {
                const response = await fetch(`https://cloud-s5-metier-production.up.railway.app/annonce_valide`, {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${localStorage.getItem("tknidadmin")}`
                  },
                  body: JSON.stringify({ id_annonce: annonceId }),
                });
                
                if (response.ok) {
                  const data = await response.json();
                  if (data.status === 200) {
                    setIsValide(true)
                    }
                  } else {
                    }
                  } catch (error) {
                console.error('Erreur lors de la demande au serveur:', error);
              
              }

            }}>
              Je valide
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Annonce;
