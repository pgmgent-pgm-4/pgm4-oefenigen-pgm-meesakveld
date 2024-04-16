import React from 'react'
import Author from './Author'


export default function Post({ title, synopsis, story, authorName, authorPictureUrl, publishDate }) {
    return (
        <div>
            <h1>{ title }</h1>
            <p>{ synopsis }</p>
            <p>{ story }</p>
            <Author authorName={ authorName } authorPictureUrl={ authorPictureUrl } />            
            <p>{ publishDate }</p>
        </div>
    )
}
