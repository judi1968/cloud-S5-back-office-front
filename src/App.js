import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <div className='container mt-10'>
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
