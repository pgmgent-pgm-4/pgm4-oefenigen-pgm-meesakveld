import React, { useEffect, useState } from 'react'
import { API_KEY } from '../consts.js'
import Beer from './Beer.jsx'
import SelectCountry from './SelectCountry.jsx'

export default function Beers() {

    const [country, setCountry] = useState('italy')
    const [beers, setBeers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const countries = [
        {
            value: 'italy',
            name: 'Italy'
        },
        {
            value: 'denmark',
            name: 'Denmark'
        },
        {
            value: 'sweden',
            name: 'Sweden'
        },
        {
            value: 'belgium',
            name: 'Belgium'
        },
        {
            value: 'spain',
            name: 'Spain'
        },
        {
            value: 'portugal',
            name: 'Portugal'
        },
        {
            value: 'ireland',
            name: 'Ireland'
        },
        {
            value: 'luxembourg',
            name: 'Luxembourg'
        },
        {
            value: 'norway',
            name: 'Norway'
        },
        {
            value: 'finland',
            name: 'Finland'
        },
        {
            value: 'switzerland',
            name: 'Switzerland'
        },
        {
            value: 'czech',
            name: 'Czech'
        },
        {
            value: 'poland',
            name: 'Poland'
        },
        {
            value: 'malta',
            name: 'Malta'
        }
    ]

    // On change of coutnry, fetch beers
    useEffect(() => {
        setIsLoading(true)
        setBeers([])

        const url = 'https://beers-list.p.rapidapi.com/beers/' + country;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'beers-list.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => { 
                setBeers(data) 
                // console.log(data)
                setIsLoading(false)
            })
            .catch(error => console.error(error));

    }, [country])

    return (
        <>
            <SelectCountry countries={countries} setCountry={setCountry} country={country} />
            { isLoading && <p>Loading...</p>}
            <div>
                { beers.map((beer, index) => <Beer key={`beer-${index}`} beer={beer} />) }
            </div>
        </>
    )
}
