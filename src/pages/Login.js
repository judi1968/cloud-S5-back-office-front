import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../assets/css/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Exemple de logique de connexion
    // Pour l'instant, nous supposons que la connexion réussit si le nom n'est pas vide
    if (name.trim() !== '') {
      setLoginStatus('success');
      navigate('/home'); // Redirection vers "/home"
    } else {
      setLoginStatus('failure');
    }
  };

  
  return(

    <div className="App">
    <header className="App-header">
      <center>
      <div className={`login-container ${loginStatus === 'success' ? 'success' : loginStatus === 'failure' ? 'failure' : ''}`}>
      <img src="%PUBLIC_URL%/../assets/images/logo/logo_trial rgba(a0).png" alt="logo du VaikaNet" />
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Nom d'admin: 
          <input
            name='name'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </label>
        <label>
          Mot de passe:
          <input
            name='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </label>
        <center>
          <button type="submit">{loginStatus === 'success' ? 'Connexion réussie' : loginStatus === 'failure' ? 'Connexion échouée' : 'Connecter'}</button>
        </center>
      </form>
    </div>
      </center>
    </header>
  </div>

);
};
export default Login;
