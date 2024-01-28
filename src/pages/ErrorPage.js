// ErrorPage.js
import React from 'react';
import './../assets/css/ErrorPage.css'; // Importez le fichier CSS pour le style

const ErrorPage = ({ errorStatus, errorMessage, errorTitle }) => {
  return (
    <div className="container-error">
      <h1>Error {errorStatus}</h1>
      <p>{errorTitle}</p>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
