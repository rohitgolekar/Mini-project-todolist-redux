import React, { useState } from 'react';
import "../../App.css"
import { connect } from 'react-redux'; 
import { getAddTodo } from "../reducer/reducer";

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(getAddTodo(obj)),
    }
}

function AddTodo(props) {
    const [Todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const add = () => {
        if(Todo !== "") {

            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: Todo,
                completed: false
            })
            setTodo("");
        } else {
            alert("Please Add Todo");
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-10 mx-auto text-center">
                    <div className="form-group">
                        <input type="text" onChange={(e) => handleChange(e)} value={Todo} className="form-control" placeholder="Enter Todo" />
                    </div>

                    <div className="form-group my-3 addtodo">
                    <i className="fas fa-plus-circle bg-success p-2" onClick={() => add()}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
