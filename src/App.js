import React from 'react';
import styled from 'styled-components';

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

const StyledApp = styled.div`
  .itemtrue {
    background: lightgreen;
    text-decoration: line-through;
  }
`;

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

  toggleComplete = (id) => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        } else {
          return item
        }
      })
    })
  };

  removeComplete = (id) => {
    this.setState({
      list: this.state.list.filter(item => !item.complete)
    })
  }

  render() {
    return (
      <StyledApp>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addToList} rmItem={this.removeComplete} list={this.state.list}/>
        <TodoList list={this.state.list} toggleItem={this.toggleComplete} />
      </StyledApp>
    );
  }
}

export default App;
