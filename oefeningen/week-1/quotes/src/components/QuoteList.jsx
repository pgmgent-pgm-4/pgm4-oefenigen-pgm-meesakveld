import React from 'react'

export default function QuoteList({ quotes }) {
    return (
        <div>
            <ul>
                {quotes.map((quote, index) => (
                    <li key={index}>{quote}</li>
                ))}
            </ul>
        </div>
    )
}
