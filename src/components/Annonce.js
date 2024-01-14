import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Annonce.css';

const Annonce = ({ titre, description, date, vendeur, marqueVoiture, type, prix, commissionPropose, onDetailClick }) => {
  return (
    <div className="animated-annonce-card">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{titre}</h5>
          <p className="card-text">{description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Date:</strong> {date}</li>
            <li className="list-group-item"><strong>Vendeur:</strong> {vendeur}</li>
            <li className="list-group-item"><strong>Marque de la voiture:</strong> {marqueVoiture}</li>
            <li className="list-group-item"><strong>Type:</strong> {type}</li>
            <li className="list-group-item"><strong>Prix:</strong> ${prix}</li>
            <li className="list-group-item"><strong>Commission proposée:</strong> ${commissionPropose}</li>
          </ul>
          <button className="btn btn-primary mt-3" onClick={onDetailClick}>
            Voir le détail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Annonce;
