import React from 'react'
import { useRouteError, Link } from 'react-router-dom'


export default function Error() {
    const error = useRouteError()

    return (
        <>
            <div>
                <h1>Oops! Something went wrong!</h1>
                <h2>{error.status}: {error.statusText}</h2>
                <p>{error.data}</p>
            </div>
            <div>
                <p>Return to <Link to="/">Homepage</Link></p>
            </div>
        </>
    )
}