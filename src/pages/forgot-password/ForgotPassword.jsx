import React from 'react'


import Dazelf from '../../assets/images/dazelf.png'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div className='container py-5 mx-auto' style={{ maxWidth: "400px" }}>
            <div className='text-center'>
                <img src={Dazelf} width={"100px"} alt="" />
                <h4 className='text-secondary mt-3'>Reset Password...</h4>
            </div>
            <div className="card">
                <div className="card-header py-4">
                    <form action="" method="post">
                        <div className="form-group mb-3">
                            <input type="email" name="email" className='form-control' placeholder="Enter email..." />
                        </div>
                        <button type="button" className="btn btn-primary w-100"><b>Send Reset Link</b></button>
                    </form>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-header text-center">
                    <span className=' text-secondary'>Remember password? </span>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
