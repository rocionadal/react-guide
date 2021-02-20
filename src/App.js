import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Rocio', age: 21 },
      { name: 'Felipe', age: 22 },
      { name: 'Pilar', age: 19 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS this.state.persons[0].name = 'Rochi';
    setPersonsState( { // allows to update state property
      persons: [
        { name: 'Rochi', age: 21 },
        { name: 'Felipe', age: 22 },
        { name: 'Pilar', age: 30 }
      ] 
    }); 
  };

    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button onClick={switchNameHandler}>Switch Name</button>
       <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} 
      />
       <Person 
       name={personsState.persons[1].name} 
       age={personsState.persons[1].age}
       click={switchNameHandler} >My Hobbies: Racing
       </Person>
       <Person
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}
      />
      </div>
    );
}

export default app;


