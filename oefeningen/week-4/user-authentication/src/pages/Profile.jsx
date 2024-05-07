import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

export default function Profile() {

    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Profile</h1>
            <h2>{user && user.name}</h2>
            <a href={`mailto${user && user.email}`}>{user && user.email}</a>
        </div>
    )
}
