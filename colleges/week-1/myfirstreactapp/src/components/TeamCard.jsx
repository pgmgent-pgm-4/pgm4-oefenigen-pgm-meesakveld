import React from 'react'

export default function TeamCard({ name }) {
    return (
        <div>
            <h1>TeamCard</h1>
            {name && <p>{name}</p>}
        </div>
    )
}