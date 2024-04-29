import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function BlogPost() {

    const { postId } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => {
                setPost(data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [postId])

    return (
        <>
            <Link to='/blog'>- Back to blog</Link>
            {post && (
                <>
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <p>userId: {post.userId}</p>
                    </div>
                </>
            )}
        </>
    )

}
