const Annonce = ({
  annonceId,
  dateDebut,
  couleur,
  consommation,
  categorieVoitureNom,
  categorieVoitureDescription,
  marqueVoitureNom,
  marqueVoitureDescription,
  marqueVoitureDateCreation,
  typeCarburantNom,
  transmissionVoitureNom,
  freinageVoitureNom,
  prix,
  onDetailClick
}) => {
  return (
    <div className="animated-annonce-card">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{marqueVoitureNom}</h5>
          <p className="card-text">{dateDebut}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Couleur :</strong> {couleur}</li>
            <li className="list-group-item"><strong>Consommation :</strong> {consommation}</li>
            <li className="list-group-item"><strong>Marque de la voiture :</strong> {marqueVoitureNom}</li>
            <li className="list-group-item"><strong>Description de la voiture :</strong> {marqueVoitureDescription}</li>
            <li className="list-group-item"><strong>Date de création de la marque :</strong> {marqueVoitureDateCreation}</li>
            <li className="list-group-item"><strong>Type de carburant :</strong> {typeCarburantNom}</li>
            <li className="list-group-item"><strong>Transmission :</strong> {transmissionVoitureNom}</li>
            <li className="list-group-item"><strong>Freinage :</strong> {freinageVoitureNom}</li>
            <li className="list-group-item"><strong>Prix :</strong> ${prix}</li>
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
