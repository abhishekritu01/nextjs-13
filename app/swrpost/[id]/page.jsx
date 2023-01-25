// import React from 'react'


// async function getPostByID(id) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
//         {
//             next: { revalidate: 5 },
//             // cache:'no-store'
//         })
//     const data = await response.json()
//     return data
// }

// const PostWithIdPage = async ({ params,searchParams }) => {
//     // console.log(props);     // output ---->  { params: { id: '14' }, searchParams: {} }
//     // console.log(params,searchParams);   //output --->{ id: '14' } {}

//     const data = await getPostByID(params.id)
//     console.log(data);

//     return (
//         <div>
//             <h2>post page with id</h2>
//             <pre>{JSON.stringify(data, null, 2)}</pre> 
//         </div>
//     )
// }

// export default PostWithIdPage;

'use client'

import React from 'react'
import axios from 'axios'
import useSWR from 'swr'

const PostWithIdPage = ({ params }) => {
  const { data, error, isValidating } = useSWR(`https://jsonplaceholder.typicode.com/users/${params.id}`, async (url) => {
    const res = await axios.get(url);
    return res.data;
  });
  if (isValidating) return <div>loading...</div>
  if (error) return <div>failed to load</div>
  if (!data) return <div>empty</div>

  console.log(data)

  return (
    <div>
      <h2>post page with id</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default PostWithIdPage



