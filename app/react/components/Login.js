import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import useApiCall from '../utils/useApiCall';

async function loginApiCall(apiUrl, requestOptions){
    const response = await fetch(apiUrl, requestOptions);
    if(response.status !== 200){
      alert("Email or password invalid!");
    }
    alert("Logged in sucessfully!");
    return response;
}

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    async function login_user(e){
        e.preventDefault();
        let apiUrl = 'http://localhost:3000/login';
        let data = {
            account:
            {
                email: loginEmail,
                password: loginPassword
                }
            }

        const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        };
        const response = await loginApiCall(apiUrl, requestOptions);
        if(response.status == 200){
          isLoggedIn = true;
          navigate("/")
        }
    }
    return(
        <>
        <form>
          <input onChange={(e)=> setLoginEmail(e.target.value)} type='email' placeholder='Enter email' required></input>
          <input onChange={(e)=> setLoginPassword(e.target.value)} type='password' placeholder='Password' required></input>
          <button onClick={(e)=>login_user(e)}>Login</button>
          <Link to='/signup'>or Signup</Link>
        </form>
        </>
    );
}

export default Login;