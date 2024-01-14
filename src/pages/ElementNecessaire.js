import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import Header from '../components/Header';
import './../assets/css/ElementNecessaire.css'

const ElementNecessaire = () => {
  const [elements, setElements] = useState([
    { id: 1, nom: 'Element 1' },
    { id: 2, nom: 'Element 2' },
    // Ajoutez autant d'éléments que nécessaire
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [newElementName, setNewElementName] = useState('');
  const [selectedElement, setSelectedElement] = useState(null);

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleEditClick = (element) => {
    setSelectedElement(element);
    setShowEditModal(true);
  };

  const handleDeleteClick = (element) => {
    setSelectedElement(element);
    setShowDeleteModal(true);
  };

  const handleAddElement = () => {
    setElements([...elements, { id: elements.length + 1, nom: newElementName }]);
    setNewElementName('');
    setShowAddModal(false);
  };

  const handleEditElement = () => {
    setElements(elements.map((element) => (element.id === selectedElement.id ? { ...element, nom: newElementName } : element)));
    setNewElementName('');
    setShowEditModal(false);
  };

  const handleDeleteElement = () => {
    setElements(elements.filter((element) => element.id !== selectedElement.id));
    setShowDeleteModal(false);
  };

  const handleCloseModals = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setShowDeleteModal(false);
  };

  return (
    <div className="container">
    <header>
        <Header></Header>
    </header>
    <div className='element-necessaire'>
      <h1>Elements Necessaires</h1>
        <div className='row min-header'>
            <div className='col-6'>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Element</option>
                    <option value="1">Marque</option>
                    <option value="2">Caracteristique</option>
                    <option value="3">Carburant</option>
                </select>
            </div>
            <div className='col-6'>
                <Button className='button-animation button-animation-green' variant="primary" onClick={handleAddClick}>
                    Ajouter
                </Button>
            </div>
        </div>

      <ul className="list-group mt-3">
        {elements.map((element) => (
          <li key={element.id} className="list-group-item d-flex justify-content-between align-items-center">
            {element.nom}
            <div>
              <Button className='button-animation ' variant="info" onClick={() => handleEditClick(element)}>
                Modifier
              </Button>
                <div><br></br></div>
              <Button className='button-animation button-animation-red' variant="danger" onClick={() => handleDeleteClick(element)}>
                Supprimer
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal d'ajout */}
      <Modal show={showAddModal} onHide={handleCloseModals}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un élément nécessaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formElementName">
              <Form.Label>Nom de l'élément</Form.Label>
              <Form.Control type="text" placeholder="Entrez le nom" value={newElementName} onChange={(e) => setNewElementName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='button-animation button-animation-grey' variant="secondary" onClick={handleCloseModals}>
            Annuler
          </Button>
          <div><br></br></div>
          <Button className='button-animation button-animation-green' variant="primary" onClick={handleAddElement}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de modification */}
      <Modal show={showEditModal} onHide={handleCloseModals}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier l'élément nécessaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formElementName">
              <Form.Label>Nouveau nom de l'élément</Form.Label>
              <Form.Control type="text" placeholder="Entrez le nouveau nom" value={newElementName} onChange={(e) => setNewElementName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='button-animation button-animation-grey' variant="secondary" onClick={handleCloseModals}>
            Annuler
          </Button>
          <Button className='button-animation' variant="primary" onClick={handleEditElement}>
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de suppression */}
      <Modal show={showDeleteModal} onHide={handleCloseModals}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer l'élément nécessaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer l'élément "{selectedElement?.nom}" ?
        </Modal.Body>
        <Modal.Footer>
          <Button className='button-animation button-animation-grey' variant="secondary" onClick={handleCloseModals}>
            Non
          </Button>
          <Button className='button-animation button-animation-red' variant="danger" onClick={handleDeleteElement}>
            Oui
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
};

export default ElementNecessaire;
