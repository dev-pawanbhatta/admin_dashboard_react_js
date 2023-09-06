import React from 'react'
import { Link } from 'react-router-dom'

import './Breadcrumb.css'

const Breadcrumb = (props) => {
    return (
        <div className="card p-3 border-0 dashboard-breadcrumb">
            <div className="d-flex justify-content-between">
                <div>
                    <b>{props.name}</b>
                </div>
                <div>
                    <small className='me-3'>
                        <Link to={'/'} style={{ textDecoration: "none" }}>Home</Link>
                    </small>
                    <small className='me-3'>
                        <b>~</b>
                    </small>
                    <small className='me-3'>
                        {props.name}
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb
