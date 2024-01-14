import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ListAnnonce from './pages/ListAnnonce';
import ElementNecessaire from './pages/ElementNecessaire';

function App() {

  return (
    <Router>
      <div className='container mt-10'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/list_annonce' element={<ListAnnonce />} />
          <Route path='/element_necessaire' element={<ElementNecessaire />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
