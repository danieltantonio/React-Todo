import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const initToDoList = [
  {
    id: 1,
    name: 'Drink Coffee',
    complete: false
  },
  {
    id: 2,
    name: 'Make To-do list',
    complete: false
  },
  {
    id: 3,
    name: 'Practice guitar',
    complete: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: initToDoList
    }
  }

  addToList = value => {
    const newItem = {
      id: new Date(),
      name: value,
      complete: false
    }

    this.setState({
      list: [...this.state.list, newItem]
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addToList}/>
        <TodoList list={this.state.list}/>
      </div>
    );
  }
}

export default App;
