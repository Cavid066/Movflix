import React from 'react'
import '../BlogArticles/BlogArticles.scss'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ForumIcon from '@mui/icons-material/Forum';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SearchIcon from '@mui/icons-material/Search';

function BlogArticles() {
    return (
        <div className='blog_articles'>
            <div className="blog_articles_container">
                <div className="articles">
                    <div className="article">
                        <img src="https://themebeyond.com/html/movflx/img/blog/blog_thumb01.jpg" alt="" />
                        <div className="description">
                            <div className="date">
                                <span>
                                    <AccessTimeIcon className='icon time' />
                                    10 Mar 2021
                                </span>
                            </div>
                            <div className="article_name">
                                <h2>Your Free Movie Streaming Purposes</h2>
                            </div>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend .</p>
                            </div>
                            <div className="description_bottom">
                                <div className="article_details">
                                    <div className="author">
                                        <PersonOutlineIcon className='icon user' />
                                        <span>by <span className='admin'>Admin</span> </span>
                                    </div>
                                    <div className="likes">
                                        <ThumbUpIcon className='icon like' />
                                        <span>63</span>
                                    </div>
                                    <div className="comments">
                                        <ForumIcon className='icon comment' />
                                        <span className='comments_link'>12 Comments</span>
                                    </div>
                                </div>
                                <div className="read_more">
                                    <span>Read More </span>
                                    <KeyboardDoubleArrowRightIcon className='icon arrow' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article">
                        <img src="https://themebeyond.com/html/movflx/img/blog/blog_thumb02.jpg" alt="" />
                        <div className="description">
                            <div className="date">
                                <span>
                                    <AccessTimeIcon className='icon time' />
                                    10 Mar 2021
                                </span>
                            </div>
                            <div className="article_name">
                                <h2>Your Free Movie Streaming Purposes</h2>
                            </div>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend .</p>
                            </div>
                            <div className="description_bottom">
                                <div className="article_details">
                                    <div className="author">
                                        <PersonOutlineIcon className='icon user' />
                                        <span>by <span className='admin'>Admin</span> </span>
                                    </div>
                                    <div className="likes">
                                        <ThumbUpIcon className='icon like' />
                                        <span>63</span>
                                    </div>
                                    <div className="comments">
                                        <ForumIcon className='icon comment' />
                                        <span className='comments_link'>12 Comments</span>
                                    </div>
                                </div>
                                <div className="read_more">
                                    <span>Read More </span>
                                    <KeyboardDoubleArrowRightIcon className='icon arrow' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pages">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>Next</span>
                    </div>
                </div>

                <div className="articles_side_bar">
                    <div className="search_article side_bar_box">
                        <h3>Search Objects</h3>
                        <form action="#">
                            <input type="text" placeholder='Search...' />
                            <button>
                                <SearchIcon />
                            </button>
                        </form>
                    </div>

                    <div className="categories side_bar_box">
                        <h3>Categories</h3>
                        <ul>
                            <li>
                                <span className='category_name'>Movies</span>
                                <span>12</span>
                            </li>
                            <li>
                                <span className='category_name'>Action Movies</span>
                                <span>10</span>
                            </li>
                            <li>
                                <span className='category_name'>Streaming</span>
                                <span>9</span>
                            </li>
                            <li>
                                <span className='category_name'>Download</span>
                                <span>16</span>
                            </li>
                        </ul>
                    </div>

                    <div className="recent_posts side_bar_box">
                        <h3>Recent Posts</h3>
                        <div className="recent_post_box">
                            <img src="https://themebeyond.com/html/movflx/img/blog/rc_post_thumb01.jpg" alt="" />
                            <div className="recent_post_text">
                                <h5>Express Management Effective</h5>
                                <div className="date">
                                    <span>
                                        <AccessTimeIcon className='icon time' />
                                        10 Mar 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="recent_post_box">
                            <img src="https://themebeyond.com/html/movflx/img/blog/rc_post_thumb02.jpg" alt="" />
                            <div className="recent_post_text">
                                <h5>Express Management Effective</h5>
                                <div className="date">
                                    <span>
                                        <AccessTimeIcon className='icon time' />
                                        10 Mar 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="recent_post_box">
                            <img src="https://themebeyond.com/html/movflx/img/blog/rc_post_thumb03.jpg" alt="" />
                            <div className="recent_post_text">
                                <h5>Express Management Effective</h5>
                                <div className="date">
                                    <span>
                                        <AccessTimeIcon className='icon time' />
                                        10 Mar 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tag_post side_bar_box">
                        <h3>Tag Post</h3>
                        <ul>
                            <li>Movies</li>
                            <li>Creative</li>
                            <li>News</li>
                            <li>Romantic</li>
                            <li>Who</li>
                            <li>English</li>
                            <li>Blending</li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default BlogArticles