import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Rocio', age: 21 },
      { id: '2', name: 'Felipe', age: 22 },
      { id: '3', name: 'Pilar', age: 19 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  
  /* switchNameHandler = ( newName ) => {
    this.setState( {
      persons: [
        { name: newName, age: 21 },
        { name: 'Felipe', age: 22 },
        { name: 'Pilar', age: 19 }
      ]
    } )
  } */
  
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const personToBeChanged = {
      ...this.state.persons[personIndex]
    }; // more modern JS

    // const person = Object.assign({}, this.state.persons[personIndex]);

    personToBeChanged.name = event.target.value;

    const newPersonsAfterChange = [...this.state.persons];
    newPersonsAfterChange[personIndex] = personToBeChanged;

    this.setState( { persons: newPersonsAfterChange } );
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // good practice to copy the array before modifying it
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }
  
  render () {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
          </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Rocio', age: 21 },
//       { name: 'Felipe', age: 22 },
//       { name: 'Pilar', age: 19 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('Was clicked!');
//     // DON'T DO THIS this.state.persons[0].name = 'Rochi';
//     setPersonsState( { // allows to update state property
//       persons: [
//         { name: 'Rochi', age: 21 },
//         { name: 'Felipe', age: 22 },
//         { name: 'Pilar', age: 30 }
//       ] 
//     }); 
//   };

//     return (
//       <div className="App">
//        <h1>Hi, I'm a React App</h1>
//        <p>This is really working!</p>
//        <button onClick={switchNameHandler}>Switch Name</button>
//        <Person 
//         name={personsState.persons[0].name} 
//         age={personsState.persons[0].age} 
//       />
//        <Person 
//        name={personsState.persons[1].name} 
//        age={personsState.persons[1].age} >My Hobbies: Racing
//        </Person>
//        <Person ç
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age}
//       />
//       </div>
//     );
// }

// export default app;


