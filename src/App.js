import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './Counter/Counter'
import './App.css';
import { render } from '@testing-library/react';



class App extends Component{
   render(){
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
   }
}

export default App;
