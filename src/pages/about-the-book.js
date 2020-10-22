import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../images/book_front_1.png'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'sb-white',
	  config: { identifier:  12, slug}
    }
    

	
	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo  
                                data={{
                                    title:`THE TWINS ON FAIRLAND`,
                                    spanTitle: "TRILOGY",
                                    imgSrc: Book1,
                                    id:'johnny_taggett',
                                    content:
                                    `<p></p>Book 1 – The Hidden Kingdom</p>
                                    <p>
                                    In The Hidden Kingdom, Tre and Skylin, twins separated at birth, are reunited. As they get to know each other, they discover an ancient magic hidden for years. They team up to protect the hidden kingdom of Fairland alongside their unique animal guardians. When they are challenged by a forgotten enemy with dark powers, they must trust and depend on each other. Tre and Skylin are guided on their journey into unknown territory by Mallrok, a mystic shaman. The twins may look alike, but are very different in other ways. Together they complete each other as the Twins of Fairland. 
                                    </p><p>
                                    Book 2 – Revenge of the Spirit Riders
                                    </p><p>
                                    In Revenge of the Spirit Riders, the magic continues when Tre discovers an ancient curse placed on the lineage of Currin. Queen Laurel, Tre and Skylin’s mother, is the last of the line of queens of Currin, and Fairland is threatened by the dark spirit riders of Lothan. Tre and Skylin must lead the people to a new land and escape the destruction of Fairland. 
                                    </p><p>
                                    Book 3 – The Sword of Justice
                                    </p><p>
                                    Escaping from the coming threat of Saxon invaders, the children of Tre and Skylin must ban together to survive and find a new home. Merlin, Tre’s son, and Nav, Skylin’s son, must lead the small band of survivors to safety. Once settled in their new home, Merlin must keep his oath to his father and leaves to join Arthur.  Now armed with The Sword of Justice, Arthur leads the fight against the Saxon army. 
                                    </p>`,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/the-twins-of-fairland-trilogy/',
                                        barnes: 'https://www.barnesandnoble.com/w/the-twins-of-fairland-sb-white/1136287303?ean=9781643458700',
                                        amazon :'https://www.amazon.com/Twins-Fairland-Trilogy-sb-white-ebook/dp/B084D1S5KG/ref=sr_1_1?keywords=9781643458700&qid=1580497412&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Twins-Fairland-Trilogy-Sb-White/dp/164345868X/ref=sr_1_1?keywords=9781643458687&qid=1581369855&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-twins-of-fairland-sb-white/1136287303?ean=9781643458687',
                                        booksamillion:'https://www.booksamillion.com/p/Twins-Fairland/Sb-White/9781643458687?id=8009965417365&_ga=2.232041435.530926941.1603351103-1770015116.1600996550',
                                    },
                                    // screenPlay: true
                                }}
                            />

                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;