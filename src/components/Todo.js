import React from 'react';

class Todo extends React.Component {
    constructor() {
        super()
    }

    render(){
        return(
            <div>
                {this.props.item.name}
            </div>
        )
    }
}

export default Todo;