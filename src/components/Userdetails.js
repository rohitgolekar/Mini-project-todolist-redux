import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Userdetails() {
    const history = useHistory();
    const [state, setState] = useState("");

    useEffect(() => {
        axios.get("https://ancient-bastion-78867.herokuapp.com/api/data").then(response => {
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
            <div className="col-md-12 form-group userDetails">
                {/* <div className=""> */}
                    <label className="text-uppercase text-left">Welcome : {state.email}</label>
                    <span>TODO-APPLICATION</span>
                    <button onClick={logout}>Logout</button>
                {/* </div> */}
            </div>
        </>
    )
}

export default Userdetails
