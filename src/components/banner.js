import React from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/banner_img.png'

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="banner-layout-responsive">
                        
                        <div className="left-col">
                            <div className="banner-content-wrapper">
                                <h1>
                                    <span>Time for the white wolf and</span> 
                                    <span>the brown bear to meet</span>
                                </h1>
                                <p>
                                    Throughout the world various cultures hold to the belief that twins are special. Indeed in myths and legends twins are said to be symbols of change or are destined for greatness.
                                </p>
                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className="right-col banner-img">
                            <img src={ImgBanner}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;