import React, { useState, useContext } from 'react'
import users from '../data/users.json'
import { UserContext } from '../context/UserContext'

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user, setUser } = useContext(UserContext);

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
            console.log("Logged in");
            console.log('user', user)
        } else {
            console.log("Invalid credentials");
        }
    }

    return (
        <div>
            <form onChange={handleChange} onSubmit={handleLogIn}>
                <input type="email" name="Email" id="email" placeholder='email' />
                <input type="password" name="Password" id="password" placeholder='password' />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
