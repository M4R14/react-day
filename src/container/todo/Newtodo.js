import React, { Component } from 'react';

class Newtodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo:''
    }
    this.addClicked = this.addClicked.bind(this)
  }

  addClicked(){
    let {onAddTodo} = this.props;
    onAddTodo(this.state.newTodo)
    this.setState({
      newTodo:''
    })
  }

  render() {
    let {newTodo} = this.state;
    return (
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input  className="input" 
                  type="text" 
                  placeholder="New Todo"
                  value={newTodo}
                  onChange={(e)=>this.setState({newTodo: e.target.value})} 
                  />
        </p>
        <p className="control">
          <a className="button is-info" onClick={this.addClicked}>
            ADD
          </a>
        </p>
      </div>
    );
  }
}

export default Newtodo;
