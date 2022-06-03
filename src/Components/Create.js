import React, { useState } from 'react' 
import { Button, Form, FormSelect } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './Array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
  
function Create() {
  
  /*Définition de usestate pour la définition et récupération d’une valeur dans jsx*/
    const [name, setname] = useState('');
    const [speciality, setspeciality] = useState('');
    const [level, setlevel] = useState('');
    const [matricule, setmatricule] = useState('');
  
    // Utilisation de useNavigation pour rediriger vers d'autres pages
    let history = useNavigate();

    // Fonction de création d’une publication/entrée
    const handelSubmit = (e) =>{
        e.preventDefault();  
  
        const ids = uuid() // Création d’un identifiant unique
        let uni = ids.slice(0,8) // Découpage de l’identifiant unique
  
        let a = name, b=speciality, c=level, d=matricule
        array.push({id:uni,Name:a,Speciality:b,Level:c,Matricule:d})
  
       // Redirection vers la page d’accueil une fois la création terminée
       history('/')
         
    }
  
  return (
    <div >
        <Form className="d-grid gap-2" style={{margin:'10rem'}}>
        <h1>Ajout d'un nouveau étudiant</h1>
  {/*Extraction d’une valeur à partir de textfirld d’entrée dans un setname à l’aide de usestate */}
   <Form.Group className="mb-3" controlId="formBasicName">
   <Form.Control onChange={e => setname(e.target.value)} 
                 type="text"
                 placeholder="Entrer votre nom & prénom" required/> 
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicSpeciality">
   <FormSelect onChange={e => setspeciality(e.target.value)} type="text" required>
   <option disabled>Sélectionner votre filière</option>
   <option value="GL">Génie Logiciel</option>
   <option value="ASR">Sécurité et Réseau</option>
   <option value="GRT">Réseau et Télécommunication</option>
    </FormSelect>
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicLevel">
   <FormSelect onChange={e => setlevel(e.target.value)} type="text" required>
   <option disabled>Sélectionner votre niveau</option>
   <option value="L1">Niveau 1</option>
   <option value="L2">Niveau 2</option>
   <option value="L3">Niveau 3</option>
   <option value="M1">Niveau 4</option>
   <option value="M2">Niveau 5</option>
    </FormSelect>
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicMatricule">
   <Form.Control onChange={e => setmatricule(e.target.value)} 
                 type="text"
                 placeholder="Enter votre matricule" required/> 
 </Form.Group>
 
 <Button onClick={e => handelSubmit(e)}  variant="primary" type="submit"> Ajouter</Button>
 <Button variant="success" type="reset">Recommencer</Button>
 <Link className="d-grid gap-2" to='/'>
 <Button variant="dark" size="lg"> Accueil</Button>
</Link>

</Form>
 </div>
)
}

export default Create;