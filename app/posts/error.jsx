'use client'
import React from 'react'

export default function error({error}) {
  return (
    <div>error
        <p>{error.message}</p>
    </div>
  )
}
