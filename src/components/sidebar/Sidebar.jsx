import React from 'react'

import './Sidebar.css'

const Sidebar = () => {
    const hideSidebar = () => {
        const sidebar = document.getElementById('sidebar')
        const content = document.getElementById('content')
        sidebar.classList.add('hidden')
        content.classList.toggle('visible')
    }
    return (
        <aside className='sidebar' id='sidebar'>
            <div className="sidebar-header">
                <div className="wrapper">
                    <span>Dashboard</span>
                    <span className='sidebar-close-btn' onClick={hideSidebar}><i className="fa-solid fa-xmark"></i></span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
