import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../StyleSheet/Sidebar.scss'
import play_store from '../../image/surokkha-playstor.jpg'

const SideNav = () => {
    
    return (
        <ul className='sidebar p-0'>
            <li>
                <NavLink exact to="/enroll/regNationalId" className='sidebar-link' activeClassName='sidebar-link sidebar-link-active'>
                    জাতীয় পরিচয়পত্র
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/enroll/regBirthCertificate" className='sidebar-link' activeClassName='sidebar-link sidebar-link-active'>
                    জন্ম নিবন্ধন সার্টিফিকেট
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/enroll/regPassport" className='sidebar-link' activeClassName='sidebar-link sidebar-link-active'>
                    পাসপোর্ট (বাংলাদেশি/বিদেশি)
                </NavLink>
            </li>
            <li className='mt-5'>
                <a href="https://play.google.com/store/apps/details?id=com.codersbucket.surokkha_app" target="_blank">
                    <img src={play_store} className='img-fluid' alt="" />
                </a>
            </li>
        </ul>
    );
};

export default SideNav;