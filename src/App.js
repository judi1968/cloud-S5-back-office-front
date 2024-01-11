import React, { useState } from 'react';
import './App.css';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:2024/log_admin_traitement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name,password: password }),
      });

      if (response.ok) {
        console.log('Connexion réussie!');
        setLoginStatus('success');
        // Ajoutez ici la logique après une connexion réussie
      } else {
        console.error('Échec de la connexion. Vérifiez vos informations.');
        setLoginStatus('failure');
        // Ajoutez ici la logique après une connexion échouée
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setLoginStatus('failure');
    }
  };

  return (
    <div className={`login-container ${loginStatus === 'success' ? 'success' : loginStatus === 'failure' ? 'failure' : ''}`}>
      <img src="%PUBLIC_URL%/../assets/images/logo/logo_trial rgba(a0).png" alt="logo du VaikaNet" />
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Nom:
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
          <button type="submit" >{loginStatus === 'success' ? 'Connexion réussie' : loginStatus === 'failure' ? 'Connexion échouée' : 'Connecter'}</button>
        </center>
      </form>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <LoginForm />
        </center>
      </header>
    </div>
  );
}

export default App;
