// import React, { useContext, useState } from 'react'
import '../Header/header.scss'
import SignIn from '../SignIn/SignIn'
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
    return (
        <div>
            <div className='nav_bar'>
                <div className='logo'>
                    <img src="https://themebeyond.com/html/movflx/img/logo/logo.png" alt="" />
                </div>
                <div className="nav_bar_items">
                    <ul>
                        <li className='home'><Link to="/">HOME PAGE</Link>
                            <div className='drop_menu'>
                                <ul>
                                    <li>HOME ONE</li>
                                    <li>HOME TWO</li>
                                </ul>
                            </div>
                        </li>
                        {/* <li className='home'>Home page</li> */}
                        <li>MOVIE
                            <div className='drop_menu'>
                                <ul>
                                    <li>MOVIE</li>
                                    <li>MOVIE DETAILS</li>
                                </ul>
                            </div>
                        </li>
                        <li>TV SHOW</li>
                        <li className='pricing'> 
                         <Link to="/pricing">PRICING</Link></li>
                        
                        <li className='blog'><Link to="/blog">BLOG</Link>
                        <div className='drop_menu'>
                                <ul>
                                    <li>OUR BLOG</li>
                                    <li>BLOG DETAILS</li>
                                </ul>
                            </div>
                        </li>
                        <li>CONTACTS</li>
                    </ul>
                </div>
                <div className='nav_bar_side'>
                    <SearchIcon className='search'/>
                    <LanguageIcon className='globe'/>
                    <span>EN
                        <KeyboardArrowDownIcon/> 
                        <ul className='lang_menu'>
                            <li>EN</li>
                            <li>AU</li>
                            <li>AR</li>
                            <li>TU</li>
                        </ul>
                    </span>
                    <div className="sign_in">
                        <SignIn/>
                    </div>
                    {/* <button>SIGN IN</button> */}
                </div>
            </div>
        </div>
    )
}

export default Header