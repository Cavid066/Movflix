import React from 'react'
import '..//Subscription/Subscription.scss'


function Subscription() {
  return (
    <div className='subscription'>
        <div className="subscription_container">
            <div className="trial">
                <h1>TRIAL START FIRST 30 DAYS.</h1>
                <h5>Enter your email to create or restart your membership.</h5>
            </div>
            <div className="start_subscription">
                <form action="#">
                    <input type="email" placeholder='Enter your email' />
                    <button>GET STARTED</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Subscription