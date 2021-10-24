import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { logout, selectUser } from "../redux/reducer/loginreducer"

function Userdetails() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }
    return (
        <>
            <h4 className="fw-bold bg-danger py-2">User Details</h4>
            <hr />
            <div className="form-group">
                <label className="text-dark fw-bold fs-5">Name : {user.name}</label>
            </div>
            <div className="form-group">
                <label className="text-dark fw-bold fs-5">Email : {user.email}</label>
            </div>
            <hr />
            <div className="form-group pb-4 text-center">
                <button className="btn btn-danger" onClick={(e) => handleLogout(e)}>Logout</button>
            </div>
        </>
    )
}

export default Userdetails
