import React, { useEffect, useState } from 'react'
import { Button, Form, FormSelect } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './Array';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
  
  
function Edit() {
  
  /*Définition de usestate pour la définition et récupération d’une valeur dans jsx*/
  const [name, setname] = useState('');
    const [speciality, setspeciality] = useState('');
    const [level, setlevel] = useState('');
    const [matricule, setmatricule] = useState('');
    const[id,setid] = useState('');
  
    // Utilisation de useNavigation pour rediriger vers d'autres pages
    let history = useNavigate()
       // Obtention d’un index d’une entrée avec un ID
    var index = array.map(function(e) { return e.id; }).indexOf(id);
  
    /* Fonction de gestion de l’édition et pousser les changements d’édition / mise à jour */
    const handelSubmit = (e) =>{
        e.preventDefault(); // Empêcher le rechargement
          
        let a = array[index] // Obtention d’un index d’un tableau
  
        /*Plaçer la valeur du champ de texte d’entrée et le remplacer de l’existant pour la mise à jour */
        a.Name = name
        a.Speciality = speciality
        a.Level = level
        a.Matricule = matricule
  
        // redirection vers la page d'accueil 
        history('/')
    }
     // Useeffect veillez à ce que la page ne soit rendue qu’une seule fois
     useEffect(() => {
        setname(localStorage.getItem('Name'))
        setspeciality(localStorage.getItem('Speciality'))
        setlevel(localStorage.getItem('Level'))
        setmatricule(localStorage.getItem('Matricule'))
        setid(localStorage.getItem('id'))
    }, [])
      
  return (
    <div>
        <Form className="d-grid gap-2" style={{margin:'10rem'}}>
        <h1>Modification des données de {name}</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={name} 
                              onChange={e => setname(e.target.value)}  
                              type="text" placeholder="Entrer votre nom" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSpeciality">
                <FormSelect value={speciality} onChange={e => setspeciality(e.target.value)} type="text" required>
                <option disabled>Sélectionner votre filière</option>
                <option value="GL">Génie Logiciel</option>
                <option value="ASR">Sécurité et Réseau</option>
                <option value="GRT">Réseau et Télécommunication</option>
                    </FormSelect>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLevel">
                <FormSelect value={level} onChange={e => setlevel(e.target.value)} type="text" required>
                <option disabled>Sélectionner votre niveau</option>
                <option value="L1">Niveau 1</option>
                <option value="L2">Niveau 2</option>
                <option value="L3">Niveau 3</option>
                <option value="M1">Niveau 4</option>
                <option value="M2">Niveau 5</option>
                    </FormSelect>
            </Form.Group>
            <Form.Group  className="mb-3" controlId="formBasicMatricule">
                <Form.Control value={matricule} onChange={e => setmatricule(e.target.value)} 
                                type="text"
                                placeholder="Enter votre matricule" required/> 
            </Form.Group>

            <Button
            onClick={e => handelSubmit(e)}
            variant="primary" type="submit" size="lg">
                Modifier
            </Button>
  
            {/* Redirection vers la page d'accueil après modification */}
            <Link className="d-grid gap-2" to='/'>
              <Button variant="dark" size="lg">Retour</Button>
            </Link>
        </Form>
    </div>
  )
}
  
export default Edit;