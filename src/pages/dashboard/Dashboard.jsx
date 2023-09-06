import React from 'react'
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

import { barData, barOptions } from '../../data/Barchart';
import { lineData, lineOptions, totalSalesSum } from '../../data/LineChart';
import TopSellingProducts from './../../data/TopSellingProducts'


import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

import './Dashboard.css'


const Dashboard = () => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);

    return (
        <div className="m-3">
            <Breadcrumb name="Dashboard" />
            <div className="row my-4 g-3">
                <div className="col-lg-8">
                    <div className="row g-3">
                        <div className="col-lg-6">
                            <div className="card box-1 boxes">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span>Total Users</span>
                                            <h4 className='pb-3'><b>277</b></h4>
                                        </div>
                                        <div>
                                            <i className='fa-solid fa-user fs-4 p-2 icon'></i>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <div>
                                            <span className="badge">+95%</span>
                                            <span> Last Month</span>
                                        </div>
                                        <div>
                                            <i className='fa-solid fa-ellipsis-vertical' id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                            <div className="dropdown">
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <li><a className="dropdown-item" href="#">Last Week</a></li>
                                                    <li><a className="dropdown-item" href="#">Last Month</a></li>
                                                    <li><a className="dropdown-item" href="#">Last Year</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card box-2 boxes">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span>Total Orders</span>
                                            <h4 className='pb-3'><b>277</b></h4>
                                        </div>
                                        <div>
                                            <i className='fa-solid fa-shopping-cart fs-4 p-2 icon'></i>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <div>
                                            <span className="badge">-30%</span>
                                            <span> Last Month</span>
                                        </div>
                                        <div>
                                            <i className='fa-solid fa-ellipsis-vertical' id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                            <div className="dropdown">
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <li><a className="dropdown-item" href="#">Last Week</a></li>
                                                    <li><a className="dropdown-item" href="#">Last Month</a></li>
                                                    <li><a className="dropdown-item" href="#">Last Year</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card box-3 boxes">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span>Total Products</span>
                                            <h4 className='pb-3'><b>277</b></h4>
                                        </div>
                                        <div>
                                            <i className='fa-solid fa-shopping-bag fs-4 p-2 icon'></i>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <div>
                                            <span className="badge">+95%</span>
                                            <span> Last Month</span>
                                        </div>
                                        <div>
                                            <i className='fa-solid fa-ellipsis-vertical' id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                            <div className="dropdown">
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <li><a className="dropdown-item" href="#">Last Week</a></li>
                                                    <li><a className="dropdown-item" href="#">Last Month</a></li>
                                                    <li><a className="dropdown-item" href="#">Last Year</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card box-4 boxes">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span>Total Reviews</span>
                                            <h4 className='pb-3'><b>277</b></h4>
                                        </div>
                                        <div>
                                            <i className='fa-solid fa-star fs-4 p-2 icon'></i>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <div>
                                            <span className="badge">-30%</span>
                                            <span> Last Month</span>
                                        </div>
                                        <div>
                                            <i className='fa-solid fa-ellipsis-vertical' id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                            <div className="dropdown">
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <li><a className="dropdown-item" href="#">Last Week</a></li>
                                                    <li><a className="dropdown-item" href="#">Last Month</a></li>
                                                    <li><a className="dropdown-item" href="#">Last Year</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card box-1 boxes-long">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <span>Total Sales</span>
                                    <h4 className='pb-3'><b>${totalSalesSum}</b></h4>
                                </div>
                                <div>
                                    <i className='fa-solid fa-ellipsis-vertical' id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <div className="dropdown">
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Last Week</a></li>
                                            <li><a className="dropdown-item" href="#">Last Month</a></li>
                                            <li><a className="dropdown-item" href="#">Last Year</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Line options={lineOptions} data={lineData} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-3 my-4">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            Sales Analytics
                        </div>
                        <div className="card-body">
                            <Bar options={barOptions} data={barData} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <b>Top Selling Products</b>
                        </div>
                        <div className="card-body">
                            {
                                TopSellingProducts.map((item, index) => (
                                    <div className='my-3' key={index}>
                                        <small>
                                            {item.name}
                                        </small>
                                        <div className="progress" style={{ height: "0.3rem" }}>
                                            <div className="progress-bar" role="progressbar" aria-valuenow={`${item.value}`}
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: `${item.value}%`, background: `${item.color}` }}>
                                                <span className="sr-only">{item.value}% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
