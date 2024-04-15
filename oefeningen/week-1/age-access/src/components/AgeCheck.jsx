import React from 'react'

export default function AgeCheck({ age }) {
    return (
        <div>
            {parseInt(age) >= 18 ? 
                <>
                    <p>Je leeftijd is: {age}</p>
                    <span>Je bent oud genoeg om de inhoud van deze website te bekijken.</span>
                    <hr/>
                </>
            : 
                <>
                    <p>Je leeftijd is: {age}</p>
                    <span>Sorry, je moet 18 jaar of ouder zijn om de inhoud van deze website te bekijken.</span>
                    <hr/>
                </>
            }
        </div>
    )
}
