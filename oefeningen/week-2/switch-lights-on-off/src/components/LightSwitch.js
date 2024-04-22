import React, { useState } from 'react'

export default function LightSwitch({ initialBoolean = false }) {
    const [boolean, setBoolean] = useState(initialBoolean);

    const handleClick = () => {
        setBoolean((prev) => !prev);
        if (boolean) {
            document.body.style.backgroundColor = 'red'
        } else {
            document.body.style.backgroundColor = 'green'
        }
    }

    return (
        <div>
            <button onClick={ handleClick }>toggle</button>
            <p>{boolean ? 'true' : 'false'}</p>
        </div>
    )
}
