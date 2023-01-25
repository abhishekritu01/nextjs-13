import React from 'react'

const PostLayouts = ({children}) => {
  return (
    <div>
        <h1>Post Id Layout Nested Loop</h1>
        <ul>
            <li>Link 4</li>
            <li>Link 5</li>
            
        </ul>
        <div>{children}</div>
    </div>
  )
}

export default PostLayouts