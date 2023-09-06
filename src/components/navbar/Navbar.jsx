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
        <nav className='content-navbar shadow-sm'>
            <div className='d-flex'>
                <span onClick={toggleSidebar} style={{ cursor: "pointer" }}>
                    <i className='fa-solid fa-bars me-3'></i>
                </span>
                <div className='d-none d-sm-block'>
                    <div className="search-box d-flex">
                        <span>
                            <i className='fa-solid fa-search text-muted'></i>
                        </span>
                        <input type="text" placeholder='Search..' />
                    </div>
                </div>
            </div>

            <div className='d-flex'>
                <div className="dropdown me-4">
                    <small className='py-4' style={{ cursor: "pointer" }} id="manage-account" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="position-relative">
                            <i className='fa-solid fa-bell rounded-circle border p-2' ></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-primary" style={{ fontSize: "0.5rem", width: "20px", height: "17px" }}>
                                99
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </span>
                    </small>
                    <ul className="dropdown-menu" style={{ width: "300px" }} aria-labelledby="manage-account">
                        <div className="dropdown-header">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <b>Notifications (04) </b>
                                </div>
                                <div>
                                    <i className='fa-solid fa-gear'></i>
                                </div>
                            </div>
                        </div>
                        <li>
                            <Link className="dropdown-item" to="">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <i className='fa-solid fa-user'></i>
                                    </div>
                                    <div style={{ whiteSpace: "normal" }} className='px-2'>
                                        <small style={{ wordWrap: "break-word" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempora.</small>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <div className="dropdown-header">
                            <button type="button" className="btn btn-primary btn-sm w-100">View All</button>
                        </div>
                    </ul>
                </div>
                <div className="dropdown">
                    <small className='py-4' style={{ cursor: "pointer" }} id="manage-account" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className='fa-solid fa-user rounded-circle border p-2' ></i>
                    </small>
                    <ul className="dropdown-menu" aria-labelledby="manage-account">
                        <li><Link className="dropdown-item" to=""><i className='fa-solid fa-user me-2'></i> My Account</Link></li>
                        <li><Link className="dropdown-item" to=""><i className='fa-solid fa-shield me-2'></i> Reset Password</Link></li>
                        <li><Link className="dropdown-item text-danger" to=""><i className='fa-solid fa-lock  me-2'></i> Logout</Link></li>
                    </ul>
                </div>

            </div>
        </nav >
    )
}

export default Navbar
