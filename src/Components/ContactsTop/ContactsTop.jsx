import React from 'react'
import { Link } from 'react-router-dom'
import '../ContactsTop/ContactsTop.scss'


function ContactsTop() {
  return (
    <div className='contacts_top'>
        <div className="contacts">
            <h1>Contact Us</h1>
            <ul>
                <li className='home'>
                  <Link to={`/`}>HOME</Link>
                  </li>
                <li>CONTACTS</li>
            </ul>
        </div>
    </div>
  )
}

export default ContactsTop