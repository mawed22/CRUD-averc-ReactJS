import React from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import array from './Array'; 
import { Link, useNavigate } from 'react-router-dom';
  
function Home() {
  
  let history = useNavigate()
  
  /*Cette partie peut etre ignorée si vous utilisatez l’api react-context ou redux*/
  function setID(id,name,speciality,level,matricule){
    localStorage.setItem('id', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Speciality', speciality);
    localStorage.setItem('Level', level);
    localStorage.setItem('Matricule', matricule);
  }
  
  //Fonction supprimée - fonctionnalité pour supprimer l’entrée
  function deleted(id){
      
    var index = array.map(function(e) { return e.id; }).indexOf(id);
  
    // suppression de l’entrée avec index
    array.splice(index,1)
  
    /* Rafraichissement de la page pour obtenir les résultats redirigent donc vers la même page */
    history('/')
  }
  
  return (
    <div  style={{margin:'10rem'}}>
    <h1>Liste des étudiants</h1>
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Nom & Prénom</th>
      <th>Spécialité</th>
      <th>Niveau</th>
      <th>Matricule</th>
      <th colSpan='2'>Actions</th>
    </tr>
  </thead>
  <tbody>
  {/* Mappage de chaque élément du tableau et afficher les données sous forme de tableau */}
{array.map((item) => {
return(
<tr>
  <td>{item.Name}</td>
  <td>{item.Speciality}</td>
  <td>{item.Level}</td>
  <td>{item.Matricule}</td>
    
  <td><Link to={`/edit`}><Button onClick={(e) =>
  setID(item.id,item.Name,item.Speciality,item.Level,item.Matricule)} variant="info">
    Modifier</Button></Link></td>
  <td><Button onClick={e => deleted(item.id)} 
  variant="danger">Supprimer</Button></td>
</tr>
)})}

</tbody>
</Table>
  
<Link className="d-grid gap-2" to='/create'>
  <Button variant="dark" size="lg">Ajouter</Button>
</Link>
    </div>
  )
}
  
export default Home;