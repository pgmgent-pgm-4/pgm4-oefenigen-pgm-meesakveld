import React from 'react'
import '../styles/Header.css';
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes/routes';

export default function Header() {
    return (
        <header>
            <h1>Students Portal</h1>
            <ul>
                <li><NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink></li>
            </ul>
        </header>
    )
}
