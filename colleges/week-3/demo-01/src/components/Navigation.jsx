import React from 'react'
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes/routes';

export default function Navigation() {
    return (
        <header>
            <h1>React Router</h1>
            <ul>
                <li><NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink></li>
                <li><NavLink to={ROUTES.about.path}>{ROUTES.about.title}</NavLink></li>
                <li><NavLink to={ROUTES.contact.path}>{ROUTES.contact.title}</NavLink></li>
                <li><NavLink to={ROUTES.blog.path}>{ROUTES.blog.title}</NavLink></li>
            </ul>
        </header>
    )
}
