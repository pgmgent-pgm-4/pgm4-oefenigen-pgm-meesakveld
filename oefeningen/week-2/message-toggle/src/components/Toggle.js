import React, { useState } from 'react'

export default function Toggle({ initialBoolean = false }) {
    const [boolean, setBoolean] = useState(initialBoolean);

    return (
        <div>
            <button onClick={ () => setBoolean((prev) => !prev) }>toggle</button>
            <p>{ boolean ? 'true' : 'false' }</p>
        </div>
    )
}
