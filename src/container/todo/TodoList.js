import React , {Component} from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
    render(){
        let {items} = this.props;
        return (
            <div>
                <ul>
                    {
                        items.map(
                            (todo) => 
                                <TodoItem key={todo.id} 
                                    text={todo.text}
                                    data={todo}
                                    isDone={this.props.isDone}
                                    onCilckDel={this.props.onDelTodo}
                        />)
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;