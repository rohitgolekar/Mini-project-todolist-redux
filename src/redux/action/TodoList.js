import React from 'react';
import "../../App.css"

function TodoList(props) {
    const { item, completeTodo, removeTodo } = props;

    return (
        <li className="list-group-item mt-3" key={item.id}>
            {
                item.completed === false ? <h1>{item.item}</h1> : <h1 className="delete">{item.item}</h1>
            }
            {
                item.completed === false &&
                <i className="fas fa-check-double bg-success text-white" onClick={() => completeTodo(item.id)}></i>
            }

            <i className="fas fa-times bg-danger text-white" onClick={() => removeTodo(item.id)}></i>

            {item.completed && <i className="fas fa-thumbs-up text-white bg-warning"></i>}
        </li>
    )
}

export default TodoList
