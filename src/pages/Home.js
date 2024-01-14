import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS de Bootstrap dans votre projet
// import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import './../assets/css/Home.css'
import './../assets/css/statTables.css'

const Home = () => {
  return (
    <div className="container mt-12 grid-container">
      <header>
        <Header></Header>
      </header>

      {/* Ajoutez ici le reste de votre contenu */}
      <main className="mt-12">
        <div class="row">
          <div class="col-md-6">
            <div className="container mt-12 table-container">
              <div className="row">
                <div className='mt-6'>
                <h1>Liste 5 des marques plus populaire un achat</h1>
                <table class="table table-hover">
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Personne inscri</th>
                      <td>50</td>
                    </tr>
                    <tr>
                      <th scope="row">Voiture vendu</th>
                      <td>30</td>
                    </tr>
                    <tr>
                      <th scope="row">Annonce en attente</th>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">Annonce valider</th>
                      <td>50</td>
                    </tr>
                    <tr>
                      <th scope="row">Tout les annonces</th>
                      <td>60</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="col-md-6">
            <div className="container mt-12 table-container">
              <div className="row">
                <div className='mt-6'>
                <h1>Statistique generale</h1>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Marque</th>
                      <th scope="col">Nombre vendu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Audi</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Mercedes</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Renault</td>
                      <td>6</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
