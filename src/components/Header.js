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
                    <Userdetails />
                    <div className="col-md-10 text-center text-white mt-4 p-4 mx-auto tododetails">
                        <h3 className="mb-4 fw-bold">Add-Todo</h3>
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
