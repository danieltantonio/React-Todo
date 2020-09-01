// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';

const StyledToDoList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

class TodoList extends React.Component {
    constructor() {
        super()
    }

    render(){
        return(
            <StyledToDoList>
                {
                    this.props.list.map(item => {
                        return(
                            <Todo key={item.id} item={item} toggleItem={this.props.toggleItem}/>
                        )
                    })
                }
            </StyledToDoList>
        )
    }
}

export default TodoList;