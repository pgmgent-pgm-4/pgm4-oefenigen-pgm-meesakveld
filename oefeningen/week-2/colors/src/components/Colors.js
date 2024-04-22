import React, { useState } from 'react'

export default function Colors({ colorsArr }) {
    const [colors, setColors] = useState(colorsArr);

    const handleClickAddRandomColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        setColors((prev) => [...prev, randomColor]);
    }
    const handleClickRemoveColor = ({ index }) => {
        setColors((prev) => prev.filter((color, i) => i !== index));
    }

    return (
        <div>
            <button onClick={ handleClickAddRandomColor }>Add random color</button>
            {colors.map((color, index) => (
                <div key={ index } style={{ backgroundColor: `#${color}` }}>
                    <p>{ color }</p>
                    <button onClick={() => handleClickRemoveColor({ index })}>Remove</button>
                </div>
            ))}       
        </div>
    )
}
