import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../assets/css/Login.css';
import { accountService } from '../_services/account.service';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('vaikanet@admin.mg');
  const [password, setPassword] = useState('vaikanet');
  const [loginStatus, setLoginStatus] = useState(null);
  const [loginMessage, setLoginMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Mettre à jour l'état pour indiquer que l'authentification est en cours
    setLoading(true);

    try {
      const response = await fetch('https://cloud-s5-metier-production.up.railway.app/authentificationAdmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email":name, password }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.status === 200) {
          setLoginStatus('success');
          setLoginMessage(data.titre);
          accountService.saveToken(data.token);
          localStorage.setItem("tknidadmin",data.tknidadmin);
          navigate('/home'); // Redirection vers "/home"
        } else {
          setLoginStatus('failure');
          setLoginMessage(data.titre);
        }
      } else {
        setLoginStatus('failure');
        setLoginMessage('Une erreur s\'est produite lors de la connexion.');
      }
    } catch (error) {
      console.error('Erreur lors de la demande au serveur:', error);
      setLoginStatus('failure');
      setLoginMessage('Une erreur s\'est produite lors de la connexion.');
    } finally {
      // Rétablir l'état initial, indiquer que l'authentification n'est plus en cours
      setLoading(false);
    }
  };

  return (
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
                {/* Utiliser la variable d'état 'loading' pour déterminer l'état du bouton */}
                <button type="submit" disabled={loading}>
                  {loading ? 'Authentification en cours...' : loginStatus === 'success' ? 'Connexion réussie' : loginStatus === 'failure' ? 'Connexion échouée' : 'Connecter'}
                </button>
                {loginStatus === 'failure' && <p style={{ color: 'red' }}>{loginMessage}</p>}
              </center>
            </form>
          </div>
        </center>
      </header>
    </div>
  );
};

export default Login;
