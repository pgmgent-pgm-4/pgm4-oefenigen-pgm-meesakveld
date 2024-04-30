import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from '../components/Header'

export default function Root() {
    return (
        <>
            <Header />
            <hr />
            
            <main>
                <Outlet />
            </main>

        </>
    )
}
