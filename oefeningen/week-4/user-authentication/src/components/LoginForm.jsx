import React, { useState, useContext } from 'react'
import users from '../data/users.json'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        switch (e.target.id) {
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            setUser(user);
            navigate('/')
        } else {
            console.log("Invalid credentials");
            setError("Invalid credentials");
        }
    }

    return (
        <div>
            <form onChange={handleChange} onSubmit={handleLogIn}>
                <input type="email" name="Email" id="email" placeholder='email' />
                <input type="password" name="Password" id="password" placeholder='password' />
                <button type="submit">Login</button>
            </form>
            {error ?? <p>{error}</p>}
        </div>
    )
}
