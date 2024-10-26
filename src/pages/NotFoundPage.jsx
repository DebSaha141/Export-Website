import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function NotFoundPage() {
    return (
        <>
            <Navbar/>
        <div className='text-center'>
          <h1>404 Page Not Found</h1>
          <Link to="/">Home</Link>
        </div>
      </>
  )
}

export default NotFoundPage