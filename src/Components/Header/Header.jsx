import React, { useContext, useState } from 'react'
import '../Header/header.scss'
import SignIn from '../SignIn/SignIn'
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className='nav'>
            <div className="nav_container">
                <div className='nav_container__logo'>
                    <h3><span>Compar</span>Flix</h3>
                </div>
                <div className='nav_container__items'>
                    <ul>
                        <li>HOME
                            {/* <div className='drop_menu'>
                                <ul>
                                    <li>HOME ONE</li>
                                    <li>HOME TWO</li>
                                </ul>
                            </div> */}
                        </li>
                        <li>MOVIE</li>
                        <li>TV SHOW</li>
                        <li>PRICING</li>
                        <Link to={`/blog`}>
                        <li>BLOG</li>
                        </Link>
                        <li>CONTACTS</li>
                    </ul>
                </div>
                <div className='nav_container__sidebar'>
                    <SignIn />
                </div>
            </div>
        </div>
    )
}

export default Header