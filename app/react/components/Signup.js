import { useState } from 'react';
import { Link } from 'react-router-dom';

async function apiCall(apiUrl, requestOptions){
    const response = await fetch(apiUrl, requestOptions)
    const data = await response.json();
    return data;
}

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signup_data(e){
        e.preventDefault()
        if(firstName.length !== 0 && lastName.length !== 0 && email.length !== 0 && password.length !== 0){
            let apiUrl = 'http://localhost:3000/signup';
            let data = {
                account:
                {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password
                    }
                }

            const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            };
            const ans = await apiCall(apiUrl, requestOptions).then((data)=> data);
            alert(ans.status.message)
            }
        }
    return (
    <div class="m-6">
        <form onSubmit={(e)=> signup_data(e) }>
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500" for="username" required>First Name</label>
            <input class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-30 focus:outline-none focus:border-green-600 focus:ring-green-600 block rounded-md sm:text-sm focus:ring-1" type="text" placeholder='First Name' id="first-name" name="username" onChange={(e)=> setFirstName(e.target.value)}required></input><br/><br/>
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500" for="lastname">Last Name</label>
            <input class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-30 focus:outline-none focus:border-green-600 focus:ring-green-600 block rounded-md sm:text-sm focus:ring-1" type="text" placeholder='Last Name' id="last-name" onChange={(e)=> setLastName(e.target.value)} required></input><br/><br/>
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500" for="email">Email</label>
            <input class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-30 focus:outline-none focus:border-green-600 focus:ring-green-600 block rounded-md sm:text-sm focus:ring-1" type="email" placeholder='you@example.com' id='email' onChange={(e)=> setEmail(e.target.value)} required></input><br/><br/>
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500" for="password">Password</label>
            <input class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-30 focus:outline-none focus:border-green-600 focus:ring-green-600 block rounded-md sm:text-sm focus:ring-1"type="password" placeholder='Password' id='password' onChange={(e)=> setPassword(e.target.value)} required></input><br/><br/>
            <button class="bg-green-600 rounded-full p-2">Sign-up</button>
            <Link to='/login'> or Login</Link>
        </form>
    </div>
    );
}

export default Signup;