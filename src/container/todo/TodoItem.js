import React, {Component } from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            done: false
        }
        this.toggle = this.toggle.bind(this)
        this.delClicked = this.delClicked.bind(this)
    }

    toggle(){
        let {data, isDone} = this.props;
        isDone(data)
        this.setState({
            done: !this.state.done
        })
    }

    delClicked(){
        let {onCilckDel, data} = this.props;
        onCilckDel(data)
    }


    render(){
        let {text} = this.props
        return (
            <div className="field">
                <p className="control">
                    <label className="checkbox" >
                        <input className="checkbox" 
                            type="checkbox" 
                            checked={this.state.done}
                            onClick={this.toggle} 
                            />
                        {this.state.done ? <del> {text} </del> : text }
                    </label>
                    <a onClick={this.delClicked} >ลบ</a>
                </p>
            </div>
        );
    }
}

export default TodoItem;