import React from 'react';
import "../App.css"
import AddTodo from '../redux/action/Addtodo';
import VisibilityFilters from '../redux/action/VisibilityFilters';
import Userdetails from './Userdetails';

function Header() {

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <h2 className="text-center fw-bold text-white mb-4">TODO-APPLICATION</h2>
                    <div className="col-md-7 text-center bg-warning text-white p-4 mx-auto userDetails mb-3">
                        <Userdetails />
                    </div>
                    <div className="col-md-7 text-center text-white p-4 mx-auto tododetails">
                        <h3 className="mb-4 fw-bold">Todo-Operation</h3>
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <AddTodo />
                                <VisibilityFilters />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
