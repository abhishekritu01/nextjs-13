import React from 'react'
import { resolve } from 'styled-jsx/css'

// export const dynamic = 'force-dynamic'

async function wait(timeInMs){
    return new Promise((resolve,_) =>{
        setTimeout(()=>{
            resolve(true)
        },timeInMs)
    })
}



async function getPostByID(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: { revalidate: 5 },
            // cache:'no-store'
        })
    const post = await response.json()
    await wait(2000)
    return post
}

const PostWithIdPage = async ({ params,searchParams }) => {
    // console.log(props);     // output ---->  { params: { id: '14' }, searchParams: {} }
    // console.log(params,searchParams);   //output --->{ id: '14' } {}


    const post = await getPostByID(params.id)
    console.log(post);

    return (
        <div>
            <h2>post page with id</h2>
            <pre>{JSON.stringify(post, null, 2)}</pre> 
        </div>
    )
}

export default PostWithIdPage;