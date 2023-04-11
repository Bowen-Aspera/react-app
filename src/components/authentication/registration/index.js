import { useState } from "react";
import axios from "axios";



function Register(){
    const [data, setData] = useState({
        'username': '',
        'password': '',
        'email': '',
    })

    const [errorPassword, setErrorPassword] = useState('')

    return(
        <>
            <div style={main}>
                <h1>This is Registration Form</h1>
                <p>{errorPassword}</p>
                <input placeholder="Username" onChange={(event) =>{
                    let d =data;
                    setData({...d, username: event.target.value});
                }}/>
                <input placeholder="Email" onChange={(event) => {
                    let d =data;
                    setData({...d, email: event.target.value});

                }}/>
                <input placeholder="Password" type="password" onChange={(event) =>{
                    let d =data;
                    setData({...d, password: event.target.value});

                }}/>
                <button onClick={()=> {
                    axios.post('http://localhost:8000/api/v1/accounts/users/', data).then(response=>{
                        console.log(response.data)
                        alert("Successfully Registered!")
                    }).catch(error=>{
                        const  errorMessage = error.response.data;
                        setErrorPassword(errorMessage.password);
                    })
                }}>Register</button>

            </div>
        </>
    )
}

export default Register;


const main={
    textAlign:'center',
}