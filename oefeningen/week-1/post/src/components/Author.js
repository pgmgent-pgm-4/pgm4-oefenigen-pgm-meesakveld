import React from 'react'

export default function Author({ authorName, authorPictureUrl }) {
    return (
        <div>
            <img src={authorPictureUrl} alt={authorName} />
            <p>{authorName}</p>
        </div>
    )
}
