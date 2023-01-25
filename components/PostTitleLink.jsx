import React from 'react'
import Link from 'next/link'

export default function PostTitleLink({post}) {
    return (
        <div key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.id} {post.title}</Link>
        </div>
    )
}
