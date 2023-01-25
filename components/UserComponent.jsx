'use client'
import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import LoadingPost from '@/app/posts/[id]/loading'

import Link from 'next/link'


const fetcher = url => axios.get(url).then(response => response.data)

const UserComponent = () => {

    // const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
    const { data, error, mutate } = useSWR('https://jsonplaceholder.typicode.com/users',
        fetcher,
        {
            // revalidateOnFocus:false,
            // refreshInterval:1000,
        }
    )

    if (error) {
        return <p>{error.message}</p>
    }

    if (!data) {
        return <h3>LoadingPost...</h3>
    }

    return (
        <div>
            <h3>User Component</h3>
            <button onClick={() => mutate()}>Refetch data again</button>
            {/* {data.map(user => <p key={user.id}>{user.id} . {user.name}</p>)} */}
            {data.map(user => <div key={user.id}><Link href={`/swrpost/${user.id}`}>  {user.name}</Link></div>)}
            
            {/* <pre>{JSON.stringify(data ,null ,2)}</pre> */}
        </div>
    )
}

export default UserComponent

