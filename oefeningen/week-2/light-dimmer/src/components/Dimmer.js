import React, { useState } from 'react'

export default function Dimmer({ initialLight = 0 }) {
    const [light, setLight] = useState(initialLight);

    const handleClickAdd = () => {
        if (light === 100) {
            return;
        }
        setLight((prev) => prev + 10);
        document.body.style.backgroundColor = `#FFFF00${light}`
    }
    const handleClickLower = () => {
        if (light === 0) {
            return;
        }
        setLight((prev) => prev - 10);
        document.body.style.backgroundColor = `#FFFF00${light}`
    }

    return (
        <div>
            <button onClick={ handleClickAdd }>+</button>
            <button onClick={ handleClickLower }>-</button>
            {/* Slider wiht onChange */}
            <input type="range" min="0" max="100" value={ light } onChange={(e) => {
                setLight(e.target.value);
                document.body.style.backgroundColor = `#FFFF00${light}`
            }}/>
        </div>
    )
}
