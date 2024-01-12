import React from 'react';
import { Route, Routes, BrowserRouter as Router, NavLink } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <div className='container mt-10'>
        <header className="ml-24 shadow-md">
          <nav className='flex justify-center'>
          {window.location.pathname !== '/login' && (
          <nav>
            <NavLink to="/login">login</NavLink>
            <NavLink to="/home">Accueil</NavLink>
          </nav>
        )}
          </nav>
        </header>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path='/novalide' element={<MouvementsNonValides />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
