import React from 'react'
import '../PricingTop/PricingTop.scss'
import { Link } from 'react-router-dom'


function PricingTop() {
    return (
        <div className='pricing_top'>
            <div className="pricing">
                <h1>Our Plan</h1>
                <ul>
                    <li className='pricing'>
                        <Link to={`/`}>HOME</Link>
                    </li>
                    <li>PRICING</li>
                </ul>
            </div>
        </div>
    )
}

export default PricingTop