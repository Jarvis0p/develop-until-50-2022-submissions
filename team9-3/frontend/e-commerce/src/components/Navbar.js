import React from "react";
import {Link,useNavigate} from "react-router-dom";

function Navbar(){
    let navigate = useNavigate();

     const handleLogout = () => {
         localStorage.removeItem('token');
         navigate('/login');
     }
    
    return(
        
    <div className="main-navbar shadow-sm sticky-top" >
        <div className="top-navbar" style={{backgroundColor:"#4C6793"}}>
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
                                <a className="nav-link" href="#">
                                    <i className="fa fa-shopping-cart"></i> <Link to="/cart"> Cart (0)</Link>
                                </a>
                            </li>
                    

                             {!localStorage.getItem('token') ? <li className="nav-item">
                                       <Link to="/login"><button className="btn btn-outline-light mx-2 my-1" >Login</button></Link> 
                                    </li> : < li className = "nav-item dropdown" >
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-user"></i> Username 
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"><i className="fa fa-user"></i> Profile</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa fa-list"></i> My Orders</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa fa-shopping-cart"></i> My Cart</a></li>
                                <li><a onClick={handleLogout} className="dropdown-item" href="#"><i className="fa fa-sign-out"></i> Logout</a></li>
                                </ul>
                             </li>}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-light navbar-expand-lg" style={{backgroundColor:"#8BBCCC"}}>
            <div className="container-fluid">
                <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                    Ecommerce
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">All Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">New Arrivals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Featured Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kid</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Summer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Winter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

)
}

export default Navbar;