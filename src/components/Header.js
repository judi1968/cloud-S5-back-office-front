import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS de Bootstrap dans votre projet
import { NavLink } from 'react-router-dom';
import "./../assets/css/Header.css"

const Header = () => {
  return (
    <header className="container mt-12" class="header">
        <div className="mt-12">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <NavLink className="nav-link" to="/home">Tableau statistique</NavLink>
            </li>
            <li class="nav-item">
                <NavLink className="nav-link" to="/list_annonce">Liste des annonces</NavLink>
            </li>
            <li class="nav-item">
                <NavLink className="nav-link" to="/element_necessaire">Les elements necessaires</NavLink>
            </li>
            <li class="nav-item">
                <NavLink className="nav-link" to="/">Deconnection</NavLink>
            </li>
        </ul>    
    </div>     
    </header>
  );
};

export default Header;
