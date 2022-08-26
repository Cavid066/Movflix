import React from 'react'
import ContactForm from '../Components/ContactForm/ContactForm'
import ContactsTop from '../Components/ContactsTop/ContactsTop'
import Subscription from '../Components/Subscription/Subscription'


function Contacts() {
  return (
    <div>
        <ContactsTop/>
        <ContactForm/>
        <Subscription/>
    </div>
  )
}

export default Contacts