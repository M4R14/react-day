import React, {Component} from 'react';
import Newtodo from './Newtodo';
import TodoList from './TodoList';
import axios from "axios";

class Todo extends Component {
    constructor(props){
        super(props)
        // console.log(props.url);
        
        this.state = {
            // todoItems: [
            //     {id:0, text:'sleep at ....', done:false },
            //     {id:1, text:'read React text.', done:true }, 
            //     {id:2, text:'constructor(props)', done:false }, 
            //     {id:3, text:'play Dot A.', done:true }, 
            // ]
            todoItems: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.delTodo = this.delTodo.bind(this);
        this.isDone = this.isDone.bind(this);
        // this.componentWillMount = this.componentWillMount.bind(this)
    }

    componentWillMount(){
        let state = this

        fetch("http://localhost:3001/")
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
            state.setState({
                todoItems: data
            });
        })
    }

    addTodo(newTodo){
        console.log('insert Todo')
        var data_todo = {
            id: Math.floor((Math.random() * 10000) + 1),
            text: newTodo,
            done:false
        }

        axios.post('http://localhost:3001/insert-todo', data_todo)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        // Send a POST request
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3001/insert-todo',
        //     data: data_todo
        // });
        
        this.setState({
            todoItems: this.state.todoItems.concat(data_todo)
        });
    }

    delTodo(todoItem){
        console.log('Del Todo')
        
        var arr = this.state.todoItems;
        var index = arr.indexOf(todoItem);
        if (index >= 0) {
            arr.splice( index, 1 );
        }
        this.setState({
            todoItems: arr
        })
    }

    isDone(data){
        console.log('Update Todo')

        var arr = this.state.todoItems;
        var index = arr.indexOf(data);
        arr[index]['done'] = !data.done
        this.setState({
            todoItems: arr
        })
    }

    render(){
        let {todoItems} = this.state;

        return(
            <div>
                <div className="column is-half is-offset-one-quarter">
                    <Newtodo onAddTodo={this.addTodo}/>
                </div>
                <div className="column is-half is-offset-one-quarter">
                    <TodoList items={todoItems} isDone={this.isDone} onDelTodo={this.delTodo}/>
                </div>
            </div>
        );
    }
}

export default Todo;