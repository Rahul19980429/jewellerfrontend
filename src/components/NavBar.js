
import React, { useContext } from 'react';
import Context from '../context/Context';
import { Link, useLocation} from 'react-router-dom';
import logo from "../images/logo.png";
const NavBar = () => {
    let location = useLocation();

    const a = useContext(Context);
    const { setSearchCustomer,logOutClick} = a;
    
    return (
        <>
            <nav className="navbar  sticky-top  navbar-expand-lg  text-center">
                <div className="container-fluid px-4">
                    <Link className="navbar-brand me-lg-5 ps-lg-3 " to="/"><img className='outline-danger ' src={logo} alt="logo" width="100" /> </Link>
                    {localStorage.getItem('J_token')?<>
                    <button className="navbar-toggler text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="yellowclr"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list fw-bold" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link  text-white  rounded-2 me-lg-4 fw-bold px-3 ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-white  rounded-2 me-lg-4 fw-bold px-3 ${location.pathname === '/allcustomers' ? 'active' : ''}`} to="/allcustomers">Spammed Customer</Link>
                            </li>
                            {/* only for superadmin */}
                            {localStorage.getItem('J_superAdmin')==='true'?
                            <li className="nav-item">
                                <Link className={`nav-link text-white  rounded-2 me-lg-4 fw-bold px-3 ${location.pathname === '/addnewuser' ? 'active' : ''}`} to="/addnewuser">Add New Jeweller</Link>
                            </li>:''}
                            <li className="nav-item">
                                <Link className={`nav-link text-white  rounded-2 me-lg-4 fw-bold px-3 ${location.pathname === '/calculation' ? 'active' : ''}`} to="/calculation">Calculation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-white  rounded-2 me-lg-4 fw-bold px-3 ${location.pathname === '/orderdetail' ? 'active' : ''}`} to="/orderdetail">Customer Order</Link>
                            </li>
                        </ul>
                        <Link className={`btn btn-sm text-white  btnlogIn fw-bold  fs-6 me-lg-3 `} to="/login" onClick={logOutClick} >Log Out</Link>
                    </div></>:''}

                </div>
            </nav>
            

        </>

    )
}

export default NavBar
