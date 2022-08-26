import React from 'react'
import '../ContactForm/ContactForm.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function ContactForm() {
    return (
        <div className='contact_details'>
            <div className="contact_details_container">
                <div className="contact_form">
                    <h3>Contact Form</h3>
                    <div className="contact_form_box">
                        <div className="first_inputs">
                            <input className='name_input' type="text" placeholder='Your Name *' />
                            <input className='mail_input' type="text" placeholder='Your Email *' />
                        </div>

                        <input className='subject_input' type="text" placeholder='Subject *' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Type Your Message'></textarea>
                        <button>SEND MESSAGE</button>
                    </div>

                </div>

                <div className="contact_side_bar">
                    <h3>Information</h3>
                    <div className="side_bar_box">
                        <p><span>Find solutions :</span> to common problems, or get help from a support agent industry's standard .</p>
                        <ul>
                            <li><LocationOnIcon className='contact_icon'/>
                                <h5><span>Address :</span> W38 Park Road New York</h5>
                            </li>
                            <li>
                                <LocalPhoneIcon className='contact_icon'/>
                                <h5><span>Address :</span>  W38 Park Road New York</h5>
                            </li>
                            <li>
                                <EmailIcon className='contact_icon'/>
                                <h5><span>Address :</span> W38 Park Road New York</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ContactForm