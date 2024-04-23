import React from 'react'

export default function SelectCountry({ countries, setCountry, country }) {
    const handleChange = (ev) => {
        setCountry(ev.target.value)
    }
    
    return (
        <div>
            <select value={country} onChange={handleChange}>
                {countries.map(country => {
                    return <option key={country.value} value={country.value}>{country.name}</option>
                })}
            </select>
        </div>
    )
}
