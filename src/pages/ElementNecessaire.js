import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import './../assets/css/ElementNecessaire.css'
import { useNavigate } from "react-router-dom"
import CrudCategorie from '../components/ElementNecessaire.js/CrudCategorie';
import CrudEquipementsInternes from '../components/ElementNecessaire.js/CrudEquipementsInternes';
import CrudFreinage from '../components/ElementNecessaire.js/CrudFreinage';
import CrudMarques from '../components/ElementNecessaire.js/CrudMarques';
import CrudTransmissions from '../components/ElementNecessaire.js/CrudTransmissions';
import CrudTypesCarburant from '../components/ElementNecessaire.js/CrudTypesCarburant';


const ElementNecessaire = () => {
  const navigate = useNavigate();

  // Effet secondaire pour vérifier la présence du token
  useEffect(() => {
    if (localStorage.getItem('token')==null) {
      // Rediriger vers la page d'accueil si le token est présent
      navigate('/');
    }
  }, [navigate]);
  const [elementNecessaire, setElementNecessaire] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cloud-s5-metier-production.up.railway.app/element_necessaire', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const data = await response.json();
  
          if (data.status === 200) {
            setElementNecessaire(data);
          }
        }
        
      } catch (error) {
        console.error('Erreur lors de la demande au serveur:', error);
      }
    };
  
    fetchData();
  
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("categories");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div className="container">
    <header>
        <Header></Header>
    </header>
    <div className='element-necessaire'>
      <h1>Elements Necessaires</h1>
        <div className='row min-header'>
            <div className='col-6'>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleCategoryChange}>
                {elementNecessaire && elementNecessaire.data?.map((element) => (
                  <option value={element} key={element}>{element}</option>
                ))}
                </select>
            </div>
        </div>
         {/* Affichage du composant correspondant */}
         {selectedCategory === "categories" && <CrudCategorie />}
        {selectedCategory === "marques" && <CrudMarques />}
        {selectedCategory === "types-carburant" && <CrudTypesCarburant />}
        {selectedCategory === "transmissions" && <CrudTransmissions />}
        {selectedCategory === "freinages" && <CrudFreinage />}
        {selectedCategory === "equipements-internes" && <CrudEquipementsInternes />}
      </div>
    </div>
  );
};

export default ElementNecessaire;
