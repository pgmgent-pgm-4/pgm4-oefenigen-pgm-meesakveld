import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data.posts)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map(post => (
                    <li key={`post-${post.id}`}>
                        <Link to={`/blog/${post.id}`}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
