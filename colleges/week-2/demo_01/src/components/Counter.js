import React, { useState } from 'react'

export default function Counter({ initialCount = 0 }) {
    const [count, setCount] = useState(initialCount);

    const handleReset = () => {
        setCount(initialCount);
    }
    const handleClickAdd = () => {
        setCount((prev) => prev + 1);
    }
    const handleClickSubtract = () => {
        setCount((prev) => prev - 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={ handleReset }>reset</button>
            <button onClick={ handleClickAdd }>+1</button>
            <button onClick={ handleClickSubtract }>-1</button>
        </div>
    )
}
