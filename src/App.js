import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Rocio', age: 21 },
      { name: 'Felipe', age: 22 },
      { name: 'Pilar', age: 19 }
    ],
    otherState: 'some other value'
  }
  
  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: 'Rocio', age: 21 },
        { name: 'Felipe', age: 22 },
        { name: 'Pilar', age: 19 }
      ]
    } )
  }
  
  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Rocio', age: 21 },
        { name: event.target.value, age: 22 },
        { name: 'Pilar', age: 19 }
      ]
    } )
  }
  
  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Rocioo!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Rocio!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
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


