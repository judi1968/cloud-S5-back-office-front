import React, { useState } from 'react';
import './App.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de gestion de connexion
    console.log(`Login submitted with username: ${username} and password: ${password}`);
  };

  return (
    <div className="login-container">
      <img src='%PUBLIC_URL%/../assets/images/logo/logo_trial rgba(a0).png'></img>
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Nom:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <center>
        <button>Connecte</button>
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
