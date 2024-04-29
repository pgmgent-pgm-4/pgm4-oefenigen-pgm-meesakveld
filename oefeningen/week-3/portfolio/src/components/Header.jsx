import React from 'react'
import '../styles/Header.css';
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes/routes';

export default function Navigation() {
    return (
        <header>
            <h1>React Router</h1>
            <ul>
                <li><NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink></li>
                <li><NavLink to={ROUTES.about.path}>{ROUTES.about.title}</NavLink></li>
                <li><NavLink to={ROUTES.projects.path}>{ROUTES.projects.title}</NavLink></li>
                <li><NavLink to={ROUTES.contact.path}>{ROUTES.contact.title}</NavLink></li>
                <li><NavLink to={ROUTES.resume.path}>{ROUTES.resume.title}</NavLink></li>
            </ul>
        </header>
    )
}