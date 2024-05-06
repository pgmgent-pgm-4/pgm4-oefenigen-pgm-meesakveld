import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function Root() {
    return (
        <>
            <Navigation />
            <hr />
            <main>
                <Outlet />
            </main>
            <footer>
                <hr />
                Dit is de footer
            </footer>
        </>
    )
}