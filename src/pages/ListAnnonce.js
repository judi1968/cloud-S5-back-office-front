import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Annonce from '../components/Annonce';
import AnnonceDetail from '../components/AnnonceDetail';
import './../assets/css/Home.css';
import './../assets/css/statTables.css';
import './../assets/css/ListAnnonce.css';
import { useEffect } from 'react';
const ListAnnonce = () => {

  
  const handleDetailClick = (annonce) => {
    console.log(annonce.annonce.id);
    setSelectedAnnonce(annonce);
  };
  const handleFermerClick = () => {
    setSelectedAnnonce(null);
  };

  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const [annoncesData,setAnnonceData] = useState([]);
  const [dataIsFetched,setDataIsFethed] = useState(false)
  const [urlAnnonce,setUrlAnnonce] = useState('annonce_not_valides')


    const fetchDataAnnonce = async () => {
      if (!dataIsFetched) {
        console.log("yes");
  
        try {
          const response = await fetch(`https://cloud-s5-metier-production.up.railway.app/${urlAnnonce}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization':`Bearer ${localStorage.getItem("tknidadmin")}`
            },
          });
          
          if (response.ok) {
            const data = await response.json();
            if (data.status === 200) {
              setAnnonceData(data.annoces)
            }
          } else {
            
          }
        } catch (error) {
          console.error('Erreur lors de la demande au serveur:', error);
          
        }
      }
      setDataIsFethed(true)
      }
      useEffect (() => {
      fetchDataAnnonce();
    });

    const handleValiderClick = () => {
      setUrlAnnonce('annonce_valides');
      setDataIsFethed(false); 
    };

    const handlePasValiderClick = () => {
      setUrlAnnonce('annonce_not_valides');
      setDataIsFethed(false); 
    };
    
    
    const renderAnnonceList = (nombre) => {
      return annoncesData.map((annonce) => (
        <div key={annonce.annonce.annonceId} className={`mb-${nombre} col-md-${nombre} annonce-card`}>
       <Annonce
        annonceId={annonce.annonce.annonceId}
        dateDebut={annonce.annonce.dateDebut}
        consommation={annonce.catalogVoiture.consommation}
        categorieVoitureNom={annonce.catalogVoiture.categorieVoitureNom}
        marqueVoitureNom={annonce.catalogVoiture.marqueVoitureNom}
        typeCarburantNom={annonce.catalogVoiture.typeCarburantNom}
        transmissionVoitureNom={annonce.catalogVoiture.transmissionVoitureNom}
        freinageVoitureNom={annonce.catalogVoiture.freignageVoitureNom}
        prix={annonce.voiturePrix.prix}
        commission={annonce.annonce.commission}
        nomAuteur={annonce.personneClient.nom}
        prenomAuteur={annonce.personneClient.prenom}
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
            <button  class="btn-action-list btn btn-primary" onClick={handlePasValiderClick}>En attente de validation</button>
            <button  class="btn-action-list btn btn-primary" onClick={handleValiderClick}>Deja valider </button>
            <button  class="btn-action-list btn btn-primary" onClick={handleValiderClick}>Vendu </button>
          </div>
          <br></br>
          <div className='row'>
            {selectedAnnonce ? (
              // Si une annonce est sélectionnée, afficher les détails de l'annonce à droite
              <>
                <div className="col-md-8">
                  <AnnonceDetail annonce={selectedAnnonce} onFermerClick={handleFermerClick} />
                </div>
                <div className="col-md-4 mb-4 list-drop-down">
                  {renderAnnonceList(12)}
                </div>
              </>
            ) : (
              // Si aucune annonce n'est sélectionnée, afficher simplement la liste des annonces
              <div className="row d-flex flex-wrap col-12 ">
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
