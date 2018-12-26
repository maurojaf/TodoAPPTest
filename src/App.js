import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItemHead from './components/TodoItemHead';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm addTodo={(todo) => console.log(todo)}/>
      </div>
    );
  }
}

export default App;
