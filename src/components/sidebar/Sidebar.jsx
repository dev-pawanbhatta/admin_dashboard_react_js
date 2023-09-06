import React, { useState } from 'react'

import './Sidebar.css'

import Dazelf from '../../assets/images/dazelf.png'
import { Link } from 'react-router-dom'

import SideItems from './../../data/SideItems'

const Sidebar = () => {

    const hideSidebar = () => {
        const sidebar = document.getElementById('sidebar')
        const content = document.getElementById('content')
        sidebar.classList.add('hidden')
        content.classList.toggle('visible')
    }

    function toggleMenu(id, index) {
        const element = document.getElementById(`${id}`);
        if (element != undefined) {
            element.classList.toggle('show');
            if (element.classList.contains('show')) {
                document.getElementById(`angle-icon-${index}`).classList.remove('fa-angle-right');
                document.getElementById(`angle-icon-${index}`).classList.add('fa-angle-down');
            }
            else {
                document.getElementById(`angle-icon-${index}`).classList.remove('fa-angle-down');
                document.getElementById(`angle-icon-${index}`).classList.add('fa-angle-right');
            }
        }
    }


    return (
        <aside className='sidebar shadow-sm' id='sidebar'>
            <div className="sidebar-header">
                <div className="wrapper">
                    <div className='d-flex w-100'>
                        <div style={{ width: "30px" }}>
                            <img src={Dazelf} alt="logo" className='w-100' />
                        </div>
                        <b className='mx-3'>Dazelf Labs</b>
                    </div>
                    <span className='sidebar-close-btn' onClick={hideSidebar}><i className="fa-solid fa-xmark"></i></span>
                </div>
            </div>
            <div className="sidebar-body my-4">
                <div className="sidebar-heading mb-2">
                    <b className='text-muted text-uppercase opacity-75'>Master</b>
                </div>
                {
                    SideItems.map((item, index) => (
                        <div className="side-item" key={index}>
                            <div className="menu">
                                <Link to={item.hasMenu ? '' : item.url} onClick={() => toggleMenu(`${item.id}`, index)}>
                                    <div>
                                        <i className={`fa-solid fa-${item.class} me-2`}></i>
                                        <b>{item.name}</b>
                                    </div>
                                    <div>
                                        {
                                            item.badge ?
                                                <small className="badge rounded-pill" style={item.badgeBgColor ? { background: `${item.badgeBgColor}` } : { background: "#0858f7" }}>{item.badgeText}</small>
                                                : ''
                                        }
                                        {
                                            item.hasMenu ?
                                                <i id={`angle-icon-${index}`} className={`fa-solid fa-angle-right ms-3`} style={{ fontSize: "0.9rem" }}></i>
                                                : ''
                                        }
                                    </div>
                                </Link>
                                {
                                    item.hasMenu ?
                                        <div className='menu-items px-4' id={item.id}>
                                            {
                                                item.menu.map((menu_item, menu_index) => (
                                                    <Link key={menu_index} to={menu_item.url}>{menu_item.name}</Link>
                                                ))
                                            }
                                        </div> : ''
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </aside >
    )

}

export default Sidebar
