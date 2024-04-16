import React from 'react'

export default function Person({ firstname, familyname, pictureUrl, age, length, weigth }) {
    return (
        <div>
            <img src={ pictureUrl } alt={ firstname + " " + familyname } />
            <h1>{ firstname } { familyname }</h1>
            <p>Age: { age }</p>
            <p>Length: { length }</p>
            <p>Weigth: { weigth }</p>
            <p>BMI: { weigth / (length * length) }</p>
        </div>
    )
}
