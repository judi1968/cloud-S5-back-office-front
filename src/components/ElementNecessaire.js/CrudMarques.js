import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import './../../assets/css/ElementNecessaire.css'

const CrudMarques = () => {

  const [elements, setElements] = useState({data:[]});

  const fetchData = async () => {
    try {
      const response = await fetch('https://cloud-s5-metier-production.up.railway.app/marques', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("tknidadmin")}`

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
  useEffect(() => {
  
    fetchData();
  
  }, []);

  
// Gérer l'ajout d'une nouvelle catégorie
const handleAddElement = async () => {
  try {
    const response = await fetch('https://cloud-s5-metier-production.up.railway.app/marque', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("tknidadmin")}`
      },
      body: JSON.stringify({
        nom: newElementName,
        description:newElementDescription,
        dateCreation:newElementDate
      }),
    });

    if (response.ok) {
      fetchData();        
      setShowAddModal(false);
    }else{
      
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la catégorie:', error);

  }
};

// Gérer la modification d'une catégorie
const handleEditElement = async () => {
  try {
    const response = await fetch(`https://cloud-s5-metier-production.up.railway.app/marque/${selectedElement.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("tknidadmin")}`
      },
      body: JSON.stringify({
        nom: newElementName,
        description:newElementDescription,
        dateCreation:newElementDate
      }),
    });

    if (response.ok) {
      fetchData();        
      setNewElementName('');
      setSelectedElement(null);
      setShowEditModal(false);
    }else{
      
    }
  } catch (error) {
    console.error('Erreur lors de la modification de la catégorie:', error);

  }
};

const handleDeleteElement = async () => {
  try {
    const response = await fetch(`https://cloud-s5-metier-production.up.railway.app/marque/${selectedElement.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("tknidadmin")}`
      },
    });

    if (response.ok) {
      fetchData();        
      setShowDeleteModal(false);
    }else{
      
    }
  } catch (error) {
    console.error('Erreur lors de la suppression de la catégorie:', error);

  }
};


  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [newElementName, setNewElementName] = useState('');
  const [selectedElement, setSelectedElement] = useState(null);

  const [newElementDescription, setNewElementDescription] = useState('');

  const [newElementDate, setNewElementDate] = useState('');

  const handleAddClick = () => {
    setShowAddModal(true);
    
  };

  const handleEditClick = (element) => {
    setSelectedElement(element);
    setNewElementName(element.nom);
    setNewElementDescription(element.description);
    setNewElementDate(element.dateCreation);
    setShowEditModal(true);
  };

  const handleDeleteClick = (element) => {
    setSelectedElement(element);
    setShowDeleteModal(true);
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
        <div className='w-25'>
          <h3>Nom</h3>
        </div>
        <div className='w-25'>
          <h3>Description</h3>
        </div>
        <div className='w-25'>
          <h3>Date de creation</h3>
        </div>
        <div className='w-25'>
          <h3> </h3>
        </div>
      </li>
      {elements && elements.object?.map((element) => (
        <li key={element.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div className='w-25'>
            {element.nom}
          </div>
          <div className='w-25'>
            {element.description}
          </div>
          <div className='w-25'>
            {element.dateCreation}
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
              <Form.Control type="text" placeholder="Entrez le nom"  onChange={(e) => setNewElementName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formElementDescription">
              <Form.Label>Description de l'élément</Form.Label>
              <Form.Control type="text" placeholder="Entrez le nom" onChange={(e) => setNewElementDescription(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formElementDate">
              <Form.Label>Date de l'élément</Form.Label>
              <Form.Control type="date" placeholder="Entrez le nom" onChange={(e) => setNewElementDate(e.target.value)} />
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
            <Form.Group controlId="formElementName">
              <Form.Label>Nom de l'élément</Form.Label>
              <Form.Control type="text" placeholder="Entrez le nom" value={newElementDescription}  onChange={(e) => setNewElementDescription(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formElementName">
              <Form.Label>Description de l'élément</Form.Label>
              <Form.Control type="date" placeholder="Entrez le description" value={newElementDate} onChange={(e) => setNewElementDate(e.target.value)} />
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
export default CrudMarques;
