import React from 'react'
import { Outlet } from 'react-router-dom'


export default function NotAuth() {
    return (
        <div>
            <Outlet />
        </div>
    )
}
