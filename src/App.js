import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <Person name="Rocio" age="21" />
       <Person name="Felipe" age="22"> My Hobbies: Racing</Person>
       <Person name="Pilar" age="19"  />

      </div>
    );
  }
}

export default App;
