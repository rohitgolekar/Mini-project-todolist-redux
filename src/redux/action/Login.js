import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function Login() {

    const history = useHistory();
    const [state, setState] = useState({
        email: "",
        password : "",
    })

    const handleChange = (e) =>{
        setState({...state, [e.target.name]:e.target.value});
    }

    const Login = () => {
        axios.post("https://ancient-bastion-78867.herokuapp.com/api/login", state).then(response => {
            // console.log(response);
            if (response["data"].login) {
                localStorage.setItem("token", "logedIn");
                history.push("/header");
            } else {
                alert("Wrong User name or password");
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
             <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-4 mx-auto bg-warning p-5 loginBox">
                    <h4 className="text-center p-2 bg-danger text-white">Sign Up</h4>
                        <div className="form-group my-3">
                            <input className="form-control" type="text"  name="email" onChange={handleChange} placeholder="Enter Username" />
                        </div>
                        <div className="form-group my-3">
                            <input className="form-control" type="password" name="password" onChange={handleChange} placeholder="Enter Password" />
                        </div>
                        <div className="form-group mt-3 text-center">
                            <button type="button" className="btn btn-danger" onClick={Login}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
