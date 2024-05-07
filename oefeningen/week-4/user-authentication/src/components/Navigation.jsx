import React from 'react'
import '../styles/nav.css';
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes/routes';

export default function Navigation() {
    return (
        <>
            <header>
                <h1>User authentication</h1>
                <ul>
                    <li><NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink></li>
                    <li><NavLink to={ROUTES.profile.path}>{ROUTES.profile.title}</NavLink></li>
                </ul>
            </header>
            <hr />
        </>
    )
}