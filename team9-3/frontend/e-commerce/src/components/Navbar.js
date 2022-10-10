import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from "../Context/User/UserState";

function Navbar() {
    let navigate = useNavigate();

    const {type} = useContext(UserContext);
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    console.log("Navbar "+type);
    return (

        <div className="main-navbar shadow-sm sticky-top" >
            <div className="top-navbar" style={{ backgroundColor: "#4C6793" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                            <h5 className="brand-name">Ecommerce</h5>
                        </div>
                        <div className="col-md-5 my-auto">
                            <form role="search">
                                <div className="input-group">
                                    <input type="search" placeholder="Search your product" className="form-control" />
                                    <button className="btn bg-white" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 my-auto">
                            <ul className="nav justify-content-end">

                                <li className="nav-item my-1">
                                    <Link className="nav-link" to='/cart'>
                                        <i className="fa fa-shopping-cart"></i> Cart (0)
                                    </Link>
                                </li>


                                {!localStorage.getItem('token') ? <li className="nav-item">
                                    <Link to="/login"><button className="btn btn-outline-light mx-2 my-1" >Login</button></Link>
                                </li> : < li className="nav-item dropdown" >
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user"></i></Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="#"><i className="fa fa-user"></i> Profile</Link></li>
                                        <li><Link className="dropdown-item" to="#"><i className="fa fa-list"></i> My Orders</Link></li>
                                        <li><Link className="dropdown-item" to="#"><i className="fa fa-shopping-cart"></i> My Cart</Link></li>
                                        <li><Link onClick={handleLogout} className="dropdown-item" to="#"><i className="fa fa-sign-out"></i> Logout</Link></li>
                                    </ul>
                                </li>}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-light navbar-expand-lg" style={{ backgroundColor: "#8BBCCC" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand d-block d-sm-block d-md-none d-lg-none" to="#">
                        Ecommerce
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">All Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">New Arrivals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Featured Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Kid</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Summer</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Winter</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addProducts"><button  type="button" className="btn btn-secondary">Add Product</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;