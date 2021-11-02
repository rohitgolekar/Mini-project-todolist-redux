import React from 'react';
import "../../App.css"

function TodoList(props) {
    const { item, completeTodo, removeTodo } = props;
    return (
        <>
        <div className="col-md-3 d-inline-block mx-4">
            <li className="list-group-item mt-3" key={item.id}>
                {
                    item.completed === false ? <h2>{item.item}</h2> : <h2 className="delete">{item.item}</h2>
                }
                {
                    item.completed === false &&
                    <i className="fas fa-check-double bg-success" onClick={() => completeTodo(item.id)}></i>
                }

                <i className="fas fa-times bg-danger" onClick={() => removeTodo(item.id)}></i>

                {item.completed && <i className="fas fa-thumbs-up bg-warning"></i>}
            </li>
        </div>
        </>

    )
}

export default TodoList
