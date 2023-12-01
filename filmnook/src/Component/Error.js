import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err=useRouteError()
    console.log(err)
  return (
    <div className='Error'>
        <div className='er'>
        <h5>{err.status}||</h5>
        <h5>{err.statusText}</h5>
        </div>
        
    </div>
  )
}

export default Error