import React from 'react'

const PostLayouts = ({children}) => {
  return (
    <div>
        <div>Post-Layout</div>
        <ul>
            <li>some Link1</li>
            <li>some Link2</li>
        </ul>
        <div>{children}</div>
    </div>
  )
}

export default PostLayouts