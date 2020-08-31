import React from 'react';
import styled from 'styled-components';
import './Todo.css';

const StyledItem = styled.div`
  background: red;
  cursor: pointer;
`;

class Todo extends React.Component {
    constructor() {
        super()
    }

    render(){
        return(
            <StyledItem className={`item${this.props.item.complete}`} onClick={() => this.props.toggleItem(this.props.item.id)}>
                {this.props.item.name}
            </StyledItem>
        )
    }
}

export default Todo;