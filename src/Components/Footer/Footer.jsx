import React from 'react'
import '../Footer/Footer.scss'
import SearchIcon from '@mui/icons-material/Search';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="footer_top">
                    <div className="logo">
                        <img src="https://themebeyond.com/html/movflx/img/logo/logo.png" alt="" />
                    </div>
                    <div className="footer_menu">
                        <ul>
                            <li>HOME</li>
                            <li>MOVIE</li>
                            <li>TV SHOW</li>
                            <li>PAGES</li>
                            <li>PRICING</li>
                        </ul>
                    </div>
                    <div className="footer_search">
                        <form action="#">
                            <input type="search" placeholder="Find Favorite Movie" />
                            <button>
                                <SearchIcon className='search_icon' />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="footer_mid">
                    <div className="footer_mid_menu">
                        <ul>
                            <li>FAQ</li>
                            <li>HELP CENTER</li>
                            <li>TERMS OF USE</li>
                            <li>PRIVACY</li>
                        </ul>
                    </div>
                    <div className="social_accounts">
                        {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
                        <a href="facebook.com"><FacebookIcon className='facebook_icon soc_icon' /></a>
                        <a href="twitter.com"><TwitterIcon className='twitter_icon soc_icon' /></a>
                        <a href="pinterest.com"> <PinterestIcon className='pinterest_icon soc_icon' /></a>
                        <a href="linkedin.com"><LinkedInIcon className='linkedin_icon soc_icon' /></a>
                    </div>
                </div>
            </div>
            <div className="footer_bottom_container">
                <div className="footer_bottom">
                    <div className="copyright">
                        <p>Copyright © 2021. All Rights Reserved By <span>Movflix</span></p>
                    </div>
                    <div className="payment_methods">
                        <img src="https://themebeyond.com/html/movflx/img/images/card_img.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer