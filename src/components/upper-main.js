import React from 'react'
import {Link} from 'gatsby'
import Book1 from '../images/book_front_1.png'

const UpperMain =()=>{
    return  (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">
                    <h1>Books</h1>
                    
                    <p className="middle-params">
                    Time for the white wolf and
                    the brown bear to meet
                    </p>

                    <div className="grid-two-columns" id="wrapper-two-books">
                        <div className="book-wraps">
                            <img src={Book1}/>
                            <h5>THE TWINS ON FAIRLAND</h5>
                            <span>TROLOGY</span>
                            <button>
                                <Link 
                                    to={'/about-the-book/#johnny_taggett'}>
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

export default UpperMain