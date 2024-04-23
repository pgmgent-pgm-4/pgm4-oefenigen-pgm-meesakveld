import React from 'react'
import '../css/Beer.css'

export default function Beer({ beer }) {
    return (
        <article className='beerCard'>
            <h3>{beer.title} - {beer.alchool}</h3>
            <p>{beer.description}</p>
        </article>
    )
}
