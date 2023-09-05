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
                <span className='me-2 fw-bold'>Dashboard</span>
            </div>
            <div className='d-flex'>
                <input className="px-2 me-2 d-none d-sm-block" type="search" placeholder="Search" aria-label="Search" />
                <div className="dropdown">
                    <Link target='_blank' to="https://github.com/dev-pawanbhatta/admin_dashboard_react_js">
                        <i className="fa-solid fa-star text-warning px-3"></i>
                    </Link>
                </div>
                <div className="dropdown">
                    <i className="fa-solid fa-ellipsis-vertical px-3" id="settings" data-bs-toggle="dropdown" aria-expanded="false"></i>
                    <ul className="dropdown-menu" aria-labelledby="settings">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <i className='fa-solid fa-user px-3' id="profile" data-bs-toggle="dropdown" aria-expanded="false"></i>
                    <ul className="dropdown-menu" aria-labelledby="profile">
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
