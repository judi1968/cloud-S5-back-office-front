import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS de Bootstrap dans votre projet
// import { NavLink } from 'react-router-dom';
import "./../assets/css/Header.css"

const Header = () => {
  return (
    <header className="container mt-12" class="header">
        <div className="mt-12">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <NavLink className="nav-link" to="/home">login</NavLink>
            </li>
            {/*<li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" tabindex="-1" aria-disabled="true"><NavLink to="/home">login</NavLink></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" tabindex="-1" aria-disabled="true"><NavLink to="/home">login</NavLink></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#"><NavLink to="/home">login</NavLink></a>
            </li> */}
        </ul>    
    </div>     
    </header>
  );
};

export default Header;
