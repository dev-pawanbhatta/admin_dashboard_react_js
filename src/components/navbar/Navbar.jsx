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
                <i className="fa-solid fa-star me-3"></i>
                <i className="fa-solid fa-ellipsis-vertical me-3" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <div className="dropdown">
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
