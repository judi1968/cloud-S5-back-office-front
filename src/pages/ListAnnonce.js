import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Annonce from '../components/Annonce';
import AnnonceDetail from '../components/AnnonceDetail';
import './../assets/css/Home.css';
import './../assets/css/statTables.css';
import './../assets/css/ListAnnonce.css';
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';
const ListAnnonce = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleToggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  
  const handleDetailClick = (annonce) => {
    console.log(annonce.annonce.id);
    setSelectedAnnonce(annonce);
  };
  const handleFermerClick = () => {
    setSelectedAnnonce(null);
  };
  // Effet secondaire pour vérifier la présence du token
  useEffect(() => {
    if (localStorage.getItem('token')==null) {
      // Rediriger vers la page d'accueil si le token est présent
      navigate('/');
    }
  }, [navigate]);
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const [annoncesData,setAnnonceData] = useState([]);

  useEffect = () => {
    const fetchDataAnnonce = async (e) => {
      // e.preventDefault();
  
      try {
        const response = await fetch('https://cloud-s5-metier-production.up.railway.app/annonce_not_valides', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
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
    };
    fetchDataAnnonce();
  }


  const renderAnnonceList = (nombre) => {
    return annoncesData.map((annonce) => (
      <div key={annonce.annonce.annonceId} className={`mb-${nombre} col-md-${nombre} annonce-card`}>
       <Annonce
        annonceId={annonce.annonce.annonceId}
        dateDebut={annonce.annonce.dateDebut}
        couleur={annonce.catalogVoiture.couleur}
        consommation={annonce.catalogVoiture.consommation}
        categorieVoitureNom={annonce.catalogVoiture.categorieVoitureNom}
        categorieVoitureDescription={annonce.catalogVoiture.categorieVoitureDescription}
        marqueVoitureNom={annonce.catalogVoiture.marqueVoitureNom}
        marqueVoitureDescription={annonce.catalogVoiture.marqueVoitureDescription}
        marqueVoitureDateCreation={annonce.catalogVoiture.marqueVoitureDateCretion}
        typeCarburantNom={annonce.catalogVoiture.typeCarburantNom}
        transmissionVoitureNom={annonce.catalogVoiture.transmissionVoitureNom}
        freinageVoitureNom={annonce.catalogVoiture.freignageVoitureNom}
        prix={annonce.voiturePrix.prix}
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
