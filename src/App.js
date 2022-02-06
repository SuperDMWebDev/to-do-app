import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
//mock data
import data from './data.json';

//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './TodoForm';
function App() {
  

  return (
    <div className="App">
      <Header/>
      <ToDoList />
    </div>
  );
}


export default App;
