import React from 'react'
import Tag from './Tag'

export default function Movie({ title, synopsis, tags, thumbnailUrl }) {
    return (
        <>
            <div>
                <h1>{title}</h1>
                <img src={thumbnailUrl} alt={title} />
                <p>{synopsis}</p>
                <br />
                <h2>Tags:</h2>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <Tag tag={tag} />
                        </li>
                    ))}
                </ul>
            </div>
            <hr/>
        </>
    )
}
