import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            inputText: ''
        }
    }

    inputChange = e => {
        const { value } = e.target;
        this.setState({
            inputText: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.inputText);
        this.setState({
            inputText: ''
        })
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>New Item</label>
                <input type='text' name='item' value={this.state.inputText} onChange={this.inputChange} />
                <button>Add to list</button>
            </form>
        )
    }
}

export default TodoForm;