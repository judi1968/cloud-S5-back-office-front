// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
// import { Bar } from 'react-chartjs-2';
import './../assets/css/Home.css';
import './../assets/css/statTables.css';
import BarChartAnnonce from '../components/Statisitque/BarChartAnnonce';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [dataAnnonceIsFetched,setDataAnnonceIsFethed] = useState(false)
  const [dataVenteIsFetched,setDataVenteIsFethed] = useState(false)
  const [dataUsersIsFetched,setDataUsersIsFethed] = useState(false)

  
  // Effet secondaire pour vérifier la présence du token
  useEffect(() => {
    if (localStorage.getItem('tknidadmin')==null) {
      // Rediriger vers la page d'accueil si le token est présent
      navigate('/');
    }
  }, [navigate]);
  const [annonceData, setAnnonceData] = useState({ data: [] });
  

  const fetchDataAnnonce = async () => {
    if (!dataAnnonceIsFetched) {
      
      try {
        const response = await fetch(`https://cloud-s5-metier-production.up.railway.app/state-annonce/${anneAnnonce}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tknidadmin")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 200) {
          setAnnonceData(data.annoces);
        }else{
          navigate('/error', {
            state: {
              errorStatus: response.status,
              errorMessage: response.message,
              errorTitle: response.title,
            },
          });
          
        }
      }
      
    } catch (error) {
      console.error('Erreur lors de la demande au serveur:', error);
      navigate('/error', {
        state: {
          errorStatus: 404,
          errorMessage: error,
          errorTitle: `Erreur lors de la demande au serveur`,
        },
      });
    }
    setDataAnnonceIsFethed(true)
  }
  };
  useEffect(() => {
      fetchDataAnnonce();
  });


  const [venteData, setVenteData] = useState({ data: [] });
  

  const fetchventeAnnonce = async () => {
    if (!dataVenteIsFetched) {
      
      try {
        const response = await fetch(`https://cloud-s5-metier-production.up.railway.app/state-vente/${anneVente}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tknidadmin")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 200) {
          setVenteData(data.annoces);
        }else{
          navigate('/error', {
            state: {
              errorStatus: response.status,
              errorMessage: response.message,
              errorTitle: response.title,
            },
          });
          
        }
      }
      
    } catch (error) {
      console.error('Erreur lors de la demande au serveur:', error);
      navigate('/error', {
        state: {
          errorStatus: 404,
          errorMessage: error,
          errorTitle: `Erreur lors de la demande au serveur`,
        },
      });
    }
    setDataVenteIsFethed(true)
  }
  };
  useEffect(() => {
      fetchventeAnnonce();
  });



  const [usersData, setUsersData] = useState({ data: [] });
  

  const fetchDataUsers = async () => {
    if (!dataUsersIsFetched) {
      
      try {
        const response = await fetch(`https://cloud-s5-metier-production.up.railway.app/state-utilisateur/${anneUsers}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tknidadmin")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 200) {
          setUsersData(data.annoces);
        }else{
          navigate('/error', {
            state: {
              errorStatus: response.status,
              errorMessage: response.message,
              errorTitle: response.title,
            },
          });
          
        }
      }
      
    } catch (error) {
      console.error('Erreur lors de la demande au serveur:', error);
      navigate('/error', {
        state: {
          errorStatus: 404,
          errorMessage: error,
          errorTitle: `Erreur lors de la demande au serveur`,
        },
      });
    }
    setDataUsersIsFethed(true)
  }
  };
  useEffect(() => {
      fetchDataUsers();
  });

  const [anneAnnonce,setAnneAnnoce] = useState(2024);
  const [anneVente,setAnneVente] = useState(2024);
  const [anneUsers,setAnneUsers] = useState(2024);


  const handleChangeAnnee = (e) => {
    // Assurez-vous que la valeur de l'année est supérieure à 2000
    const nouvelleAnnee = e.target.value;
    if (nouvelleAnnee >= 2000) {
      setAnneAnnoce(nouvelleAnnee);
      setDataAnnonceIsFethed(false)
      fetchDataAnnonce()
    }
  };
  const handleChangeVente = (e) => {
    // Assurez-vous que la valeur de l'année est supérieure à 2000
    const nouvelleAnnee = e.target.value;
    if (nouvelleAnnee >= 2000) {
      setAnneVente(nouvelleAnnee);
      setDataVenteIsFethed(false)
      fetchventeAnnonce()
    }
  };
  const handleChangeUsers = (e) => {
    // Assurez-vous que la valeur de l'année est supérieure à 2000
    const nouvelleAnnee = e.target.value;
    if (nouvelleAnnee >= 2000) {
      setAnneUsers(nouvelleAnnee);
      setDataUsersIsFethed(false)
      fetchDataUsers()
    }
  };
  return (
    <div className="container mt-12 grid-container">
      <header>
        <Header></Header>
      </header>

      <main className="mt-12">
        <div className="row">
          <div className="col-md-12">
          <div  className="container mt-12 table-container">
            <div className='row'>
              <div className='col-md-6'>
                <h1>Les annonces valides en {anneAnnonce}</h1>
              </div>
              <div className='col-md-3'>
              </div>
              <div className='col-md-3'>
                <input placeholder='Entrer une annee' onChange={handleChangeAnnee}></input>
              </div>
            </div>
            <BarChartAnnonce data={annonceData} />
          </div>
          </div>
          <div className="col-md-12">
            <div className="container mt-12 table-container">
            <div className='row'>
              <div className='col-md-6'>
                <h1>Voitures vendu en {anneVente}</h1>
              </div>
              <div className='col-md-3'>
              </div>
              <div className='col-md-3'>
                <input placeholder='Entrer un annee' onChange={handleChangeVente}></input>
              </div>
            </div>
              <BarChartAnnonce data={venteData} />

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="container mt-12 table-container">
            <div className='row'>
              <div className='col-md-6'>
                <h1>Les utilisateurs inscri en {anneUsers}</h1>
              </div>
              <div className='col-md-3'>
              </div>
              <div className='col-md-3'>
                <input placeholder='Entrer un annee' onChange={handleChangeUsers}></input>
              </div>
            </div>
              <BarChartAnnonce data={usersData} />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
