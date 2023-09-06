import React from 'react'

import Dazelf from '../../assets/images/dazelf.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container py-5 mx-auto' style={{ maxWidth: "400px" }}>
            <div className='text-center'>
                <img src={Dazelf} width={"100px"} alt="" />
                <h4 className='text-secondary mt-3'>Login to continue...</h4>
            </div>
            <div className="card">
                <div className="card-header py-4">
                    <form action="" method="post">
                        <div className="form-group mb-3">
                            <input type="email" name="email" className='form-control' placeholder="Enter email..." />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" name="password" className='form-control' placeholder="Enter password..." />
                        </div>
                        <button type="button" className="btn btn-primary w-100"><b>Login</b></button>
                        <div className='text-center mt-3'>
                            <Link to={'/forgot-password'} className='text-secondary text-decoration-none'>Forgot Password?</Link>
                        </div>
                    </form>
                    <div className='position-relative my-5'>
                        <div>
                            <hr />
                        </div>
                        <span className='text-secondary border rounded-circle p-1 position-absolute bg-light' style={{ top: "-16px", left: "45%" }}>OR</span>
                    </div>
                    <div className='mt-2'>
                        <button type="button" className="btn w-100 mb-2 text-light" style={{ background: "purple" }}><b><i className='fa-brands fa-google me-2'></i>Continue with Google</b></button>
                        <button type="button" className="btn w-100 mb-2 text-light" style={{ background: "#3b5998" }}><b><i className='fa-brands fa-facebook me-2'></i>Continue with Facebook</b></button>
                    </div>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-header text-center">
                    <span className=' text-secondary'>Don't have an account? </span>
                    <Link to={'/register'}>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
