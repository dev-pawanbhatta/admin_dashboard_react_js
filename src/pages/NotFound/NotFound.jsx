import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div style={{ height: "calc(100vh - 106px)" }} className='d-flex justify-content-center align-items-center'>
            <div className='text-center'>
                <h1 className='text-danger mb-3' style={{ fontSize: "10rem" }}>Oops !</h1>
                <h3 className='mb-3'>404 Page Not Found...</h3>
                <Link to={'/'} className="btn btn-primary mx-1">Go to Home</Link>
                <Link to={'/'} className="btn btn-success mx-1">Contact Us</Link>
            </div>
        </div>
    )
}

export default NotFound
