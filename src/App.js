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
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Connecte</button>
      </form>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue sur VaikaNet</h1>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
