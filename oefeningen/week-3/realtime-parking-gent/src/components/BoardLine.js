import React from 'react'

export default function BoardLine({ parking }) {
    return (
        <li className="availability-board-line">
            <div className="availability-board-line-left">
                <h3>{parking.name}</h3>
                <p style={{color: getColor(parking.availablecapacity), fontFamily: "VT323, monospace", fontSize: "2.2rem"}}>{returnAmound(parking.availablecapacity)}</p>
            </div>
        </li>
    )
}

function getColor(amound) {
    if (amound <= 50) {
        return `red`
    } else if (amound > 50 && amound < 100) {
        return `orange`
    } else {
        return `green`
    }
}

function returnAmound(amound) {
    if (amound > 1) return amound; else return 'Vol';
}
