import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

function Userdetails() {
    const history = useHistory();
    const [state, setState] =useState("");

    useEffect(() => {
        axios.get("https://ancient-bastion-78867.herokuapp.com/api/data").then(response =>{
            // console.log("===>",response["data"]);
            setState(response["data"]);
        })
    }, [])

    const logout = () => {
        localStorage.removeItem("token");
        history.push("/")
    }
    return (
        <>
            <h4 className="fw-bold bg-danger py-2">User Details</h4>
            <hr />
            <div className="form-group">
                <label className="text-dark fw-bold fs-5 text-uppercase">Welcome : {state.email}</label>
            </div>
            <hr />
            <div className="form-group pb-4 text-center">
                <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
        </>
    )
}

export default Userdetails
