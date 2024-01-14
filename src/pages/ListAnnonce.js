import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Annonce from '../components/Annonce';
import AnnonceDetail from '../components/AnnonceDetail';
import './../assets/css/Home.css';
import './../assets/css/statTables.css';
import './../assets/css/ListAnnonce.css';

const ListAnnonce = () => {
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const annoncesData = [
    {
      id: 1,
      date: '2024-03-15',
      vendeur: 'John Doe',
      marqueVoiture: 'Audi',
      type: 'SUV',
      prix: 35000,
      commissionPropose: 2000,
      description: 'Audi SUV en excellent état à vendre.',
      
    },
    {
      id: 2,
      date: '2024-03-16',
      vendeur: 'Jane Smith',
      marqueVoiture: 'Mercedes',
      type: 'Berline',
      prix: 28000,
      commissionPropose: 1500,
      description: 'Mercedes Berline, faible kilométrage, à vendre.'
    },
    {
      id: 3,
      date: '2024-03-17',
      vendeur: 'Bob Johnson',
      marqueVoiture: 'Toyota',
      type: 'Compacte',
      prix: 18000,
      commissionPropose: 1000,
      description: 'Toyota Compacte en bon état, à vendre à un bon prix.'
    },
    // Ajoutez autant d'annonces que nécessaire
  ];

  const handleDetailClick = (annonce) => {
    setSelectedAnnonce(annonce);
  };
  const handleFermerClick = () => {
    setSelectedAnnonce(null);
  };
  const renderAnnonceList = (nombre) => {
    return annoncesData.map((annonce) => (
      <div key={annonce.id} className={`mb-${nombre} col-md-${nombre}`}>
        <Annonce
          titre={`Annonce ${annonce.id}`}
          description={annonce.description}
          date={annonce.date}
          vendeur={annonce.vendeur}
          marqueVoiture={annonce.marqueVoiture}
          type={annonce.type}
          prix={annonce.prix}
          commissionPropose={annonce.commissionPropose}
          onDetailClick={() => handleDetailClick(annonce)}
        />
      </div>
    ));
  };
  

  return (
    <div className="container mt-12 grid-container">
      <header>
        <Header />
      </header>

      <main className="mt-12">
        <div className="container mt-12 table-container">
          <h1>Liste des annonces de vente de voitures</h1>
          <div class="row">
            <button  class="btn-action-list btn btn-primary">En attente de validation</button>
            <button  class="btn-action-list btn btn-primary">Deja valider validation</button>
            <button  class="btn-action-list btn btn-primary">Tout les annonces</button>
          </div>
          <br></br>
          <div className='row'>
            {selectedAnnonce ? (
              // Si une annonce est sélectionnée, afficher les détails de l'annonce à droite
              <>
                <div className="col-md-8">
                  <AnnonceDetail annonce={selectedAnnonce} onFermerClick={handleFermerClick} />
                </div>
                <div className="col-md-4 mb-4">
                  {renderAnnonceList(12)}
                </div>
              </>
            ) : (
              // Si aucune annonce n'est sélectionnée, afficher simplement la liste des annonces
              <div className="row d-flex flex-wrap col-12">
                {renderAnnonceList(4)}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListAnnonce;
