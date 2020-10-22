import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/img/author_img.png'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="author-container">
                        <div className="wrapper-auth-content auth-img-container">
                            <img src={AuthorImg} />
                        </div>

                        <div className="wrapper-auth-content">
                            <p>
                                sb white is the author of five books written for the pre and teen reader.  Writing in the fantasy and sci-fi genre, she crafts stories filled with adventure and exciting characters.  
                            </p>

                            <h1>sb white</h1>

                            <span className="span-tagline">Author & Writer</span>

                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain 