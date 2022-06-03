import React, { Component }  from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      title: 'CRUD EN REACT JS',
      act: 0,
      index: '',
      datas: []
    }
  }

  componentDidMount(){
    this.refs.name.focus();
  }

  fsubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let matricule = this.refs.matricule.value;

    let data = {
      name, matricule
    }

    data.push(data);

    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
    //this.refs.matricule.focus();
  }


  render() {
   let datas = this.state.datas;
  return (
    <div className="App">
     <h1>{this.state.title}</h1>
     <form ref='myForm' className='myForm'>
       <input type="text" ref='name' placeholder='Votre nom et prénom' className='formField' />
       <input type="text" ref='matricule' placeholder='Votre adresse' className='formField' />
       <button onClick={this.fsubmit} className='myButton'>Envoyer</button>
     </form>
     <pre>
       {datas.map((data, i) =>

        <li key={i} className='myList'>
         {i+1}. {data.name}, {data.matricule}
         <button className='myButton'>Modifier</button>
         <button  className='myButton'>Supprimer</button>

        </li>
        )}
     </pre>
    </div>
  );
}
}

export default App;
