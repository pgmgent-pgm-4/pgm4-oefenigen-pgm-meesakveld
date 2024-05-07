import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'


import { UserContext } from "../context/UserContext";
import { useContext } from 'react'
import Footer from '../components/Footer';

import { useRedirectIfNoAuth } from '../hooks/useRedirectIfNoAuth';

export default function Root() {

    useRedirectIfNoAuth();
    const { user } = useContext(UserContext);

    return (
        <>
            {
                user ? <Navigation /> : ''
            }
            <main>
                <Outlet />
            </main>
            {
                user ? <Footer /> : ''
            }
        </>
    )
}