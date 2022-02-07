import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { globalUser } from '../../App.js';
import brand from '../../image/brand.png'
import '../../StyleSheet/Navbar.scss'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(globalUser)
    return (
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className="container">
                <div>
                    <Link to="" className='navbar-brand'>
                        <img src={brand} className='img-fluid' alt="" />
                    </Link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars" style={{ fontSize: '26px', color: '#000' }}></i>
                </button>
                <div id='myNavbar' className='collapse navbar-collapse'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <NavLink exact to='/home' className='nav-link' activeClassName='nav-link active-class-link'>হোম</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/enroll' className='nav-link' activeClassName='nav-link active-class-link'>নিবন্ধন</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/vaccine-status' className='nav-link' activeClassName='nav-link active-class-link'>নিবন্ধন স্ট্যাটাস</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/vaccine-card' className='nav-link' activeClassName='nav-link active-class-link'>টিকা কার্ড</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/registration-list' className='nav-link' activeClassName='nav-link active-class-link'>নিবন্ধন তালিকা</NavLink>
                        </li>
                        <li className='nav-item d-flex align-items-center'>
                            {
                                loggedInUser.email ?
                                    <div>
                                        <span className='text-capitalize text-warning me-3'>{loggedInUser.name}</span>
                                        <button className='btn px-2' onClick={() => setLoggedInUser({})}>SignOut</button>
                                    </div> : 
                                    <Link exact to='/registration-list' className='nav-link btn px-2'>Admin</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;