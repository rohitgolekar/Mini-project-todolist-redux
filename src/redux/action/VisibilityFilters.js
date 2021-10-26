import React, { useState } from 'react';
import "../../App.css";
import { connect } from 'react-redux'
import { getAddTodo, getRemoveTodo, getCompleteTodo } from "../reducer/reducer";
import TodoList from './TodoList';

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(getAddTodo(obj)),
        removeTodo: (id) => dispatch(getRemoveTodo(id)),
        completeTodo: (id) => dispatch(getCompleteTodo(id)),
    }
}
function VisibilityFilters(props) {

    const [sort, setSort] = useState("incomplete")
    return (
        <>
            <div className="row my-3">
                <div className="col-md-10 text-center mx-auto">
                    <button className="mx-2 btn btnfilter" onClick={() => setSort("incomplete")}>Incompleted</button>
                    <button className="mx-2 btn btnfilter" onClick={() => setSort("completed")}>Completed</button>
                    <button className="mx-2 btn btnfilter" onClick={() => setSort("all")}>All</button>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-md-10 text-center mx-auto">

                    <ul>
                        {
                            props.todos.reducer.length > 0 && sort === "incomplete" ? props.todos.reducer.map((item) => {
                                return (
                                    item.completed === false &&
                                    <TodoList
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        completeTodo={props.completeTodo} />
                                )
                            }
                            ) : null}

                        {/* For completed todos */}

                        {
                            props.todos.reducer.length > 0 && sort === "completed" ? props.todos.reducer.map((item) => {
                                return (
                                    item.completed === true &&
                                    <TodoList
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        completeTodo={props.completeTodo} />
                                )
                            }
                            ) : null}

                        {/* For All todos */}

                        {
                            props.todos.reducer.length > 0 && sort === "all" ? props.todos.reducer.map((item) => {
                                return (
                                    <TodoList
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        completeTodo={props.completeTodo} />
                                )
                            }
                            ) : null}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters)
