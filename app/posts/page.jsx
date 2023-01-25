import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

import { notFound } from 'next/navigation'
import PostTitleLink from '@/components/PostTitleLink'

const PostsPage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    // if(posts.length > 0){
    //     // throw new Error('vow we have some Post ....')
    //     notFound()

    // }

    return (
        // <div>
        //     <h2 className={styles.bgred}>PostsPage</h2>
        //     {posts.map((post) => {
        //         return (
        //             <div key={post.id}>
        //                 <Link href={`/posts/${post.id}`}>{post.id} {post.title}</Link>
        //             </div>
        //         )
        //     })}
        //     {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        // </div>

        //////////////////////
        <div>
            <h2 className={styles.bgred}>PostsPage</h2>
            {posts.map((post) => {
                return (
                    <PostTitleLink post={post} key={post.id} />
                )
            })}
            {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        </div>


    )
}

export default PostsPage