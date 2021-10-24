import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {login} from "../reducer/loginreducer"
import "../../App.css"

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if(name !== "" && email !== "" && password !== "") {
            dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        }))
        } else {
            alert("Please Fill all the fields");
        }

    }
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-4 mx-auto bg-warning p-5 loginBox">
                        <h4 className="text-center p-2 bg-danger text-white">Sign Up</h4>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group my-3">
                                <input className="form-control" type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group my-3">
                                <input className="form-control" type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group my-3">
                                <input className="form-control" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-group mt-3 text-center">
                                <button type="submit" className="btn btn-danger">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
