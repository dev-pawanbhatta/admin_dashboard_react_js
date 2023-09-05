import React from 'react'

import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const toggleSidebar = () => {
        const sidebar = document.getElementById('sidebar')
        const content = document.getElementById('content')
        sidebar.classList.toggle('hidden')
        content.classList.toggle('visible')
    }
    return (
        <nav className='content-navbar'>
            <div>
                <span onClick={toggleSidebar} style={{ cursor: "pointer" }}>
                    <i className='fa-solid fa-bars me-3'></i>
                </span>
                <Link to={'/'} className='me-2'>Home</Link>
                <span className='me-2'>/</span>
                <span className='me-2 fw-bold'>Dashboard</span>
            </div>
            <div>
                <i className="fa-solid fa-star"></i>
            </div>
        </nav>
    )
}

export default Navbar
