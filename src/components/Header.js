import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS de Bootstrap dans votre projet
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container mt-12">
        <div className="mt-12">
            <NavLink to="/login">login</NavLink>
            <NavLink to="/home">login</NavLink>

        </div>
    </header>
  );
};

export default Header;
