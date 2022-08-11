import React, { useContext, useState } from 'react'
import '../Header/header.scss'
import SignIn from '../SignIn/SignIn'
function Header() {



    return (
        <div className='nav'>
            <div className="nav_container">
                <div className='nav_container__logo'>
                    <h3><span>Compar</span>Flix</h3>
                </div>
                <div className='nav_container__items'>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li>item 5</li>
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