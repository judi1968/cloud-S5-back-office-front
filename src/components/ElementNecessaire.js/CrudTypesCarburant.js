import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import './../../assets/css/ElementNecessaire.css'

const CrudTypesCarburant = () => {

  const [elements, setElements] = useState({data:[]});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cloud-s5-metier-production.up.railway.app/types-carburant', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.object);
            setElements(data);
          }
        
      } catch (error) {
        console.error('Erreur lors de la demande au serveur:', error);
      }
    };
  
    fetchData();
  
  }, []);


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
    <div>

    <div className='col-6'>
      <Button className='button-animation button-animation-green' variant="primary" onClick={handleAddClick}>
        Ajouter
      </Button>
    </div>

    <ul className="list-group mt-3">
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className='w-75'>
          <h3>Nom</h3>
        </div>
        <div className='w-25'>
          <h3> </h3>
        </div>
      </li>
      {elements && elements.object?.map((element) => (
        <li key={element.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div className='w-75'>
            {element.nom}
          </div>
          <div className='w-25'>
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
  );
};
export default CrudTypesCarburant;
